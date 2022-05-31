import { Account, AccountData } from './account.interface';

export type UpdateAccountInput = Partial<Pick<AccountData, 'title' | 'description' | 'value'>>

export interface UpdateAccountService {
  update(id: string, input: UpdateAccountInput): Promise<Account>;
}
