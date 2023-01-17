import { IUser } from '../../domain/models/user';
import { UserModel } from '../schema/userSchema';
import { IUserRepository } from './userRepository.protocols';
import { MongooseHelper } from '../database/mongooseHelper';

export class UserRepository implements IUserRepository {
  async create(userDTO: Partial<Omit<IUser, '_id'>>): Promise<IUser> {
    await MongooseHelper.getConnection();
    const user = new UserModel({ ...userDTO });
    const createdUser = await UserModel.create(user);
    return createdUser;
  }

  async findAll(): Promise<IUser[]> {
    await MongooseHelper.getConnection();
    const foundUser = await UserModel.find();
    return foundUser;
  }
}
