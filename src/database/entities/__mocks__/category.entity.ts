import faker from 'faker';
import { User } from './user.entity'

export const Category = {
  id: faker.random.uuid(),
  user: User,
  title: faker.random.words(),
  description: faker.random.words(),
  type: 'debit',
  created_at: faker.date.recent(),
  updated_at: faker.date.recent(),
};
