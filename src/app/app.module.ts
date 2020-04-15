import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { RoleModule } from '../role/role.module';
import { OrganizationModule } from '../organization/organization.module';
import { MembershipModule } from '../membership/membership.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [UsersModule, RoleModule, OrganizationModule, MembershipModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
