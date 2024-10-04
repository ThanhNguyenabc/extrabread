import { ProductDetail } from "@/models/bestpos/product-detail.model";
import { model, Model, models, Schema } from "mongoose";

const ProductDetailSchema = new Schema<ProductDetail>(
  {
    productId: String,
    intro: Object,
    pos_integrations: Object,
    software: Object,
    payment_processing: Object,
    pricing_desc: Object,
    images: [String],
  },
  { _id: false }
);

export const ProductDetailModel: Model<ProductDetail> =
  models?.ProductDetailModel ||
  model<ProductDetail>(
    "ProductDetailModel",
    ProductDetailSchema,
    "product_info"
  );
