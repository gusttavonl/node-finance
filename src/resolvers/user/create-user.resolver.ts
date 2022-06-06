import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '@/database/entities/user.entity';
import { CreateUserService as ICreateUserService } from '@/interfaces/user/create-user.interface';
import { CreateUserService } from '@/services/user/create-user.service';
import { CreateUserInput } from './input/create-user.input';

@Resolver(() => User)
export class CreateUserResolver {
  constructor(
    @Inject(CreateUserService) private createUserService: ICreateUserService,
  ) { }
  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    return this.createUserService.create(input);
  }
}
