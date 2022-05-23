import { Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { Account } from '@/database/entities/account.entity';
import { FindAllAccountsService as IFindAllAccountsService } from '@/interfaces/account/find-all-accounts.interface';
import { FindAllAccountsService } from '@/services/account/find-all-account.service';

@Resolver(() => Account)
export class FindAllAccountsResolver {
  constructor(
    @Inject(FindAllAccountsService) private findAllAccounts: IFindAllAccountsService,
  ) { }
  @Query(() => [Account])
  async accounts(): Promise<Account[]> {
    return this.findAllAccounts.find();
  }
}
