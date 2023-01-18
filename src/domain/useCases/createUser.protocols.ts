import { IUser } from '../models/user';

export type CreateUserDTO = Partial<Omit<IUser, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>>

export interface CreateUser {
  create(dto: CreateUserDTO): Promise<IUser>;
}
