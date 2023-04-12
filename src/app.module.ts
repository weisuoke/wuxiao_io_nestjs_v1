import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import typeOrmConfig from './datebase/typeorm.config';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: { level: 'debug' },
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserModule],
})
export class AppModule {}
