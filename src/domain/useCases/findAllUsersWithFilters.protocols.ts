import { User } from '../models/user';

export interface UserFilter {
    term?: string;
    country?: string;
    createdAtStartPeriod?: string;
    createdAtEndPeriod?: string;
}

export interface FindAllUsersWithFilters {
    findAllWithFilters(filter: UserFilter): Promise<User[]>;
}
