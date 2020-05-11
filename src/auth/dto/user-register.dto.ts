import {IsString, MinLength, MaxLength, IsEmail, IsEmpty, IsBoolean, IsDefined, IsNotEmpty} from 'class-validator';
import * as authError from '../../constants/auth.constants';
import { Optional } from '@nestjs/common';
export class UserRegisterDto {
    @IsNotEmpty({message: authError.REQUIRED_NAME_ERROR})
    @IsString()
    @MinLength(2, {message: authError.VALID_NAME_ERROR})
    @MaxLength(32, {message: authError.VALID_NAME_ERROR})
    firstname: string;

    @IsNotEmpty({message: authError.REQUIRED_NAME_ERROR})
    @IsString()
    @MinLength(2, {message: authError.VALID_NAME_ERROR})
    @MaxLength(32, {message: authError.VALID_NAME_ERROR})
    lastname: string;

    @IsNotEmpty({message: authError.REQUIRED_EMAIL_ERROR})
    @IsString()
    @IsEmail({}, { message: authError.VALID_EMAIL_ERROR})
    email: string;

    @IsNotEmpty({message: authError.REQUIRED_USERNAME_ERROR})
    @IsString()
    @MinLength(2,{message: authError.VALID_USERNAME_ERROR})
    @MaxLength(20, {message: authError.VALID_USERNAME_ERROR})
    username: string;

    @IsNotEmpty({message: authError.REQUIRED_PASSWORD_ERROR})
    @IsString()
    @MinLength(4, {message: authError.VALID_PASSWORD_ERROR})
    @MaxLength(32, {message: authError.VALID_PASSWORD_ERROR})
    password: string;


    @Optional()
    verified: boolean;
}