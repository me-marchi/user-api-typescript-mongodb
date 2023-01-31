import { Request, Response } from 'express';
import { createUserFactory } from '../../services/user/createUserUseCase/createUserFactory';
import { findAllUsersWithFiltersFactory } from '../../services/user/findAllUsersUseCase/findAllUsersWithFiltersFactory';
import { findByUserIdFactory } from '../../services/user/findByUserIdUseCase/findByUserIdFactory';
import { updateByUserIdFactory } from '../../services/user/updateByUserIdUseCase/updateByUserIdFactory';
import { deleteByUserIdFactory } from '../../services/user/deleteByUserIdUseCase/deleteByUserIdFactory';

export class UserController {

    static async create(request: Request, response: Response): Promise<Response> {
        try {
            const user = request.body;
            delete user._id, user.createdAt, user.updatedAt, user.deletedAt;
            
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
            const { query } = request;

            const useCase = findAllUsersWithFiltersFactory();
            const foundUsers = await useCase.findAllWithFilters(query).catch((error) => {
                console.log(error);
                throw new Error(error);
            });

            return response.status(200).send(foundUsers);
        } catch (error: any) {
            return response.status(error.status).send(error);
        }
    }
        
    static async findById(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.params;
            
            const useCase = findByUserIdFactory();
            const foundUser = await useCase.findById(userId).catch((error) => {
                throw new Error(error);
            });

            return response.status(200).send(foundUser);
        } catch (error: any) {
            return response.status(error.status).send(error);
        }
    }
            
    static async updateById(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.params;
            const user = request.body;
            delete user._id, user.createdAt, user.updatedAt, user.deletedAt;
            
            const useCase = updateByUserIdFactory();
            const updatedUser = await useCase.updateById(userId, user).catch((error) => {
                throw new Error(error);
            });

            return response.status(200).send(updatedUser);
        } catch (error: any) {
            return response.status(error.status).send(error);
        }
    }
            
    static async deleteById(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.params;
            
            const useCase = deleteByUserIdFactory();
            await useCase.deleteById(userId).catch((error) => {
                throw new Error(error);
            });
            
            return response.status(200).send('User deleted');
        } catch (error: any) {
            return response.status(error.status).send(error);
        }
    }
}
