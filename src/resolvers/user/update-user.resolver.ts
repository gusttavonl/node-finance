import { Inject } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '@/database/entities/user.entity';
import { UpdateUserService as IUpdateUserService } from '@/interfaces/user/update-user.interface';
import { UpdateUserService } from '@/services/user/update-user.service';
import { UpdateUserInput } from './input/update-user.input';

@Resolver(() => User)
export class UpdateUserResolver {
  constructor(
    @Inject(UpdateUserService) private updateUserService: IUpdateUserService,
  ) { }
  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateUserInput
  ): Promise<User> {
    return this.updateUserService.update(id, input);
  }
}
