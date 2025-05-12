import { useReducer, useEffect } from 'react';
import ProductModel from '@/models/modules/product';
import { reducer, initialState } from './FormReducer';

export default function useProductFormViewModel(props: ProductModel.FormProps) {
  // STATES
  const categories = [
    'Electronics',
    'Apparel',
    'Home & Kitchen',
    'Beauty & Personal Care',
    'Sports & Outdoors',
    'Toys & Games',
    'Automotive',
    'Books',
    'Health & Wellness',
    'Office Supplies'
  ];

  // REDUCERS
  const [state, dispatch] = useReducer(reducer, initialState);

  // USE EFFECTS

  // Set data on component mount
  useEffect(() => {
    dispatch({
      type: 'setFormState',
      key: 'Title',
      value: props.data?.Title ?? ''
    });
    dispatch({
      type: 'setFormState',
      key: 'Description',
      value: props.data?.Description ?? ''
    });
    dispatch({
      type: 'setFormState',
      key: 'Price',
      value:
        (typeof props.data?.Price === 'number'
          ? props.data.Price.toLocaleString('pt-br', {
              minimumFractionDigits: 2
            })
          : '') ?? ''
    });
    dispatch({
      type: 'setFormState',
      key: 'Stock',
      value: props.data?.Stock?.toString() ?? ''
    });
    dispatch({
      type: 'setFormState',
      key: 'Category',
      value: props.data?.Category ?? 'Select Category'
    });
  }, []);

  //FUNCTIONS
  const handleSubmit = () => {
    props.handleSubmit(state);
  };

  const resetForm = () => {
    dispatch({
      type: 'setFormState',
      key: 'Title',
      value: ''
    });
    dispatch({
      type: 'setFormState',
      key: 'Description',
      value: ''
    });
    dispatch({
      type: 'setFormState',
      key: 'Price',
      value: ''
    });
    dispatch({
      type: 'setFormState',
      key: 'Stock',
      value: ''
    });
    dispatch({
      type: 'setFormState',
      key: 'Category',
      value: 'Select Category'
    });
  };

  return { categories, state, handleSubmit, dispatch, resetForm };
}
