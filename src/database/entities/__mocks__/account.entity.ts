import faker from 'faker';

export const Account = {
  id: faker.random.uuid(),
  name: faker.random.words(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};
