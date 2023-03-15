import { Request, Response } from 'express';

import { IUser, UserLogin } from '../interfaces';
import * as userService from '../services/userService';

export async function create(req: Request, res: Response) {
  const user = req.body as IUser;
  const { status, data } = await userService.create(user);

  return res.status(status).json(data);
}

export async function login(req: Request, res: Response) {
  const user = req.body as UserLogin;
  const { status, data } = await userService.login(user);

  return res.status(status).json(data);
}
