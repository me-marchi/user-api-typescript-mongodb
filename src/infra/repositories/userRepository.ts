import { User } from '../../domain/models/user';
import { UserModel } from '../schema/userSchema';
import { IUserRepository, UserFilter } from '../../domain/data/userRepository.protocols';
import { MongooseHelper } from '../database/mongooseHelper';
import { CreateUserDTO } from '../../domain/useCases/createUser.protocols';

export class UserRepository implements IUserRepository {

    async create(userDTO: CreateUserDTO): Promise<User> {
        await MongooseHelper.getConnection();
        const user = new UserModel({ ...userDTO });
        const result = await UserModel.create(user);
        return result;
    }

    async findAllWithFilters(filter: UserFilter): Promise<User[]> {
        const { term, country, createdAtStartPeriod, createdAtEndPeriod } = filter;

        await MongooseHelper.getConnection();
        const query = {};

        if (term) {
            const termQuery = { 
                $or: [{ 
                    firstName: { $regex: term, $options: 'mis' } 
                }, { 
                    lastName: { $regex: term, $options: 'mis' } 
                }, { 
                    phoneNumber: { $regex: term, $options: 'mis' }  
                }, { 
                    email: { $regex: term, $options: 'mis' }  
                }]
            };
            Object.assign(query, termQuery);
        }

        if (country) {
            const countryQuery = { 'address.country': { $regex: country, $options: 'mis' } };
            Object.assign(query, countryQuery);
        }

        if ((createdAtStartPeriod || createdAtEndPeriod) && (!createdAtStartPeriod || !createdAtEndPeriod)) {
            const periodQuery = {
                $or: [{ createdAt: createdAtStartPeriod }, { createdAt: createdAtEndPeriod }]
            };
            Object.assign(query, periodQuery);
        } else if (createdAtStartPeriod && createdAtEndPeriod) {
            const periodQuery = {
                $and: [{ 
                    createdAt: { $gt: new Date(createdAtStartPeriod) }
                }, { 
                    createdAt: { $lte: new Date(createdAtEndPeriod) } 
                }]
            };
            Object.assign(query, periodQuery);
        }

        const result = await UserModel.find(query);

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
