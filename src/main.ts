import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { Logger } from 'nestjs-pino';
import * as process from 'process';

import { AppModule } from './app.module';

async function bootstrap() {
  const envFile =
    process.env.NODE_ENV === 'production'
      ? '.env.production'
      : '.env.development';
  dotenv.config({ path: envFile });

  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(Logger));

  // Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('My NestJS API')
    .setDescription('API document for my NestJS application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
