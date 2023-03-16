import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IOrder, Order } from '../interfaces';

export async function getAll(): Promise<Order[]> {
  const query = `
    SELECT o.id, o.user_id AS userId,
    JSON_ARRAYAGG(p.id) AS productsIds 
    FROM Trybesmith.orders AS o
    JOIN Trybesmith.products AS p ON o.id = p.order_id
    GROUP BY o.id, o.user_id
  `;

  const [orders] = await connection.execute(query);
  return orders as Order[];
}

export async function create(userId: number): Promise<number> {
  const query = `
    INSERT INTO Trybesmith.orders (user_id) VALUES (?)
  `;
  const values = [userId];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  return id;
}

async function getOrderById(id: number): Promise<Order[]> {
  const query = `
    SELECT o.id, o.user_id AS userId,
    JSON_ARRAYAGG(p.id) AS productsIds 
    FROM Trybesmith.orders AS o
    JOIN Trybesmith.products AS p ON o.id = p.order_id
    WHERE o.id = ?
    GROUP BY o.id, o.user_id
  `;

  const value = [id];
  const [order] = await connection.execute(query, value);

  return order as Order[];
}

export async function updateProduct(orderId: number, order: IOrder): Promise<Order[]> {
  const { productsIds } = order as IOrder;
  const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?;';

  await Promise.all(productsIds.map((productId) => {
    const result = connection.execute(query, [orderId, productId]);
    return result;
  }));

  return getOrderById(orderId);
}
