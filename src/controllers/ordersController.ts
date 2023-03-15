import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as orderService from '../services/orderService';
import IToken from '../interfaces/IToken';
import { IOrder } from '../interfaces';
import * as usersModel from '../models/usersModel';

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await orderService.getAll();
  res.status(status).json(data);
}

export async function create(req: Request, res: Response) {
  const token = req.header('Authorization');
  const order = req.body as IOrder;

  const decoded = jwt.verify(token, 'secret') as IToken;
  const user = await usersModel.getByUsername(decoded.payload.username);
  const { status, data } = await orderService.create(user.id, order);

  return res.status(status).json(data);
}