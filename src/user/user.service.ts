import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  createUser(createUserDto: CreateUserDto): string {
    // 在这里处理创建用户的逻辑
    return `Creating a user with name: ${createUserDto.name} and email: ${createUserDto.email}`;
  }
}
