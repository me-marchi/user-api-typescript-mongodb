import { UserRepository } from '../../../infra/repositories/userRepository';
import { UpdateByUserId } from '../../../domain/useCases/updateByUserId.protocols';
import { UpdateUserByIdUseCase } from './UpdateByUserIdUseCase';

export function updateByUserIdFactory(): UpdateByUserId {
    const userRepository = new UserRepository();

    return new UpdateUserByIdUseCase(userRepository);
}
