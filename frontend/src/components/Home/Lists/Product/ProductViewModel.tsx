import {
  reducer,
  initialState
} from '@/components/SharedComponents/Snackbars/Info/InfoReducer';
import { useReducer } from 'react';
import { useState, useCallback } from 'react';
import { useAppDispatch } from '@/stores/hooks';
import productStore from '@/stores/product/slice';
import api from '@/services';

export default function useProductListViewModel() {
  const [alertDialog, setAlertDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [productId, setProductId] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchStoreAction = useAppDispatch();

  const openAlertDialog = useCallback((id: string) => {
    setProductId(id);
    setAlertDialog(true);
  }, []);

  const closeAlertDialog = () => {
    setProductId('');
    setAlertDialog(false);
  };

  const deleteProduct = async () => {
    try {
      setIsLoading(true);
      await api.product.delete(productId);
      dispatch({
        type: 'setSnackbarInfo',
        data: {
          show: true,
          type: 'success',
          message: 'Product deleted successfully'
        }
      });

      dispatchStoreAction(productStore.actions.removeProduct(productId));
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
      setAlertDialog(false);
    }
  };

  const closeSnackBar = () => {
    dispatch({
      type: 'reset'
    });
  };

  return {
    alertDialog,
    isLoading,
    state,
    closeAlertDialog,
    openAlertDialog,
    closeSnackBar,
    deleteProduct
  };
}
