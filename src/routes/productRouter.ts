import { Router } from 'express';
import * as productController from '../controllers/productController';

const productRouter = Router();

productRouter.post('/', productController.create);

export default productRouter;