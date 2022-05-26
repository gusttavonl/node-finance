import faker from 'faker';

export const User = {
  id: faker.random.uuid(),
  name: faker.random.words(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  created_at: faker.date.recent(),
  updated_at: faker.date.recent(),
};
