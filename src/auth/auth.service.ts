import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRegisterDto } from './dto/user-register.dto';
import {UserLogInDto} from './dto/user-login.dto';
import HashHelper from '../helpers/hash.helper';
import {JwtService} from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as authError from '../constants/auth.constants';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService, 
    ){}
    async registerUser(userRegisterDto: UserRegisterDto){
        const {firstname, lastname, username, email, password} = userRegisterDto;
        
        const user = await this.userRepository.getUser(email);

        if(user) {
            throw new BadRequestException(authError.USER_EXISTS);
        }

        const userData: UserRegisterDto = { firstname, lastname, username,email, password: HashHelper.hashPassword(password), verified: false};
        const newUser = await this.userRepository.createUser(userData);
        const payload: JwtPayload = { id: newUser.id, username: newUser.username, verified: newUser.verified};
        const accessToken = await this.jwtService.sign(payload)
        return {
            message: authError.USER_REGISTRATION_MESSAGE,
            accessToken
        };
    }

    async loginUser(userLogInDto: UserLogInDto){
        const {email, password} =  userLogInDto;

        const user = await this.userRepository.getUser(email);

        if(!user) {
            throw new NotFoundException(authError.INVALID_LOGIN_CREDENTIALS);
        }
        const validPassword = HashHelper.comparePassword(user.password, password);
        if(!validPassword) {
            throw new BadRequestException(authError.INVALID_LOGIN_CREDENTIALS);
        }
        const {id, username, verified} = user;
        const payload: JwtPayload = { id, username, verified};
        const accessToken = await this.jwtService.sign(payload)

        return {
            success: true,
            accessToken
        };
    }
}
