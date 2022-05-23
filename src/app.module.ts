import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import graphqlConfig from './configs/graphql.config';
import { AccountModule } from './modules/account.module';

@Module({
  imports: [
    AccountModule,
    GraphQLModule.forRoot(graphqlConfig),
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}