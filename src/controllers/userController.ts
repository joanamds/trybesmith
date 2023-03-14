import { Request, Response } from 'express';

import { IUser } from '../interfaces';
import * as userService from '../services/userService';

export async function create(req: Request, res: Response) {
  const user = req.body as IUser;
  const { status, data } = await userService.create(user);

  return res.status(status).json(data);
}

export async function getAll() {
  return {};
}