import HashHelper from '../helpers/hash.helper';
import TokenHelper from '../helpers/token.helper';
import UserRepository from '../repositories/user.repositories';
import OrganizationRepository from '../repositories/organization.repositories';
import MembershipRepository from '../repositories/membership.repositories';
import RoleRepository from '../repositories/role.repositories';
import * as authError from '../constants/auth.constants'

const { getUserById } = UserRepository;
const { getOrganization, createOrganization } = OrganizationRepository;
const { getRole } = RoleRepository;
const { createMembership } = MembershipRepository;

const { getUser, createUser } = UserRepository;

export default class AuthController {
  public static async registerOrganization(req, resp) {
    try {
      const { email, name } = req.body;
      const { id: userId } = req.payload;
      const user = await getUserById(userId);
      if (!user) {
        return resp.status(400).send({ success: false, message: authError.EXISTING_USER });
      }

      const organization = await getOrganization({ email, name });
      if (organization) {
        return resp.status(400).send({ success: false, message: authError.EXISTING_ORG });
      }

      const { id: orgId } = await createOrganization(req.body);

      const { id: roleId, name: roleName } = await getRole('owner');

      await createMembership({
        userId,
        orgId,
        roleId,
      });

      
      const payload = {
        user: { id: user.id, username: user.username, status: user.verified },
        organization: { id: orgId },
        role: { id: roleId, name: roleName },
      };
      const token: string = TokenHelper.generateToken(payload);
      return resp.status(201).send({
        success: true,
        token,
      });
    } catch (error) {
      return resp.status(500).send({
        success: false,
        message: 'Server error',
      });
    }
  }


	public static async registerUser(req, resp) {
		try {
      const { name, email, username, password } = req.body;
			//check if user exists
			const user = await getUser(email);
			if (user) {
				return resp.status(400).send({ success: false, message: 'Email already exists' });
			}
			const userData = { name, email, username, password: HashHelper.hashPassword(password) };
      const newUser = await createUser(userData);

      	// create token and return response
			const payload = {
				user: { id: newUser.id, username: newUser.username, status: newUser.verified },
			};
			const token: string = TokenHelper.generateToken(payload);
			return resp.status(201).send({
        success: true,
        message:'Registration Successful!!',
				token
			});
      
		} catch (error) {
			console.log(error);
			return resp.status(500).send({
				message: 'Server error',
				error
			});
		}
	}

}
