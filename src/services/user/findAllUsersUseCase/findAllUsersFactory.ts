import { UserRepository } from '../../../infra/repositories/userRepository';
import { FindAllUsers } from '../../../domain/useCases/findAllUsers.protocols';
import { FindAllUsersUseCase } from './FindAllUsersUseCase';

export function findAllUsersFactory(): FindAllUsers {
    const userRepository = new UserRepository();

    return new FindAllUsersUseCase(userRepository);
}
