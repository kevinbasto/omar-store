import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { databaseProviders } from '../../providers/database.providers';
import { Connection } from 'typeorm';
import { Role } from './entities/role.entity';

@Module({
  controllers: [RolesController],
  providers: [
    ...databaseProviders,
    RolesService,
    {
      provide: 'ROLE_REPOSITORY',
      useFactory: (connection:Connection) => connection.getRepository(Role),
      inject: ['POSTGRES_CONNECTION']
    }
  ]
})
export class RolesModule {}
