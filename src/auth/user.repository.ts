import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { UserRegisterDto } from "./dto/user-register.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async getUserById(id: string) {
        return await User.findOne({ where: { id } });
    }
    async getUser(email: string) {
        return await User.findOne({ where: { email } });
    }
    async createUser(data: UserRegisterDto) {
        const newUser =  await User.create(data);
        await newUser.save()
        return newUser;
    }
}