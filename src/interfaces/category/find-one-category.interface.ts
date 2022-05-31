import { Category } from './category.interface';

export interface FindOneCategoryService {
  findOne(id: string): Promise<Category>;
}
