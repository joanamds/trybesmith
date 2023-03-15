import { Router } from 'express';
import * as productController from '../controllers/productController';
import { validateProductAmount, validateProductName } from '../middlewares';

const productRouter = Router();

productRouter.post('/', validateProductName, validateProductAmount, productController.create);
productRouter.get('/', productController.getAll);

export default productRouter;