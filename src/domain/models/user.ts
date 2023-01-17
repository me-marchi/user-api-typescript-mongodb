import { Document, Types } from 'mongoose';

export interface IUser extends Document {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    address: {
        zipCode: number;
        city: string;
        country: string;
    }
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

