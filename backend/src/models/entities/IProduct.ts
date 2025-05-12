import mongoose from 'mongoose';

export default interface IProduct {
  _id?: mongoose.Schema.Types.ObjectId;
  Title: string;
  Description: string;
  Price: number;
  Stock: number;
  Category: string;
}
