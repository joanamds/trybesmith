import { Router } from 'express';
import * as ordersController from '../controllers/ordersController';
import { validateOrder, validateToken } from '../middlewares';

const orderRouter = Router();

orderRouter.post('/', validateToken, validateOrder, ordersController.create);
orderRouter.get('/', ordersController.getAll);

export default orderRouter;
