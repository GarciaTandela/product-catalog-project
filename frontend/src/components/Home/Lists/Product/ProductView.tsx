'use client';
import ProductCard from '@/components/SharedComponents/Cards/Product/ProductView';
import Grid from '@mui/material/Grid2';
import AlertDialog from '@/components/SharedComponents/Dialogs/Alert/AlertView';
import InfoSnackbar from '@/components/SharedComponents/Snackbars/Info/InfoView';
import { useState, useCallback } from 'react';
import ProductModel from '@/models/modules/product';

const ProductList: React.FC<ProductModel.ProductListProps> = (props) => {
  const [alertDialog, setAlertDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [productId, setProductId] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const openAlertDialog = useCallback((id: string) => {
    setProductId(id);
    setAlertDialog(true);
  }, []);

  const closeAlertDialog = () => {
    setProductId('');
    setAlertDialog(false);
  };

  const deleteProduct = () => {
    setIsLoading(false);
    setAlertDialog(false);
    setShowInfo(true);
    setShowInfo(false);
    console.log(productId);
  };

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
        data={{ show: showInfo, type: 'success', message: 'Olá' }}
      ></InfoSnackbar>
    </>
  );
};

export default ProductList;
