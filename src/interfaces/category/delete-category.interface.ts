export interface DeleteCategoryService {
  delete(id: string): Promise<boolean>;
}
