import { ConnectionOptions } from 'typeorm';
import { environment, isTesting } from '@/consts/envs';
const databases = {
  development: process.env.POSTGRES_DATABASE || 'backend_pg_db',
  test: 'backend_pg_db_test',
};
const typeormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT ? +process.env.POSTGRES_PORT : 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE || databases[environment],
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  dropSchema: isTesting,
  synchronize: isTesting,
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  migrationsRun: false,
  cli: { migrationsDir: 'src/migrations' },
};
export = typeormConfig;
