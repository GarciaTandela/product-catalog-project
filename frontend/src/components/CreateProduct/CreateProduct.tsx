'use client';
import Grid from '@mui/material/Grid2';
import ProductForm from '@/components/SharedComponents/Forms/Product/ProductView';
import { useState } from 'react';

export default function CreateProductWrapper() {
  const [isLoading, setIsLoading] = useState(false);
  const createProduct = async (form: unknown) => {
    setIsLoading(true);
    console.log(form);
  };

  return (
    <Grid container alignItems="center" justifyContent="center" height="75vh">
      <ProductForm
        title="Create Product"
        btnLabel="Create"
        isLoading={isLoading}
        handleSubmit={createProduct}
      />
    </Grid>
  );
}
