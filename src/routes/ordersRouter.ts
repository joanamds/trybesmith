import { Router } from 'express';
import * as ordersController from '../controllers/ordersController';

const orderRouter = Router();

orderRouter.get('/', ordersController.getAll);

export default orderRouter;