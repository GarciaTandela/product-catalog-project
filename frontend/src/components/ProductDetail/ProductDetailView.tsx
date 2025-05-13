'use client';
import ProductModel from '@/models/modules/product';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const ProductDetailWrapper: React.FC<ProductModel.ProductDataProps> = (
  props
) => {
  const formatCurrency = (value = 0, minimumFractionDigits = 0) =>
    value.toLocaleString('pt-br', { minimumFractionDigits });
  return (
    <Grid
      container
      sx={{ mt: 6 }}
      height="75vh"
      alignItems="center"
      justifyContent="center"
    >
      <Grid size={12} height={220}>
        <Typography
          variant="h3"
          component="div"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            mb: 3
          }}
        >
          {props.product.Title}
        </Typography>
        <Typography variant="subtitle1">
          Price: €{formatCurrency(props.product.Price)}
        </Typography>
        <Typography variant="subtitle1">
          Stock: {props.product.Stock}
        </Typography>
        <Typography variant="subtitle1">
          Category: {props.product.Category}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: '15px',
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
            textOverflow: 'ellipsis',
            mt: 3,
            fontWeight: 'bolder'
          }}
        >
          {props.product.Description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductDetailWrapper;
