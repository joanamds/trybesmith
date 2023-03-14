import * as ordersModel from '../models/ordersModel';

export async function getAll() {
  const data = await ordersModel.getAll();
  return { status: 200, data };
}

export async function create() {
  return {};
}
