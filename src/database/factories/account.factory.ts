import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Account } from '../entities/account.entity';
import { User } from '../entities/__mocks__/user.entity'
import { Category } from '../entities/__mocks__/category.entity'

define(Account, (faker: typeof Faker) => {
  const account = new Account();
  account.id = faker.random.uuid();
  account.user = User;
  account.category = Category;
  account.title = faker.random.words();
  account.description = faker.random.words();
  account.type = 'debit';
  account.value = faker.random.number();
  account.date = faker.date.recent();
  account.created_at = faker.date.recent();
  account.updated_at = faker.date.recent();
  return account;
});
