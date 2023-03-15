import jwt from 'jsonwebtoken';
import * as usersModel from '../models/usersModel';
import { secret, config } from '../token/jwtConfig';
import { IUser, UserLogin } from '../interfaces';

export async function create(user: IUser) {
  const payload = await usersModel.create(user);

  const token = jwt.sign({ payload }, secret, config);
  const data = { token };
  return { status: 201, data };
}

export async function login(userLogin: UserLogin) {
  const { username, password } = userLogin;
  const user = await usersModel.getByUsername(username); 

  if (user === null || user.password !== password) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const token = jwt.sign({ user }, secret, config);
  const data = { token };
  return { status: 200, data };
}