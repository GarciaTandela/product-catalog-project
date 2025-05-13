import { Application } from 'express';
import productRoutes from '../routes/product.routes';

export default function (app: Application) {
  app.use('/product', productRoutes);
}
