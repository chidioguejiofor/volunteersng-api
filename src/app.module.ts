import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserModule} from './user/user.module';
import { RoleModule } from './role/role.module';

import * as ormconfig from '../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule, RoleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
