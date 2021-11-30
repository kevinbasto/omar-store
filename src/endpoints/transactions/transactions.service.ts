import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {

  constructor(
    @Inject('TRANSACTIONS_REPOSITORY') private database : Repository<Transaction>
  ){}

  create(createTransactionDto: CreateTransactionDto) {
    this.database.save(createTransactionDto)
    return 'Transaction successfully saved';
  }

  findAll() {
    return this.database.find();
  }

  findOne(id: number) {
    return this.database.findOne(id);
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    this.database.update(id, updateTransactionDto);
    return `succesfully updated transaction`
  }

  remove(id: number) {
    this.database.delete(id);
    return `Transaction #${id} has been deleted`;
  }
}
