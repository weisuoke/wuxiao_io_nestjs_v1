import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './datebase/datebase.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, UserModule],
})
export class AppModule {}
