export interface DeleteUserService {
  delete(id: string): Promise<boolean>;
}
