import { User } from '../../domain/models/user';
import { UserModel } from '../schema/userSchema';
import { IUserRepository } from '../../domain/data/userRepository.protocols';
import { MongooseHelper } from '../database/mongooseHelper';
import { CreateUserDTO } from '../../domain/useCases/createUser.protocols';

export class UserRepository implements IUserRepository {

    async create(userDTO: CreateUserDTO): Promise<User> {
        await MongooseHelper.getConnection();
        const user = new UserModel({ ...userDTO });
        const result = await UserModel.create(user);
        return result;
    }

    async findAll(): Promise<User[]> {
        await MongooseHelper.getConnection();
        const result = await UserModel.find();
        return result;
    }

    async findById(userId: string): Promise<User | null> {
        await MongooseHelper.getConnection();
        const result = await UserModel.findById(userId);
        return result;
    }

    async updateById(userId: string, attributes: Partial<Omit<User, '_id'>>): Promise<User | null> {
        await MongooseHelper.getConnection();
        const result = await UserModel.updateOne({ 
            _id: userId 
        }, { 
            ...attributes 
        }).then(async () => {
            return this.findById(userId);
        });
        return result;
    }

    async deleteById(userId: string): Promise<void> {
        await MongooseHelper.getConnection();
        await UserModel.deleteOne({ _id: userId });
    }
}
