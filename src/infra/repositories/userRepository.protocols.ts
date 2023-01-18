import { IUser } from '../../domain/models/user';

export interface IUserRepository {
    create(userDTO: Partial<IUser>): Promise<IUser>;
    findAll(): Promise<IUser[]>;
    findById(userId: string): Promise<IUser|null>;
    updateById(userId: string, userDTO: Partial<Omit<IUser, 'id'>>): Promise<IUser|null>;
    deleteById(userId: string): Promise<void>;
}
