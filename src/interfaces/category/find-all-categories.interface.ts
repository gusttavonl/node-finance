import { Category, CategoryData } from './category.interface';

export type FindAllCategoriesInput = Partial<Pick<CategoryData, 'title' | 'description' | 'type' | 'user_id'>>

export interface FindAllCategorysService {
  findAll(input: FindAllCategoriesInput): Promise<Category[]>;
}
