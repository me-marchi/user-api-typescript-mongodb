import { Request, Response } from 'express';
import { createUserFactory } from '../services/user/createUserUseCase/createUserFactory';
import { findAllUsersFactory } from '../services/user/findAllUsersUseCase/findAllUsersFactory';

export class UserController {

    static async create(request: Request, response: Response): Promise<Response> {
        try {
            const user = request.body;
            const useCase = createUserFactory();
            const createdUser = await useCase.create(user).catch((error) => {
                throw new Error(error);
            });
            return response.status(200).send(createdUser);
        } catch (error: any) {
            return response.status(error.status).send(error);
        }
    }

    static async findAll(request: Request, response: Response): Promise<Response> {
        try {
            const useCase = findAllUsersFactory();
            const foundUsers = await useCase.findAll().catch((error) => {
                throw new Error(error);
            });
            return response.status(200).send(foundUsers);
        } catch (error: any) {
            return response.status(error.status).send(error);
        }
    }
}
