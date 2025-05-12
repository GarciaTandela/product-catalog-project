'use client';
import Grid from '@mui/material/Grid2';
import ProductForm from '@/components/SharedComponents/Forms/Product/ProductView';
import InfoSnackbar from '@/components/SharedComponents/Snackbars/Info/InfoView';
import useCreateProductViewModel from './CreateProductViewModel';

export default function CreateProductWrapper() {
  const { isLoading, state, createProduct, closeSnackBar } =
    useCreateProductViewModel();

  return (
    <Grid container alignItems="center" justifyContent="center" height="75vh">
      <ProductForm
        title="Create Product"
        btnLabel="Create"
        isLoading={isLoading}
        handleSubmit={createProduct}
      />
      <InfoSnackbar
        data={{
          show: state.data.show,
          type: state.data.type,
          message: state.data.message
        }}
        close={closeSnackBar}
      ></InfoSnackbar>
    </Grid>
  );
}
