import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import * as productService from '../services/productService';

export async function create(req: Request, res: Response) {
  const user = req.body as IProduct;
  const { status, payload } = await productService.create(user);

  return res.status(status).json(payload);
}

export async function getAll() {
  return {};
}