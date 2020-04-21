import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';


@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository]), UserRepository],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
