import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @Inject('ACCOUNTS_REPOSITORY') private database : Repository<Account>
  ){}
  create(createAccountDto: CreateAccountDto) {
    this.database.save(createAccountDto);
    return 'Account Created succesfully';
  }

  async findAll() {
    let accounts : Array<Account>;
    try {
      accounts = await this.database.find();
    } catch (error) {
      throw error;
    }
    return `This action returns all accounts`;
  }

  async findOne(id: number) {
    let account : Account;
    try {
      account = await this.database.findOne(id);
    } catch (error) {
      throw error;
    }
    return account;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    this.database.update(id, updateAccountDto);
    return `account #${id} updated`;
  }

  remove(id: number) {
    this.database.delete(id);
    return `This action removes a #${id} account`;
  }
}
