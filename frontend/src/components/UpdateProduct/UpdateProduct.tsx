'use client';
import Grid from '@mui/material/Grid2';
import ProductForm from '@/components/SharedComponents/Forms/Product/ProductView';
import ProductModel from '@/models/modules/product';
import InfoSnackbar from '@/components/SharedComponents/Snackbars/Info/InfoView';
import useUpdateProductViewModel from './UpdateProductViewModel';

const UpdateProductWrapper: React.FC<ProductModel.ProductDataProps> = (
  props
) => {
  const { isLoading, state, updateProduct, closeSnackBar } =
    useUpdateProductViewModel(props);

  return (
    <>
      <Grid container alignItems="center" justifyContent="center" height="75vh">
        <ProductForm
          data={props.product}
          title="Update Product"
          btnLabel="Update"
          isLoading={isLoading}
          handleSubmit={updateProduct}
        />
      </Grid>
      <InfoSnackbar
        data={{
          show: state.data.show,
          type: state.data.type,
          message: state.data.message
        }}
        close={closeSnackBar}
      ></InfoSnackbar>
    </>
  );
};

export default UpdateProductWrapper;
