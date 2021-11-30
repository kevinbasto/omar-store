import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './endpoints/roles/roles.module';
import { UsersModule } from './endpoints/users/users.module';
import { AccountsModule } from './endpoints/accounts/accounts.module';
import { ProductModule } from './endpoints/product/product.module';
import { TransactionsModule } from './endpoints/transactions/transactions.module';
import { PurchasesModule } from './endpoints/purchases/purchases.module';

@Module({
  imports: [RolesModule, UsersModule, AccountsModule, ProductModule, TransactionsModule, PurchasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
