import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { databaseProviders } from '../../providers/database.providers';
import { Connection } from 'typeorm';
import { Role } from '../roles/entities/role.entity';
import { User } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  providers: [
    ...databaseProviders,
    UsersService,
    {
      provide: 'USER_REPOSITORY',
      useFactory: (connection:Connection) => connection.getRepository(User),
      inject: ["POSTGRES_CONNECTION"]
    }
  ]
})
export class UsersModule {}
