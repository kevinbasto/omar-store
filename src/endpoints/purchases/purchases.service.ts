import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Purchase } from './entities/purchase.entity';

@Injectable()
export class PurchasesService {

  constructor(
    @Inject('PURCHASES_REPOSITORY') private database : Repository<Purchase>
  ){}

  create(createPurchaseDto: CreatePurchaseDto) {
    this.database.save(createPurchaseDto);
    return `purchase successfully created!`;
  }

  findAll() {
    return this.database.find();
  }

  findOne(id: number) {
    return this.database.findOne(id);
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    this.database.update(id, updatePurchaseDto);
    return `purchase with id #${id} successfully updated`;
  }

  remove(id: number) {
    this.database.delete(id);
    return `purchase  #${id} deleted`;
  }
}
