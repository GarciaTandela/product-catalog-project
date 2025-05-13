import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductCard from './ProductView';

const mockProduct = {
  _id: '123',
  Title: 'Test Product',
  Price: 199.99,
  Stock: 10,
  Category: 'Electronics',
  Description: 'A great product for testing purposes.'
};

describe('ProductCard', () => {
  it('renders product title, price, stock, category, and description', () => {
    render(<ProductCard data={mockProduct} openAlertDialog={vi.fn()} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(/Price: €199,99/)).toBeInTheDocument();
    expect(screen.getByText(/Stock: 10/)).toBeInTheDocument();
    expect(screen.getByText(/Category: Electronics/)).toBeInTheDocument();
    expect(
      screen.getByText(/A great product for testing purposes./)
    ).toBeInTheDocument();
  });

  it('has a link to the product detail page', () => {
    render(<ProductCard data={mockProduct} openAlertDialog={vi.fn()} />);
    const detailLink = screen.getByText('Test Product').closest('a');
    expect(detailLink).toHaveAttribute('href', '/product/detail/123');
  });

  it('has a link to the product update page', () => {
    render(<ProductCard data={mockProduct} openAlertDialog={vi.fn()} />);
    const updateLink = screen.getByText('Update').closest('a');
    expect(updateLink).toHaveAttribute('href', '/product/update/123');
  });

  it('calls openAlertDialog with product id when Delete is clicked', () => {
    const openAlertDialog = vi.fn();
    render(
      <ProductCard data={mockProduct} openAlertDialog={openAlertDialog} />
    );
    fireEvent.click(screen.getByText('Delete'));
    expect(openAlertDialog).toHaveBeenCalledWith('123');
  });
});
