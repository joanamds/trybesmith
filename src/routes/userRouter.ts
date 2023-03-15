import { Router } from 'express';
import * as userController from '../controllers/userController';
import {
  validateLevel, validatePassword, validateUsername, validateVocation } from '../middlewares';

const userRouter = Router();

userRouter.post( 
  '/',
  validateUsername,
  validateVocation, 
  validateLevel,
  validatePassword,
  userController.create,
);
userRouter.get('/', userController.getAll);

export default userRouter;