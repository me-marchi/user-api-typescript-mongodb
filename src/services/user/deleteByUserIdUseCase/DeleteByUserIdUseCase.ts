import { IUserRepository } from '../../../infra/repositories/userRepository.protocols';

export class DeleteUserByIdUseCase {
    constructor(
        private readonly userRepository: Pick<IUserRepository, 'deleteById'>
    ) {}

    async deleteById(userId: string): Promise<void> {
        await this.userRepository
        .deleteById(userId)
        .catch(() => {
            throw new Error('User not found');
        });
    }
}
