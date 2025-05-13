'use client';
import ProductCard from '@/components/SharedComponents/Cards/Product/ProductView';
import Grid from '@mui/material/Grid2';
import AlertDialog from '@/components/SharedComponents/Dialogs/Alert/AlertView';
import InfoSnackbar from '@/components/SharedComponents/Snackbars/Info/InfoView';
import ProductModel from '@/models/modules/product';
import useProductListViewModel from './ProductViewModel';

const ProductList: React.FC<ProductModel.ProductListProps> = (props) => {
  const {
    alertDialog,
    isLoading,
    state,
    closeAlertDialog,
    openAlertDialog,
    closeSnackBar,
    deleteProduct
  } = useProductListViewModel();

  return (
    <>
      <Grid sx={{ mt: 6 }} container columnSpacing={2} rowSpacing={3}>
        {props.products?.map((product) => (
          <Grid key={product._id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ProductCard
              openAlertDialog={openAlertDialog}
              data={product}
            ></ProductCard>
          </Grid>
        ))}
      </Grid>
      <AlertDialog
        showDialog={alertDialog}
        isLoading={isLoading}
        closeDialog={closeAlertDialog}
        removeAction={deleteProduct}
      ></AlertDialog>
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

export default ProductList;
