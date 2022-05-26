import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { User } from '../entities/user.entity';

define(User, (faker: typeof Faker) => {
  const user = new User();
  user.id = faker.random.uuid();
  user.name = faker.random.words();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.created_at = faker.date.recent();
  user.updated_at = faker.date.recent();
  return user;
});
