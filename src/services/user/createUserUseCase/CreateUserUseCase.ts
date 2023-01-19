import { IUserRepository } from '../../../domain/data/userRepository.protocols';
import { User } from '../../../domain/models/user';
import { CreateUserDTO } from '../../../domain/useCases/createUser.protocols';

export class CreateUserUseCase {
    constructor(
        private readonly userRepository: Pick<IUserRepository, 'create'>
    ) {}

    async create(userDTO: CreateUserDTO): Promise<User> {
        const createdUser = await this.userRepository
        .create({ ...userDTO })
        .catch(() => {
            throw new Error('User not created');
        });

        return createdUser;
    }
}
