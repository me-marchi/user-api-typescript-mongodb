import { IUserRepository } from '../../../domain/data/userRepository.protocols';
import { User } from '../../../domain/models/user';

export class FindAllUsersUseCase {
    constructor(
        private readonly userRepository: Pick<IUserRepository, 'findAll'>
    ) {}

    async findAll(): Promise<User[]> {
        const foundUsers = await this.userRepository.findAll().catch(() => {
            throw new Error('No users found');
        });
        
        return foundUsers;
    }
}
