import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as process from 'process';

async function bootstrap() {
  const envFile =
    process.env.NODE_ENV === 'production'
      ? '.env.production'
      : '.env.development';
  dotenv.config({ path: envFile });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
