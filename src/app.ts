import express from 'express';
import productRouter from './routes/productRouter';
import userRouter from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
