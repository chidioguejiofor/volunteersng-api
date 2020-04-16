import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';

import * as ormconfig from '../ormconfig';
@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), RoleModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
