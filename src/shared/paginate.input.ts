import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export default class PaginateInput {
  @IsOptional()
  @Field(() => Int)
  page: number;

  @IsOptional()
  @Field(() => Int)
  limit = 10;
}