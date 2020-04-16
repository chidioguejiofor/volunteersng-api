import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UsersService {
        constructor(
          @InjectRepository(UserRepository) private usersRepository: UserRepository,
        ) {}
      
        // findAll(): Promise<User[]> {
        //   return this.usersRepository.find();
        // }
      
        // findOne(id: string): Promise<User> {
        //   return this.usersRepository.findOne(id);
        // }
      
        // async remove(id: string): Promise<void> {
        //   await this.usersRepository.delete(id);
        // }
}
