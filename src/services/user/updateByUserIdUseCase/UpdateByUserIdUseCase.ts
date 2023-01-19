import { IUserRepository } from '../../../domain/data/userRepository.protocols';
import { User } from '../../../domain/models/user';

export class UpdateUserByIdUseCase {
    constructor(
        private readonly userRepository: Pick<IUserRepository, 'updateById'>
    ) {}

    async updateById(userId: string, userDTO: Partial<User>): Promise<User> {
        const updatedUser = await this.userRepository
        .updateById(userId, {
            ...userDTO,
            updatedAt: new Date()
        })
        .catch(() => {
            throw new Error('User not found');
        });

        if (!updatedUser) {
        throw new Error('User not found');
        }

        return updatedUser;
    }
}
