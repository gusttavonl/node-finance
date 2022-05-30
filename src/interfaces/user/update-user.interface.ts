import { User } from './user.interface';

export type UpdateUserInput = Partial<Pick<User, 'name' | 'email' | 'password'>>

export interface UpdateUserService {
  update(id: string, input: UpdateUserInput): Promise<User>;
}
