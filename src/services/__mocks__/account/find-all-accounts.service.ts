import { Account } from '@/database/entities/__mocks__/account.entity';
export class FindAllAccountsService {
  find = jest.fn(() => [Account]);
}
