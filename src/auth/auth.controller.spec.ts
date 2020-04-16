import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { UserRepository } from './user.repository';
import {User} from './user.entity';
import * as authError from '../constants/auth.constants';
import userMockData from './mockData/user.mock';
import { AuthService } from './auth.service';

const {user1, user2} = userMockData;

describe('Auth Controller', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, UserRepository]
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
