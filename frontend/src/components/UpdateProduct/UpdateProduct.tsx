'use client';
import Grid from '@mui/material/Grid2';
import ProductForm from '@/components/SharedComponents/Forms/Product/ProductView';
import { useState } from 'react';
import ProductModel from '@/models/modules/product';

const UpdateProductWrapper: React.FC<ProductModel.ProductDataProps> = (
  props
) => {
  const [isLoading, setIsLoading] = useState(false);
  const productId = props.product._id;

  const updateProduct = async (form: ProductModel.FormInitialState) => {
    console.log(props.product);
    setIsLoading(true);
    console.log(productId);
    console.log(form);
  };

  return (
    <Grid container alignItems="center" justifyContent="center" height="75vh">
      <ProductForm
        data={props.product}
        title="Update Product"
        btnLabel="Update"
        isLoading={isLoading}
        handleSubmit={updateProduct}
      />
    </Grid>
  );
};

export default UpdateProductWrapper;
