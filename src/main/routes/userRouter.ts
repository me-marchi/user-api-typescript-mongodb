import { Router } from 'express';
import { UserController } from '../../controllers/UserController';

const userRouter = Router();

userRouter.route('/')
    .post(UserController.create)
    .get(UserController.findAll);

export { userRouter };
