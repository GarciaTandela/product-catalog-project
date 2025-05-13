'use client';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import ProductList from './Lists/Product/ProductView';
import Link from 'next/link';
import ProductModel from '@/models/modules/product';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import productStore from '@/stores/product/slice';
import { useEffect } from 'react';

const HomeWrapper: React.FC<ProductModel.ProductListProps> = (props) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(productStore.actions.setProducts({ products: props.products }));
  }, []);
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'left' }}>
        All Products
      </Typography>
      <Grid container sx={{ mt: 6 }} justifyContent="end">
        <Link href="/product/create" passHref>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'primary'
            }}
          >
            Add Product
          </Button>
        </Link>
      </Grid>
      {products.length === 0 ? (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          height="50vh"
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: 'center', mt: 4 }}
          >
            No products available
          </Typography>
        </Grid>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
};

export default HomeWrapper;
