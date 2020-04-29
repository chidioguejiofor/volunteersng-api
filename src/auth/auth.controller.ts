import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { UserRegisterDto } from './dto/user-register.dto';
import { AuthService } from './auth.service';
import { UserLogInDto } from './dto/user-login.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}
    @Post('/register')
    regsiterUser(@Body(ValidationPipe) userRegisterDto: UserRegisterDto) {
        return this.authService.registerUser(userRegisterDto);
    }
    @Post('/login')
    loginUser(@Body(ValidationPipe) userLogInDto: UserLogInDto) {
        return this.authService.loginUser(userLogInDto);
    }
    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req) {
        return req.user;
    }
}
