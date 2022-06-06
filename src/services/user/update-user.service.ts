import { Injectable } from '@nestjs/common';
import { User } from '@/database/entities/user.entity';
import { UserRepository } from '@/repositories/user.repository';
import { UpdateUserInput } from '@/resolvers/user/input/update-user.input';

@Injectable()
export class UpdateUserService {
  constructor(private userRepository: UserRepository) { }
  async update(id: string, input: UpdateUserInput): Promise<User> {
    const user = await this.userRepository.findOne(id);
    const userUpdated = Object.assign(user, input)
    return this.userRepository.save(userUpdated);
  }
}
