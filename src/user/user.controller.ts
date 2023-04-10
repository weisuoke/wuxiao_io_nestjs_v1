import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UserController {
  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto): string {
    // 在这里处理创建用户的逻辑
    return `Creating a user with name: ${createUserDto.name} and email: ${createUserDto.email}`;
  }
}
