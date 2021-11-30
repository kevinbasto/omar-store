import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './endpoints/roles/roles.module';
import { UsersModule } from './endpoints/users/users.module';

@Module({
  imports: [RolesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
