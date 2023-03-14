import { Request, Response } from 'express';

import * as orderService from '../services/orderService';

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await orderService.getAll();
  res.status(status).json(data);
}

export async function create() {
  return {};
}
