import { Category, CategoryData } from './category.interface';

export type CreateCategoryInput = Partial<Pick<CategoryData, 'title' | 'description' | 'type' | 'user_id'>>

export interface CreateCategoryService {
  create(input: CreateCategoryInput): Promise<Category>;
}
