import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  username: process.env.POSTGRES_USER || 'admin',
  password: process.env.POSTGRES_PASSWORD || '123456',
  database: process.env.POSTGRES_DB || 'first',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // Set this to 'false' in production
  logging: process.env.TYPEORM_SYNC === 'true',
};

export default typeOrmConfig;
