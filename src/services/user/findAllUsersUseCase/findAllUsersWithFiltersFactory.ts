import { UserRepository } from '../../../infra/repositories/userRepository';
import { FindAllUsersWithFilters } from '../../../domain/useCases/findAllUsersWithFilters.protocols';
import { FindAllUsersWithFiltersUseCase } from './FindAllUsersWithFiltersUseCase';

export function findAllUsersWithFiltersFactory(): FindAllUsersWithFilters {
    const userRepository = new UserRepository();

    return new FindAllUsersWithFiltersUseCase(userRepository);
}
