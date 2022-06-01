import { Injectable } from '@nestjs/common';
import { User } from '@/database/entities/user.entity';
import { UserRepository } from '@/repositories/user.repository';

@Injectable()
export class FindAllUsersService {
  constructor(private userRepository: UserRepository) { }
  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }
}
