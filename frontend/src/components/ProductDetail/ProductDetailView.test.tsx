import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetailWrapper from './ProductDetailView';

describe('ProductDetailWrapper', () => {
  const mockProduct = {
    Title: 'Test Product',
    Price: 1234.56,
    Stock: 42,
    Category: 'Electronics',
    Description: 'This is a test product description for testing purposes.'
  };

  const mockProps = {
    product: mockProduct
  };

  it('renders the product title', () => {
    render(<ProductDetailWrapper {...mockProps} />);
    expect(screen.getByText(mockProduct.Title)).toBeInTheDocument();
  });

  it('renders the formatted price', () => {
    render(<ProductDetailWrapper {...mockProps} />);
    // pt-br locale, no decimals
    expect(screen.getByText(/Price: €1.234,56/)).toBeInTheDocument();
  });

  it('renders the stock', () => {
    render(<ProductDetailWrapper {...mockProps} />);
    expect(screen.getByText(`Stock: ${mockProduct.Stock}`)).toBeInTheDocument();
  });

  it('renders the category', () => {
    render(<ProductDetailWrapper {...mockProps} />);
    expect(
      screen.getByText(`Category: ${mockProduct.Category}`)
    ).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<ProductDetailWrapper {...mockProps} />);
    expect(screen.getByText(mockProduct.Description)).toBeInTheDocument();
  });

  it('handles missing product fields gracefully', () => {
    const incompleteProps = {
      product: {
        Title: '',
        Price: undefined,
        Stock: undefined,
        Category: '',
        Description: ''
      }
    };
    render(<ProductDetailWrapper {...(incompleteProps as any)} />);
    expect(screen.getByText('Price: €0')).toBeInTheDocument();
    expect(screen.getByText('Stock:')).toBeInTheDocument();
    expect(screen.getByText('Category:')).toBeInTheDocument();
  });
});
