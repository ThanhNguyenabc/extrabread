import { Product } from '@/models/bestpos/product.model';
import { model, Model, models, Schema } from 'mongoose';

const ProductSchema = new Schema<Product>(
  {
    id: String,
    name: String,
    slug: String,
    monthly_price: Number,
    expert_opinion: Object,
    one_time_purchase: Number,
    os_system: [String],
    overview: Object,
    pros: Object,
    cons: Object,
    logo: String,
  },
  { _id: false },
);

export const ProductModel: Model<Product> =
  models?.ProductModel || model<Product>('ProductModel', ProductSchema, 'products');
