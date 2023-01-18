import { IUserRepository } from '../../../infra/repositories/userRepository.protocols';
import { IUser } from '../../../domain/models/user';


export class UpdateUserByIdUseCase {
    constructor(
        private readonly userRepository: Pick<IUserRepository, 'updateById'>
    ) {}

    async updateById(userId: string, userDTO: Partial<IUser>): Promise<IUser> {
        const updatedUser = await this.userRepository.updateById(userId, { 
            ...userDTO, 
            updatedAt: new Date() 
        })
        .catch(() => {
            throw new Error('User not found');
        });

        if (!updatedUser) {
            throw new Error('User not found');
        }

        return updatedUser;
    }
}
