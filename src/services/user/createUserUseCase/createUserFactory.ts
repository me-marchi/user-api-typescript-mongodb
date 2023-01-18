import { UserRepository } from '../../../infra/repositories/userRepository';
import { CreateUser } from '../../../domain/useCases/createUser.protocols';
import { CreateUserUseCase } from './CreateUserUseCase';

export function createUserFactory(): CreateUser {
    const userRepository = new UserRepository();

    return new CreateUserUseCase(userRepository);
}
