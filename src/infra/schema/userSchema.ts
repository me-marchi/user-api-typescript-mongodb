import mongoose, { Schema } from 'mongoose';
import { IUser } from '../../domain/models/user';

const userSchema = new Schema<IUser>(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        address: {
            zipCode: { type: Number, required: true},
            city: { type: String, required: true },
            country: { type: String, required: true }
        },
        createdAt: {
            type: Date,
            required: true,
            default: new Date()
        },
        updatedAt: {
            type: Date,
            default: null
        },
        deletedAt: {
            type: Date,
            default: null
        }
    },
    {
        collection: 'users',
        versionKey: false,
    }
);

export const UserModel = mongoose.model('User', userSchema);
