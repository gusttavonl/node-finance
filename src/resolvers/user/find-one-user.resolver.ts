import { Inject } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { User } from '@/database/entities/user.entity';
import { FindOneUserService } from '@/services/user/find-one-user.service';
import { FindOneUserService as IFindOneUserService } from '@/interfaces/user/find-one-user.interface';

@Resolver(() => User)
export class FindOneUserResolver {
  constructor(
    @Inject(FindOneUserService) private findOneUser: IFindOneUserService,
  ) { }
  @Query(() => User)
  async user(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return this.findOneUser.findOne(id);
  }
}
