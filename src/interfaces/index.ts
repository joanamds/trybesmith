export interface IProduct {
  name: string,
  amount: string
}

export interface Product extends IProduct {
  id: number,
  orderId: number | null,
}

export interface IUser {
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface User extends IUser {
  id: number,
}

export interface Order {
  id: number,
  userId: number,
  productsIds: number[],
}

export interface UserLogin {
  username: string,
  password: string,
}