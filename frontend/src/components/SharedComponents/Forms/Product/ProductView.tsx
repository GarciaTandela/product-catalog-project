'use client';
import { Box, TextField, Button, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import useProductFormViewModel from './ProductViewModel';
import ProductModel from '@/models/modules/product';

const ProductForm: React.FC<ProductModel.FormProps> = (props) => {
  const { categories, state, handleSubmit, dispatch } =
    useProductFormViewModel(props);

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        boxShadow: 3,
        padding: 4,
        borderRadius: 2,
        margin: 'auto'
      }}
    >
      <Typography
        variant="h4"
        color="text.secondary"
        align="center"
        gutterBottom
      >
        {props.title}
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        margin="normal"
        fullWidth
        value={state.Title}
        onChange={(e) =>
          dispatch({
            type: 'setFormState',
            key: 'Title',
            value: e.target.value
          })
        }
        disabled={props.isLoading}
      />

      <TextField
        label="Description"
        variant="outlined"
        margin="normal"
        fullWidth
        multiline
        rows={4}
        value={state.Description}
        onChange={(e) =>
          dispatch({
            type: 'setFormState',
            key: 'Description',
            value: e.target.value
          })
        }
        disabled={props.isLoading}
      />

      <TextField
        label="Price"
        margin="normal"
        fullWidth
        value={state.Price}
        onChange={(e) =>
          dispatch({
            type: 'handlePriceChange',
            key: 'Price',
            value: e.target.value
          })
        }
        disabled={props.isLoading}
        InputProps={{
          startAdornment: <InputAdornment position="start">€</InputAdornment>
        }}
      />
      <TextField
        label="Stock"
        variant="outlined"
        margin="normal"
        fullWidth
        value={state.Stock}
        onChange={(e) =>
          dispatch({
            type: 'setFormState',
            key: 'Stock',
            value: e.target.value
          })
        }
        disabled={props.isLoading}
      />
      <Select
        value={state.Category}
        disabled={props.isLoading}
        onChange={(e) =>
          dispatch({
            type: 'setFormState',
            key: 'Category',
            value: e.target.value
          })
        }
        fullWidth
        variant="outlined"
        sx={{
          mt: 2,
          mb: 2,
          color: state.Category === 'Select Category' ? 'grey.500' : ''
        }}
      >
        <MenuItem value="Select Category" disabled>
          Select Category
        </MenuItem>
        {categories.map((category, index) => (
          <MenuItem key={index} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, mb: 2 }}
        fullWidth
        onClick={handleSubmit}
        disabled={props.isLoading}
      >
        {props.isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          props.btnLabel
        )}
      </Button>
    </Box>
  );
};

export default ProductForm;
