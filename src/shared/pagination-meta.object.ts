import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export default class PaginationMeta {
  @Field()
  totalItems: number;

  @Field()
  itemCount: number;

  @Field()
  itemsPerPage: number;

  @Field()
  totalPages: number;

  @Field()
  currentPage: number;
}