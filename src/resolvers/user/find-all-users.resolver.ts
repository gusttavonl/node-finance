import { Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from '@/database/entities/user.entity';
import { FindAllUsersService } from '@/services/user/find-all-users.service';
import { FindAllUsersService as IFindAllUsersService } from '@/interfaces/user/find-all-users.interface';

@Resolver(() => User)
export class FindAllUsersResolver {
  constructor(
    @Inject(FindAllUsersService) private findAllUsers: IFindAllUsersService,
  ) { }
  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.findAllUsers.findAll();
  }
}
