import { Injectable } from '@nestjs/common';
import { User } from '@/database/entities/user.entity';
import { UserRepository } from '@/repositories/user.repository';

@Injectable()
export class FindOneUserService {
  constructor(private userRepository: UserRepository) { }
  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    return user;
  }
}
