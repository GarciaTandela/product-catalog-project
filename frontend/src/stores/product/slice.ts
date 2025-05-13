import { createSlice } from '@reduxjs/toolkit';
import { state } from './state';
import reducers from './reducers';

const productSlice = createSlice({
  name: 'product',
  initialState: state,
  reducers
});

export const productReducers = productSlice.actions;

export default productSlice;
