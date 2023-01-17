import { UserRepository } from '../../../infra/repositories/userRepository';
import { FindAllUsers } from '../../../domain/useCases/findAllUsersUseCase';
import { FindAllUsersUseCase } from './FindAllUsersUseCase';

export function findAllUsersFactory(): FindAllUsers {
    const userRepository = new UserRepository();

    return new FindAllUsersUseCase(userRepository);
}
