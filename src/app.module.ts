import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './datebase/typeorm.config';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule, RoleModule],
  controllers: [AppController],
  providers: [AppService, UserModule],
})
export class AppModule {}
