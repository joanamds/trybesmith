import { IProduct } from '../interfaces';
import * as productsModel from '../models/productsModel';

export async function create(product: IProduct) {
  const payload = await productsModel.create(product);
  return { status: 201, payload };
}

export async function getAll() {
  return {};
}