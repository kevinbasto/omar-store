import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { databaseProviders } from '../../providers/database.providers';
import { Connection } from 'typeorm';
import { Account } from './entities/account.entity';

@Module({
  controllers: [AccountsController],
  providers: [
    ...databaseProviders,
    AccountsService,
    {
      provide: 'ACCOUNTS_REPOSITORY',
      useFactory: (connection:Connection) => connection.getRepository(Account),
      inject: ["POSTGRES_CONNECTION"]
    }
  ]
})
export class AccountsModule {}
