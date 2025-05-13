import mongoose from 'mongoose';
import IProduct from './entities/IProduct';

interface productModelInterface extends mongoose.Model<any> {
  build(attr: IProduct): any;
}

const ProductSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: [true, 'O título é obrigatório.']
    },
    Description: {
      type: String,
      required: [true, 'A descrição é obrigatório.']
    },
    Price: {
      type: Number,
      set: setCurrency,
      required: [true, 'O preço é obrigatório.']
    },
    Stock: {
      type: Number,
      set: setCurrency,
      required: [true, 'O stock é obrigatório.']
    },
    Category: {
      type: String,
      required: [true, 'A categoria é obrigatório.']
    }
  },
  { timestamps: true }
);

function setCurrency(value: string) {
  const normalizedValue = value.replace(/\./g, '').replace(',', '.');

  const parsedValue = parseFloat(normalizedValue);

  return parsedValue;
}

ProductSchema.statics.build = (attr: IProduct) => {
  return new Product(attr);
};

const Product = mongoose.model<any, productModelInterface>('Product', ProductSchema);

export = Product;
