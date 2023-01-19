import { User } from '../models/user';

export interface FindByUserId {
    findById(userId: string): Promise<User>;
}
