import { Inject } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '@/database/entities/user.entity';
import { DeleteUserService } from '@/services/user/delete-user.service';
import { DeleteUserService as IDeleteUserService } from '@/interfaces/user/delete-user.interface';

@Resolver(() => User)
export class FindOneUserResolver {
  constructor(
    @Inject(DeleteUserService) private deleteUserService: IDeleteUserService,
  ) { }
  @Mutation(() => Boolean)
  async deleteUser(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    return this.deleteUserService.delete(id);
  }
}

