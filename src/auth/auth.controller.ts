import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { UserRegisterDto } from './dto/user-register.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}
    @Post('/register')
    regsiterUser(@Body(ValidationPipe) userRegisterDto: UserRegisterDto) {
        return this.authService.registerUser(userRegisterDto);
    }
}
