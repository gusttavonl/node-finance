import { Account } from './account.interface';

export interface FindAllAccountsService {
  find(): Promise<Account[]>;
}
