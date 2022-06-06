import { Injectable } from '@nestjs/common';
import { User } from '@/database/entities/user.entity';
import { UserRepository } from '@/repositories/user.repository';
import { CreateUserInput } from '@/resolvers/user/input/create-user.input';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: UserRepository) { }
  async create(input: CreateUserInput): Promise<User> {
    const user = await this.userRepository.save(input);
    return user;
  }
}
