import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {

  constructor(
    @Inject('ROLE_REPOSITORY') private database : Repository<Role>
  ){}

  async create(createRoleDto: CreateRoleDto) {
    try {
      await this.database.save(createRoleDto);
    } catch (error) {
      console.log(error);
      throw error;
    }
    return 'role created';
  }

  async findAll() {
    let roles = await this.database.find()
    roles.map((role : any) => {
      role.roleId = parseInt(role.roleId);
      role.authority = parseInt(role.authority);
      return role;
    })
    return roles;
  }

  async findOne(id: number) {
    let role : Role;
    role = await this.database.findOne(id)
    .then((res : any) => { 
      res.roleId = parseInt(res.roleId); 
      res.authority = parseInt(res.authority); 
      return res; 
    });
    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    try {
      await this.database.update(id, updateRoleDto);
    } catch (error) {
      throw error;
    }
    return `Role #${id} updated`;
  }

  async remove(id: number) {
    try {
      await this.database.delete(id);
    } catch (error) {
      throw error;
    }
    return `Role #${id} deleted`;
  }
}
