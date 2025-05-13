import reducers from './reducers';

// Mock ProductModel types
type Product = { _id: string; name: string };
type ProductStoreState = { products: Product[] };
type ProductListProps = { products: Product[] };

describe('product reducers', () => {
  let initialState: ProductStoreState;

  beforeEach(() => {
    initialState = {
      products: [
        { _id: '1', name: 'Product 1' },
        { _id: '2', name: 'Product 2' }
      ]
    };
  });

  describe('setProducts', () => {
    it('should set products in state', () => {
      const newProducts = [
        { _id: '3', name: 'Product 3' },
        { _id: '4', name: 'Product 4' }
      ];
      const action = { payload: { products: newProducts } as ProductListProps };
      reducers.setProducts(initialState, action);
      expect(initialState.products).toEqual(newProducts);
    });
  });

  describe('removeProduct', () => {
    it('should remove product by _id', () => {
      const action = { payload: '1' };
      reducers.removeProduct(initialState, action);
      expect(initialState.products).toEqual([{ _id: '2', name: 'Product 2' }]);
    });

    it('should not change products if _id not found', () => {
      const action = { payload: 'non-existent-id' };
      reducers.removeProduct(initialState, action);
      expect(initialState.products).toEqual([
        { _id: '1', name: 'Product 1' },
        { _id: '2', name: 'Product 2' }
      ]);
    });
  });
});
