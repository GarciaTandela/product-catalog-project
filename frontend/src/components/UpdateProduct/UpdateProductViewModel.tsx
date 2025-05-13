import { useState } from 'react';
import ProductModel from '@/models/modules/product';
import {
  reducer,
  initialState
} from '@/components/SharedComponents/Snackbars/Info/InfoReducer';
import { useReducer } from 'react';
import api from '@/services';

export default function useUpdateProductViewModel(
  props: ProductModel.ProductDataProps
) {
  const [isLoading, setIsLoading] = useState(false);
  const productId = props.product._id;
  const [state, dispatch] = useReducer(reducer, initialState);

  // Functions
  const updateProduct = async (data: ProductModel.FormInitialState) => {
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
      await api.product.update(productId, data);
      dispatch({
        type: 'setSnackbarInfo',
        data: {
          show: true,
          type: 'success',
          message: 'Product updated successfully'
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

  return { isLoading, state, updateProduct, closeSnackBar };
}
