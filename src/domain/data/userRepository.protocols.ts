import { User } from '../models/user';

export interface IUserRepository {
    create(userDTO: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findById(userId: string): Promise<User | null>;
    updateById(userId: string, userDTO: Partial<Omit<User, 'id'>>): Promise<User | null>;
    deleteById(userId: string): Promise<void>;
}
