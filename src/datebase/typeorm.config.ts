import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Role } from '../role/role.entity';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: '123456',
  database: 'first',
  entities: [User, Role],
  synchronize: true, // Set this to 'false' in production
  logging: true,
  // ssl:
  //   process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
};

export default typeOrmConfig;
