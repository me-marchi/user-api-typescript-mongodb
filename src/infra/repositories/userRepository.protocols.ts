import { IUser } from '../../domain/models/user';

export interface IUserRepository {
  create(userDTO: Partial<IUser>): Promise<IUser>;
  findAll(): Promise<IUser[]>;
}
