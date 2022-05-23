import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class JWT {
  @Field()
  accessToken: string;

  @Field()
  expiresIn: number;
}