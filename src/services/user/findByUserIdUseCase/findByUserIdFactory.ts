import { UserRepository } from '../../../infra/repositories/userRepository';
import { FindByUserId } from '../../../domain/useCases/findByUserId.protocols';
import { FindByUserIdUseCase } from './FindByUserIdUseCase';

export function findByUserIdFactory(): FindByUserId {
    const userRepository = new UserRepository();

    return new FindByUserIdUseCase(userRepository);
}
