import { Test } from '@nestjs/testing';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { AccountRepository } from '@/repositories/account.repository';
import { FindAllAccountsService } from './find-all-account.service';

jest.mock('@/repositories/account.repository');
describe('FindAllAccountsService', () => {
  type SutTypes = { sut: FindAllAccountsService; repository: AccountRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [AccountRepository, FindAllAccountsService],
    }).compile();
    const service = moduleRef.get<FindAllAccountsService>(FindAllAccountsService);
    const repository = moduleRef.get<AccountRepository>(AccountRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find all Accounts', async () => {
    const { sut } = await makeSut();
    expect(await sut.find()).toMatchObject([Account]);
  });
});
