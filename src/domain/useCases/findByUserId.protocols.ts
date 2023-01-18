import { IUser } from '../models/user';

export interface FindByUserId {
    findById(userId: string): Promise<IUser>;
}
