import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { databaseProviders } from '../../providers/database.providers';
import { Connection } from 'typeorm';
import { Purchase } from './entities/purchase.entity';

@Module({
  controllers: [PurchasesController],
  providers: [
    ...databaseProviders,
    PurchasesService,
    {
      provide: 'PURCHASES_REPOSITORY',
      useFactory: (connection:Connection) => connection.getRepository(Purchase),
      inject: ['POSTGRES_CONNECTION']
    }
  ]
})
export class PurchasesModule {}
