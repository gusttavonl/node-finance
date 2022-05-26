import faker from 'faker';
import { User } from './user.entity'
import { Category } from './category.entity'

export const Account = {
  id: faker.random.uuid(),
  user: User,
  category: Category,
  title: faker.random.words(),
  description: faker.random.words(),
  type: 'debit',
  value: faker.random.number(),
  date: faker.date.recent(),
  created_at: faker.date.recent(),
  updated_at: faker.date.recent(),
};
