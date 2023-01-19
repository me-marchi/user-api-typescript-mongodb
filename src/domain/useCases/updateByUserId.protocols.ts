import { User } from '../models/user';

export type UpdateUserDTO = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>>

export interface UpdateByUserId {
    updateById(userId: string, dto: UpdateUserDTO): Promise<User>
}
