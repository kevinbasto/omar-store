import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { databaseProviders } from '../../providers/database.providers';
import { Connection } from 'typeorm';
import { Product } from './entities/product.entity';

@Module({
  controllers: [ProductController],
  providers: [
    ...databaseProviders,
    ProductService,
    {
      provide: 'PRODUCTS_REPOSITORY',
      useFactory: (connection:Connection) => connection.getRepository(Product),
      inject: ["POSTGRES_CONNECTION"]
    }
  ]
})
export class ProductModule {}
