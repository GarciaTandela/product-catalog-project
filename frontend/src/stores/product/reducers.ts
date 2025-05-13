import ProductModel from '@/models/modules/product';

const reducers = {
  setProducts(
    state: ProductModel.ProductStoreState,
    action: { payload: ProductModel.ProductListProps }
  ): void {
    state.products = action.payload.products;
  },
  removeProduct(
    state: ProductModel.ProductStoreState,
    action: { payload: string }
  ): void {
    state.products = state.products.filter(
      (product) => product._id !== action.payload
    );
  }
};

export default reducers;
