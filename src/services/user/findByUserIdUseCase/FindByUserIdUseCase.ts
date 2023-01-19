import { IUserRepository } from '../../../domain/data/userRepository.protocols';
import { User } from '../../../domain/models/user';

export class FindByUserIdUseCase {
    constructor(
        private readonly userRepository: Pick<IUserRepository, 'findById'>
    ) {}

    async findById(userId: string): Promise<User> {
        const foundUser = await this.userRepository.findById(userId).catch(() => {
        throw new Error('User not found');
        });

        if (!foundUser) {
        throw new Error('User not found');
        }

        return foundUser;
    }
}
