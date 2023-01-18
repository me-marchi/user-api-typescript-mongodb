import { IUser } from '../models/user';

export interface FindAllUsers {
  findAll(): Promise<IUser[]>;
}
