import { Request } from 'express';
import ProductRepository from '../repositories/product.repository';
import IProduct from '../models/entities/IProduct';

export default class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  getAll = async () => {
    const products = await this.productRepository.getAll();
    return products;
  };

  create = async (req: Request) => {
    const data: IProduct = {
      Title: req.body.Title,
      Description: req.body.Description,
      Price: req.body.Price,
      Stock: req.body.Stock,
      Category: req.body.Category
    };

    const product = await this.productRepository.create(data);

    return product;
  };

  delete = async (req: Request) => {
    const productId: string = req.params.productId as string;
    const deletedProduct = await this.productRepository.delete(productId);
    return deletedProduct;
  };

  edit = async (req: Request) => {
    const productId: string = req.params.productId as string;
    const data: IProduct = req.body;

    const updatedProduct = await this.productRepository.edit(productId, data);
    return updatedProduct;
  };

  get = async (req: Request) => {
    const productId: string = req.params.productId as string;
    const product = await this.productRepository.getById(productId);
    return product;
  };
}
