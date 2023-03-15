import { NextFunction, Request, Response } from 'express';
import { UserLogin, IProduct, IUser } from '../interfaces';

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

  if (name.length < 3) {
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
  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }

  next(); 
}

export function validateUsername(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username } = req.body as IUser;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res.status(422).json({
      message: '"username" length must be at least 3 characters long',
    });
  }
  next();
}

export function validateVocation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { vocation } = req.body as IUser;

  if (!vocation) {
    return res.status(400).json({ message: '"vocation" is required' });
  }
  if (typeof vocation !== 'string') {
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
  if (vocation.length < 3) {
    return res.status(422).json({
      message: '"vocation" length must be at least 3 characters long',
    });
  }
  next();
}

export function validateLevel(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { level } = req.body as IUser;
  console.log(level);
  if (level < 1) {
    return res.status(422).json({
      message: '"level" must be greater than or equal to 1',
    });
  }
  if (!level) {
    return res.status(400).json({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  next();
}

export function validatePassword(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { password } = req.body as IUser;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (typeof password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return res.status(422).json({
      message: '"password" length must be at least 8 characters long',
    });
  }
  next();
}
