import jwt from 'jsonwebtoken';
import * as usersModel from '../models/usersModel';
import { secret, config } from '../token/jwtConfig';
import { IUser } from '../interfaces';

export async function create(user: IUser) {
  const payload = await usersModel.create(user);

  const token = jwt.sign({ payload }, secret, config);
  const data = { token };
  return { status: 201, data };
}

export async function getAll() {
  return {};
}