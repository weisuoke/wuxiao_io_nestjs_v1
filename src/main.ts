import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import * as process from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const envFile =
    process.env.NODE_ENV === 'production'
      ? '.env.production'
      : '.env.development';
  dotenv.config({ path: envFile });

  // Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('My NestJS API')
    .setDescription('API document for my NestJS application')
    .setVersion('1.0')
    .build();

  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
