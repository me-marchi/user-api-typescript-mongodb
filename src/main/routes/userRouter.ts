import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userRouter = Router();

userRouter.route('/')
    .post(UserController.create)
    .get(UserController.findAll);

userRouter.route('/:userId')
    .get(UserController.findById)
    .put(UserController.updateById)
    .delete(UserController.deleteById);

export { userRouter };
