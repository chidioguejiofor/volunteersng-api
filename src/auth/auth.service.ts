import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRegisterDto } from './dto/user-register.dto';
import * as authError from '../constants/auth.constants';
import HashHelper from '../helpers/hash.helper';
import TokenHelper from '../helpers/token.helper';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}
    async registerUser(userRegisterDto: UserRegisterDto){
       try {
        const {firstname, lastname, username, email, password} = userRegisterDto;

        const user = await this.userRepository.getUser(email);

        if(user) {
            throw new BadRequestException(authError.USER_EXISTS);
        }

        const userData: UserRegisterDto = { firstname, lastname, username,email, password: HashHelper.hashPassword(password), verified: false};
        const newUser = await this.userRepository.createUser(userData);

        const payload = {
            user: { id: newUser.id, username: newUser.username, status: newUser.verified },
        };
        const token: string = TokenHelper.generateToken(payload);

        return {
            message: authError.USER_REGISTRATION_MESSAGE,
            token
        };

       } catch(error) {
        throw new InternalServerErrorException(error)
       }
    }

}
