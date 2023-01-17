import { IUserRepository } from '../../../infra/repositories/userRepository.protocols';
import { IUser } from '../../../domain/models/user';

export class FindAllUsersUseCase {
  constructor(
    private readonly userRepository: Pick<IUserRepository, 'findAll'>
  ) {}

  async findAll(): Promise<IUser[]> {
    const foundUsers = await this.userRepository.findAll().catch(() => {
      throw new Error('No users found');
    });
    return foundUsers;
  }
}
