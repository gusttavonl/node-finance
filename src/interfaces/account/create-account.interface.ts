import { Account, AccountData } from './account.interface';

export type CreateAccountInput = Partial<Pick<AccountData, 'title' | 'description' | 'type' | 'value' | 'date' | 'user_id' | 'category_id'>>

export interface CreateAccountService {
  create(input: CreateAccountInput): Promise<Account>;
}
