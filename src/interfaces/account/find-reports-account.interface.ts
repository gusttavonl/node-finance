import { AccountReports } from './account.interface';

export interface FindReportsAccountService {
  findReports(user_id: string): Promise<AccountReports>;
}
