import { EntityRepository, Repository } from 'typeorm';
import { Account } from '@/database/entities/account.entity';

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> { }
