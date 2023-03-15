import { Router } from 'express';
import * as userController from '../controllers/userController';
import { validateLogin } from '../middlewares';

const loginRouter = Router();

loginRouter.post('/', validateLogin, userController.login);

export default loginRouter;