import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY') private database : Repository<Product>
  ){}

  create(createProductDto: CreateProductDto) {
    this.database.save(createProductDto);
    return 'product created';
  }

  async findAll() {
    let products : Array<Product>;
    try {
      products = await this.database.find();
    } catch (error) {
      throw error
    }
    return products;
  }

  async findOne(id: number) {
    let product : Product;
    try {
      product = await this.database.findOne(id);
    } catch (error) {
      throw error;
    }
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    this.database.update(id, updateProductDto);
    return `product with id #${id} updated`;
  }

  remove(id: number) {
    this.database.delete(id);
    return `This action removes a #${id} product`;
  }
}
