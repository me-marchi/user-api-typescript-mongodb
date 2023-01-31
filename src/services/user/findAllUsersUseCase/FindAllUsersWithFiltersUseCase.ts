import { 
    IUserRepository,
    UserFilter
 } from '../../../domain/data/userRepository.protocols';
import { User } from '../../../domain/models/user';

export class FindAllUsersWithFiltersUseCase {
    constructor(
        private readonly userRepository: Pick<IUserRepository, 'findAllWithFilters'>
    ) {}

    async findAllWithFilters(filter: UserFilter): Promise<User[]> {
        const foundUsers = await this.userRepository.findAllWithFilters(filter).catch(() => {
            throw new Error('No users found');
        });
        
        return foundUsers;
    }
}
