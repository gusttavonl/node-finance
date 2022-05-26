import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';
import Dates from './dates.entity';
import { User } from './user.entity';

@ObjectType()
@Entity()
export class Account extends Dates {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  type: string

  @Column()
  value: number

  @Column()
  date: Date
}
