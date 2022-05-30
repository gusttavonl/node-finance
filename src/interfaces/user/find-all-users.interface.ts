import { User } from './user.interface';

export interface FindAllUsersService {
  findAll(): Promise<User[]>;
}
