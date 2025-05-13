import { useState } from 'react';
import ProductModel from '@/models/modules/product';
import {
  reducer,
  initialState
} from '@/components/SharedComponents/Snackbars/Info/InfoReducer';
import { useReducer } from 'react';
import api from '@/services';

export default function useCreateProductViewModel() {
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  // Functions
  const createProduct = async (data: ProductModel.FormInitialState) => {
    if (
      data.Category === 'Select Category' ||
      data.Title === '' ||
      data.Description === '' ||
      data.Price === '' ||
      data.Stock === ''
    ) {
      dispatch({
        type: 'setSnackbarInfo',
        data: {
          show: true,
          type: 'warning',
          message: 'Fill in all fields'
        }
      });
      return;
    }

    try {
      data.Price = data.Price.trim();
      setIsLoading(true);
      await api.product.create(data);
      dispatch({
        type: 'setSnackbarInfo',
        data: {
          show: true,
          type: 'success',
          message: 'Product created successfully'
        }
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'setSnackbarInfo',
        data: {
          show: true,
          message: 'An error occurred, please try again.',
          type: 'error'
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closeSnackBar = () => {
    dispatch({
      type: 'reset'
    });
  };

  return { isLoading, state, createProduct, closeSnackBar };
}
