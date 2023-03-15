import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as orderService from '../services/orderService';
import { IOrder } from '../interfaces';
import * as usersModel from '../models/usersModel';
import IToken from '../interfaces/IToken';
import { secret } from '../token/jwtConfig';

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await orderService.getAll();
  res.status(status).json(data);
}

export async function create(req: Request, res: Response) {
  const token = req.header('Authorization') as string;
  const order = req.body as IOrder;

  const decoded = jwt.verify(token, secret) as IToken;
  const user = await usersModel.getByUsername(decoded.user.username);
  const { status, newOrder } = await orderService.create(user.id, order);
  const { userId, productsIds } = newOrder;
  return res.status(status).json({ userId, productsIds });
}
