import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';
import { CreateRoleDto } from './create-role.dto';
import { UpdateRoleDto } from './update-role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = new Role();
    role.name = createRoleDto.name;
    role.description = createRoleDto.description;

    return await this.roleRepository.save(role);
  }

  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async findOne(id: number): Promise<Role> {
    return await this.roleRepository.findOne({ where: { id } });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = await this.roleRepository.findOne({ where: { id } });
    role.name = updateRoleDto.name;
    role.description = updateRoleDto.description;

    return await this.roleRepository.save(role);
  }

  async remove(id: number): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
