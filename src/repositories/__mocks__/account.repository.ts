import { Account } from '@/database/entities/__mocks__/account.entity';

export class AccountRepository {
  find = jest.fn(() => [Account]);
}
