import { UserRepository } from '../../../infra/repositories/userRepository';
import { DeleteByUserId } from '../../../domain/useCases/deleteByUserId.protocols';
import { DeleteUserByIdUseCase } from './DeleteByUserIdUseCase';

export function deleteByUserIdFactory(): DeleteByUserId {
    const userRepository = new UserRepository();

    return new DeleteUserByIdUseCase(userRepository);
}
