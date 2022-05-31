import { Account } from './account.interface';

export interface FindOneAccountService {
  findOne(id: string): Promise<Account>;
}
