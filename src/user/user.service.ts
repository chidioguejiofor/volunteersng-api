import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UsersService {
        constructor(
          @InjectRepository(UserRepository) private usersRepository: UserRepository,
        ) {}
}
