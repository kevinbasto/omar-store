import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USER_REPOSITORY') private database : Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    try {
      this.database.save(createUserDto);
    } catch (error) {
      throw error;
    }
    return 'user created successfully';
  }

  async findAll() {
    let users : Array<User>
    try {
      users = await this.database.find();
    } catch (error) {
      throw error;
    }
    return users;
  }

  async findOne(id: number) {
    let user : User;
    try {
      user = await this.database.findOne(id);
    } catch (error) {
      throw error;
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    try {
      this.database.update(id, updateUserDto);
    } catch (error) {
      throw error;
    }
    return `User with id #${id} updated`;
  }

  remove(id: number) {
    try {
      this.database.delete(id);
    } catch (error) {
      throw error;
    }
    return `User with id #${id} deleted`;
  }
}
