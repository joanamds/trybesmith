import connection from './connection';
import { Order } from '../interfaces';

export async function getAll(): Promise<Order[]> {
  const query = `
    SELECT o.id, o.user_id AS userId,
    JSON_EXTRACT(CONCAT('[', GROUP_CONCAT(p.id SEPARATOR ','), ']'), '$') AS productsIds 
    FROM Trybesmith.orders AS o
    JOIN Trybesmith.products AS p ON o.id = p.order_id
    GROUP BY o.id, o.user_id
  `;

  const [orders] = await connection.execute(query);
  return orders as Order[];
}

export async function create() {
  return {};
}