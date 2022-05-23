import { Field, ObjectType } from '@nestjs/graphql';
import PaginationMeta from './pagination-meta.object';

const PaginationFactory = <T>(entity: T) => {
  @ObjectType()
  class Pagination {
    @Field(() => [entity])
    items: T[];

    @Field(() => PaginationMeta)
    meta: PaginationMeta;
  }
  return Pagination as any;
};

export default PaginationFactory;