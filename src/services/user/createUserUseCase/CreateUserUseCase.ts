import { IUserRepository } from '../../../infra/repositories/userRepository.protocols';
import { IUser } from '../../../domain/models/user';
import { CreateUserDTO } from '../../../domain/useCases/createUser.protocols';

export class CreateUserUseCase {
    constructor(
        private readonly userRepository: Pick<IUserRepository, 'create'>
    ) {}

    async create(userDTO: CreateUserDTO): Promise<IUser> {
        const createdUser = await this.userRepository
        .create({ ...userDTO })
        .catch((error) => {
            console.log(error);
            throw new Error('User not created');
        });
        return createdUser;
    }
}
