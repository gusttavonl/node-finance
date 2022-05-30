import { User } from './user.interface';

export interface FindOneUserService {
  findOne(id: string): Promise<User>;
}
