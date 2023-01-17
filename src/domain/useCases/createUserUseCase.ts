import { IUser } from '../models/user';

export interface CreateUser {
  create(dto: Partial<IUser>): Promise<IUser>;
}
