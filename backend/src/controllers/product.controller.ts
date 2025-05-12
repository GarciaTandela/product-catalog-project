import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.productService.getAll();

      res.status(200).json(data);
      return;
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.productService.create(req);

      res.status(201).json(data);
      return;
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.productService.delete(req);

      res.status(200).json(data);
      return;
    } catch (error) {
      next(error);
    }
  };

  edit = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.productService.edit(req);

      res.status(200).json(data);
      return;
    } catch (error) {
      next(error);
    }
  };

  get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.productService.get(req);

      res.status(200).json(data);
      return;
    } catch (error) {
      next(error);
    }
  };
}
