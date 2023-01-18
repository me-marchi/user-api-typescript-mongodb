import { IUser } from '../models/user';

export type UpdateUserDTO = Partial<Omit<IUser, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>>

export interface UpdateByUserId {
    updateById(userId: string, dto: UpdateUserDTO): Promise<IUser>
}
