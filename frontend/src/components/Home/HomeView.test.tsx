import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeWrapper from './HomeView';
import * as hooks from '@/stores/hooks';
import productStore from '@/stores/product/slice';
import { vi, describe, beforeEach, it, expect } from 'vitest';

// Mock dependencies
vi.mock('@/stores/hooks');
vi.mock('./Lists/Product/ProductView', () => ({
  default: (props: any) => (
    <div data-testid="product-list">{JSON.stringify(props.products)}</div>
  )
}));
vi.mock('next/link', () => ({
  default: ({ children, href }: any) => <a href={href}>{children}</a>
}));

const mockDispatch = vi.fn();

describe('HomeWrapper', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (hooks.useAppDispatch as unknown as vi.Mock).mockReturnValue(mockDispatch);
  });

  it('renders "All Products" title', () => {
    (hooks.useAppSelector as unknown as vi.Mock).mockImplementation((cb) =>
      cb({ product: { products: [] } })
    );
    render(<HomeWrapper products={[]} />);
    expect(screen.getByText('All Products')).toBeInTheDocument();
  });

  it('dispatches setProducts on mount', () => {
    (hooks.useAppSelector as unknown as vi.Mock).mockImplementation((cb) =>
      cb({ product: { products: [] } })
    );
    render(<HomeWrapper products={[{ id: 1, name: 'Test Product' }]} />);
    expect(mockDispatch).toHaveBeenCalledWith(
      productStore.actions.setProducts({
        products: [{ id: 1, name: 'Test Product' }]
      })
    );
  });

  it('shows "No products available" when products list is empty', () => {
    (hooks.useAppSelector as unknown as vi.Mock).mockImplementation((cb) =>
      cb({ product: { products: [] } })
    );
    render(<HomeWrapper products={[]} />);
    expect(screen.getByText('No products available')).toBeInTheDocument();
  });

  it('renders ProductList when products are present', () => {
    const products = [{ id: 1, name: 'Test Product' }];
    (hooks.useAppSelector as unknown as vi.Mock).mockImplementation((cb) =>
      cb({ product: { products } })
    );
    render(<HomeWrapper products={products} />);
    expect(screen.getByTestId('product-list')).toHaveTextContent(
      'Test Product'
    );
  });

  it('renders Add Product button with correct link', () => {
    (hooks.useAppSelector as unknown as vi.Mock).mockImplementation((cb) =>
      cb({ product: { products: [] } })
    );
    render(<HomeWrapper products={[]} />);
    const addButton = screen.getByText('Add Product');
    expect(addButton).toBeInTheDocument();
    expect(addButton.closest('a')).toHaveAttribute('href', '/product/create');
  });
});
