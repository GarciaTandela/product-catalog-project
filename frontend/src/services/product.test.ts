/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import productService from './product';
import axios from './axios';

vi.mock('./axios', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    delete: vi.fn(),
    patch: vi.fn()
  }
}));

const mockProduct = { name: 'Test Product', price: 100 } as any;

describe('productService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls axios.get with correct url for getAll', async () => {
    (axios.get as any).mockResolvedValue({ data: [] });
    const res = await productService.getAll();
    expect(axios.get).toHaveBeenCalledWith('/product/getall');
    expect(res).toEqual({ data: [] });
  });

  it('calls axios.post with correct url and data for create', async () => {
    (axios.post as any).mockResolvedValue({ data: mockProduct });
    const res = await productService.create(mockProduct);
    expect(axios.post).toHaveBeenCalledWith('/product/create', mockProduct);
    expect(res).toEqual({ data: mockProduct });
  });

  it('calls axios.delete with correct url for delete', async () => {
    (axios.delete as any).mockResolvedValue({ data: {} });
    const id = '123';
    const res = await productService.delete(id);
    expect(axios.delete).toHaveBeenCalledWith(`/product/delete/${id}`);
    expect(res).toEqual({ data: {} });
  });

  it('calls axios.patch with correct url and data for update', async () => {
    (axios.patch as any).mockResolvedValue({ data: mockProduct });
    const id = '456';
    const res = await productService.update(id, mockProduct);
    expect(axios.patch).toHaveBeenCalledWith(
      `/product/edit/${id}`,
      mockProduct
    );
    expect(res).toEqual({ data: mockProduct });
  });

  it('calls axios.get with correct url for get', async () => {
    (axios.get as any).mockResolvedValue({ data: mockProduct });
    const id = '789';
    const res = await productService.get(id);
    expect(axios.get).toHaveBeenCalledWith(`/product/get/${id}`);
    expect(res).toEqual({ data: mockProduct });
  });
});
