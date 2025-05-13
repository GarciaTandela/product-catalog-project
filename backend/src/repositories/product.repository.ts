import Product from '../models/product';
import IProduct from '../models/entities/IProduct';

export default class ProductRepository {
  getAll = async () => {
    return await Product.find();
  };

  create = async (product: IProduct) => {
    return await Product.insertOne(product);
  };

  delete = async (productId: string) => {
    return await Product.findByIdAndDelete(productId);
  };

  edit = async (productId: string, data: IProduct) => {
    return await Product.findByIdAndUpdate(productId, data, {
      new: true
    });
  };

  getById = async (productId: string) => {
    return await Product.findOne({ _id: productId });
  };
}
