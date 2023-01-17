import mongoose, { Schema } from 'mongoose';
import { IUser } from '../../domain/models/user';

const userSchema = new Schema<IUser>(
    {
        // _id: {
        //     type: Schema.Types.ObjectId,
        //     required: true,
        //     unique: true
        // },
        firstName: {
            type: String,
            unique: false,
        },
        lastName: {
            type: String,
            unique: false,
        },
        email: {
            type: String,
            unique: false,
        },
        password: {
            type: String,
            unique: false,
        },
    },
    {
        collection: 'users',
        versionKey: false,
    }
);

export const UserModel = mongoose.model('User', userSchema);
