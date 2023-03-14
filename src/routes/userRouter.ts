import { Router } from 'express';
import * as userController from '../controllers/userController';

const userRouter = Router();

userRouter.post('/', userController.create);
userRouter.get('/', userController.getAll);

export default userRouter;