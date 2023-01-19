import { User } from '../models/user';

export interface FindAllUsers {
    findAll(): Promise<User[]>;
}
