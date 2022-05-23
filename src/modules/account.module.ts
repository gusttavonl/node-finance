import { AccountRepository } from '@/repositories/account.repository';
import { FindAllAccountsResolver } from '@/resolvers/account/find-all-account.resolver';
import { FindAllAccountsService } from '@/services/account/find-all-account.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AccountRepository, AccountRepository])],
  providers: [
    FindAllAccountsService,
    FindAllAccountsResolver,
  ],
})
export class AccountModule {}