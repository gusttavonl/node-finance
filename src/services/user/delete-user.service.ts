import { Injectable } from '@nestjs/common';
import { UserRepository } from '@/repositories/user.repository';

@Injectable()
export class DeleteUserService {
  constructor(private userRepository: UserRepository) { }
  async delete(id: string): Promise<boolean> {
    const user = await this.userRepository.findOne(id)
    await this.userRepository.remove(user);
    return true;
  }
}
