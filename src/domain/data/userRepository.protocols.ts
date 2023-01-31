import { User } from '../models/user';

export interface UserFilter {
    term?: string;
    country?: string;
    createdAtStartPeriod?: string;
    createdAtEndPeriod?: string;
}

export interface IUserRepository {
    create(userDTO: Partial<User>): Promise<User>;
    findAllWithFilters(filter: UserFilter): Promise<User[]>;
    findById(userId: string): Promise<User | null>;
    updateById(userId: string, userDTO: Partial<Omit<User, 'id'>>): Promise<User | null>;
    deleteById(userId: string): Promise<void>;
}
