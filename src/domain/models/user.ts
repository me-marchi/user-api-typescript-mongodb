export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: {
        zipCode: string;
        city: string;
        country: string;
    }
    createdAt: Date;
    updatedAt: Date;
}

