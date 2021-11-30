import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { databaseProviders } from '../../providers/database.providers';
import { Connection } from 'typeorm';
import { Transaction } from './entities/transaction.entity';

@Module({
  controllers: [TransactionsController],
  providers: [
    ...databaseProviders,
    TransactionsService,
    {
      provide: 'TRANSACTIONS_REPOSITORY',
      useFactory: (connection:Connection) => connection.getRepository(Transaction),
      inject: ['POSTGRES_CONNECTION']
    }
  ]
})
export class TransactionsModule {}
