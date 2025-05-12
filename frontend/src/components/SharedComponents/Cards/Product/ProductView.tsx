import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import Link from 'next/link';
import { memo } from 'react';
import ProductModel from '@/models/modules/product';

const ProductCard: React.FC<ProductModel.ProductCardProps> = ({
  data,
  openAlertDialog
}) => {
  const formatCurrency = (value = 0, minimumFractionDigits = 0) =>
    value.toLocaleString('pt-br', { minimumFractionDigits });

  return (
    <Card sx={{ maxHeight: 617, minHeight: 150 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            mb: 1
          }}
        >
          {data.Title}
        </Typography>
        <Typography variant="subtitle1" color="text.primary">
          Price: €{formatCurrency(data.Price)}
        </Typography>
        <Typography variant="subtitle1" color="text.primary">
          Stock: 2
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {data.Category}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            marginTop: '15px',
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
            textOverflow: 'ellipsis'
          }}
        >
          {data.Description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'end' }}>
        <Link href={`/product/update/${data._id}`} passHref>
          <Button size="small">Update</Button>
        </Link>
        <Button
          size="small"
          color="error"
          onClick={() => openAlertDialog(data._id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default memo(ProductCard);
