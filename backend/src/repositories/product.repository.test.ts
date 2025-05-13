import ProductRepository from './product.repository';
import Product from '../models/product';
import IProduct from '../models/entities/IProduct';

jest.mock('../models/product');

describe('ProductRepository', () => {
  const productRepository = new ProductRepository();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAll', () => {
    it('should return paginated products based on filters', async () => {
      const mockPaginate = jest.fn().mockResolvedValue({
        totalProducts: 10,
        products: [],
        pageSize: 20,
        currentPage: 1,
        totalPages: 1
      });
      (Product.paginate as jest.Mock) = mockPaginate;

      const req = {
        query: {
          page: 1,
          creatorId: '123',
          searchText: 'test',
          categoryId: '456'
        }
      };

      const result = await productRepository.getAll(req);

      expect(mockPaginate).toHaveBeenCalledWith(
        {
          CreatorId: '123',
          $or: [{ Title: { $regex: 'test', $options: 'i' } }, { Description: { $regex: 'test', $options: 'i' } }],
          CategoryId: '456'
        },
        {
          page: 1,
          limit: 20,
          sort: { createdAt: 1 },
          customLabels: expect.any(Object)
        }
      );
      expect(result).toEqual({
        totalProducts: 10,
        products: [],
        pageSize: 20,
        currentPage: 1,
        totalPages: 1
      });
    });
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const mockInsertOne = jest.fn().mockResolvedValue({ id: '123' });
      (Product.insertOne as jest.Mock) = mockInsertOne;

      const product: IProduct = { title: 'Test Product', description: 'Test Description' } as unknown as IProduct;

      const result = await productRepository.create(product);

      expect(mockInsertOne).toHaveBeenCalledWith(product);
      expect(result).toEqual({ id: '123' });
    });
  });

  describe('delete', () => {
    it('should delete a product by ID', async () => {
      const mockFindByIdAndDelete = jest.fn().mockResolvedValue({ id: '123' });
      (Product.findByIdAndDelete as jest.Mock) = mockFindByIdAndDelete;

      const result = await productRepository.delete('123');

      expect(mockFindByIdAndDelete).toHaveBeenCalledWith('123');
      expect(result).toEqual({ id: '123' });
    });
  });

  describe('edit', () => {
    it('should update a product by ID', async () => {
      const mockFindByIdAndUpdate = jest.fn().mockResolvedValue({ id: '123', title: 'Updated Product' });
      (Product.findByIdAndUpdate as jest.Mock) = mockFindByIdAndUpdate;

      const data: IProduct = { title: 'Updated Product' } as unknown as IProduct;

      const result = await productRepository.edit('123', data);

      expect(mockFindByIdAndUpdate).toHaveBeenCalledWith('123', data, { new: true });
      expect(result).toEqual({ id: '123', title: 'Updated Product' });
    });
  });

  describe('getById', () => {
    it('should return a product by ID', async () => {
      const mockFindOne = jest.fn().mockResolvedValue({ id: '123', title: 'Test Product' });
      (Product.findOne as jest.Mock) = mockFindOne;

      const result = await productRepository.getById('123');

      expect(mockFindOne).toHaveBeenCalledWith({ _id: '123' });
      expect(result).toEqual({ id: '123', title: 'Test Product' });
    });
  });
});
