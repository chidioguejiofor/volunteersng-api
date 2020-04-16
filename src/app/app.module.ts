import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../user/user.module';
import { RoleModule } from '../role/role.module';
import { OrganizationModule } from '../organization/organization.module';
import { MembershipModule } from '../membership/membership.module';
import { AuthModule } from '../auth/auth.module';
import * as ormconfig from '../../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UsersModule, RoleModule, OrganizationModule, MembershipModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
