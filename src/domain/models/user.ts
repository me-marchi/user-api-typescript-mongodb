export interface User {
    _id: string;
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
}

