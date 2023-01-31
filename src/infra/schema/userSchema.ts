import mongoose, { Schema } from 'mongoose';
import { User } from '../../domain/models/user';

const userSchema = new Schema<User>({
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
        type: String,
        required: true
    },
    address: {
        zipCode: { type: String, required: true},
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
    }
},{
    collection: 'users',
    versionKey: false,
});

export const UserModel = mongoose.model('User', userSchema);
