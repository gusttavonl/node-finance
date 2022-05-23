import * as path from 'path';

const typeormForSeedConfig = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT ? +process.env.POSTGRES_PORT : 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  autoLoadEntities: true,
  entities: [path.resolve(__dirname, '**/*.entity.{ts,js}')],
  logging: true,
  factories: [path.resolve(__dirname, '**/*.factory.{ts,js}')],
  seeds: [path.resolve(__dirname, '**/*.seed.{.ts,.js}')],
};
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export = typeormForSeedConfig;
