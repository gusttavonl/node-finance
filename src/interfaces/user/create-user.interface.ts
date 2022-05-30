import { User } from './user.interface';

export type CreateUserInput = Partial<Pick<User, 'name' | 'email' | 'password'>>

export interface CreateUserService {
  create(input: CreateUserInput): Promise<User>;
}
