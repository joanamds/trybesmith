import { IOrder } from '../interfaces';
import * as ordersModel from '../models/ordersModel';

export async function getAll() {
  const data = await ordersModel.getAll();
  return { status: 200, data };
}

export async function create(userId: number, order: IOrder) {
  const id = await ordersModel.create(userId);
  const data = await ordersModel.updateProduct(id, order);
  const newOrder = data[0];
  return { status: 201, newOrder };
}
