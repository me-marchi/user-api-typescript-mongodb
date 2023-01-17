import { IUserRepository } from '../../../infra/repositories/userRepository.protocols';
import { IUser } from '../../../domain/models/user';

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: Pick<IUserRepository, 'create'>
  ) {}

  async create(userDTO: Partial<IUser>): Promise<IUser> {
    delete userDTO._id;

    const createdUser = await this.userRepository
      .create({ ...userDTO })
      .catch((error) => {
        console.log(error);
        throw new Error('User not created');
      });
    return createdUser;
  }
}
