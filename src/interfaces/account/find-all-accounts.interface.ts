import { Account, AccountData } from './account.interface';

export type FindAllCategoriesInput = Partial<Pick<AccountData, 'title' | 'description' | 'type' | 'user_id' | 'category_id' | 'value' | 'date'>>

export interface FindAllAccountsService {
  findAll(input: FindAllCategoriesInput): Promise<Account[]>;
}
