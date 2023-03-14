import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct, Product } from '../interfaces';

export async function create(product: IProduct): Promise<Product> {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const orderId = null;

  const newProduct: Product = { id, name, amount, orderId };
  return newProduct;
}

export async function findAll() {
  return {};
}