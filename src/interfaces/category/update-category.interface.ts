import { Category, CategoryData } from './category.interface';

export type UpdateCategoryInput = Partial<Pick<CategoryData, 'title' | 'description'>>

export interface UpdateCategoryService {
  update(id: string, input: UpdateCategoryInput): Promise<Category>;
}
