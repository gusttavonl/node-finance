import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Category } from '../entities/category.entity';
import { User } from '../entities/__mocks__/user.entity'

define(Category, (faker: typeof Faker) => {
  const category = new Category();
  category.id = faker.random.uuid();
  category.user = User;
  category.title = faker.random.words();
  category.description = faker.random.words();
  category.type = 'debit';
  category.created_at = faker.date.recent();
  category.updated_at = faker.date.recent();
  return category;
});
