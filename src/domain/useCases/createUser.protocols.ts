import { User } from '../models/user';

export type CreateUserDTO = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>>

export interface CreateUser {
    create(dto: CreateUserDTO): Promise<User>;
}
