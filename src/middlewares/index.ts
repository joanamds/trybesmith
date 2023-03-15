import { NextFunction, Request, Response } from 'express';
import { UserLogin, IProduct } from '../interfaces';

export function validateLogin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, password } = req.body as UserLogin;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
}

export function validateProductName(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name } = req.body as IProduct;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }

  if (name.length < 2) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }

  next(); 
}

export function validateProductAmount(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { amount } = req.body as IProduct;

  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }

  if (amount.length < 2) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }

  next(); 
}