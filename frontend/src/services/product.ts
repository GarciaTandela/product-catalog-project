import axios from './axios';
import ProductModel from '@/models/modules/product';

const productService = {
  async getAll() {
    return await axios.get('/product/getall');
  },
  async create(data: ProductModel.FormInitialState) {
    return await axios.post('/product/create', data);
  },
  async delete(id: string) {
    return await axios.delete(`/product/delete/${id}`);
  },
  async update(productId: string, data: ProductModel.ProductDataProps) {
    return await axios.patch(`/product/edit/${productId}`, data);
  },
  async get(productId: string) {
    return await axios.get(`/product/get/${productId}`);
  }
};

export default productService;
