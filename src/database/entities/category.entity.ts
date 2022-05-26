import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Dates from './dates.entity';
import { User } from './user.entity';

@ObjectType()
@Entity()
export class Category extends Dates {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  type: string
}
