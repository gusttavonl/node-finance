import { Field, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export default abstract class Dates {
  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;
}