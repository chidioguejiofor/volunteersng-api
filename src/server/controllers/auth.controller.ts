import HashHelper from '../helpers/hash.helper';
import TokenHelper from '../helpers/token.helper';
import UserRepository from '../repositories/user.repositories';
import OrganizationRepository from '../repositories/organization.repositories';
import MembershipRepository from '../repositories/membership.repositories';
import RoleRepository from '../repositories/role.repositories';

const { getUser, createUser } = UserRepository;
const { getOrganization, createOrganization } = OrganizationRepository;
const { createRole } = RoleRepository;
const { createMembership } = MembershipRepository;
export default class AuthController {
	public static async registerUser(req, resp) {
		try {
      const { name, email, username, password } = req.body;
      console.log(name, email, username, password)
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
	public static async registerOrganization(req, resp) {
		try {
			const { name, email, password, username, ...organiztionData } = req.body;
			const { orgName, orgEmail } = organiztionData;
			// check if user exists
			const user = await getUser(email);
			if (user) {
				return resp.status(400).send({ success: false, message: 'Email already exists' });
			}
			// check if organization exists
			const organization = await getOrganization({ email: orgEmail, name: orgName });
			if (organization) {
				return resp.status(400).send({ success: false, message: 'Organization exists' });
			}
			// create user
			const userData = { name, email, username, password: HashHelper.hashPassword(password) };
			const newUser = await createUser(userData);

			// create organization
			const newOrganizationData = {
				...organiztionData,
				name: organiztionData.orgName,
				email: organiztionData.orgEmail
			};
			const { id: orgId } = await createOrganization(newOrganizationData);
			// create owner role
			const { id: roleId, name: roleName } = await createRole({
				name: 'Owner',
				description: `${newOrganizationData.name} owner`
			});

			// create membership
			await createMembership({
				userId: newUser.id,
				orgId,
				roleId
			});

			// create token and return response
			const payload = {
				user: { id: newUser.id, username: newUser.username, status: newUser.verified },
				organization: { id: orgId },
				role: { id: roleId, name: roleName }
			};
			const token: string = TokenHelper.generateToken(payload);
			return resp.status(201).send({
				success: true,
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
