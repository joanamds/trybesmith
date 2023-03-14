import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser, User } from '../interfaces';

export async function create(user: IUser): Promise<User> {
  const { username, vocation, level, password } = user;
  
  const query = `INSERT INTO Trybesmith.users
  (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: User = { id, username, vocation, level, password };
  return newUser;
}

export default async function getAll() {
  return {};
}