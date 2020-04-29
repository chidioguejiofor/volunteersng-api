import {MinLength, MaxLength, IsEmail, IsNotEmpty} from 'class-validator';
import * as authError from '../../constants/auth.constants';
export class UserLogInDto {
    @IsNotEmpty({message: authError.REQUIRED_EMAIL_ERROR})
    @IsEmail({}, { message: authError.VALID_EMAIL_ERROR})
    email: string;

    @IsNotEmpty({message: authError.REQUIRED_PASSWORD_ERROR})
    @MinLength(4, {message: authError.VALID_PASSWORD_ERROR})
    @MaxLength(32, {message: authError.VALID_PASSWORD_ERROR})
    password: string;
}