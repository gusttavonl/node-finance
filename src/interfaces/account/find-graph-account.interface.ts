import { AccountGraph } from './account.interface';

export interface FindGraphAccountService {
  findGraph(user_id: string): Promise<AccountGraph>;
}
