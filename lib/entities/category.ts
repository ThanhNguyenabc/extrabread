import { Category } from "@/models/bestpos/category";
import { model, Model, models, Schema } from "mongoose";

const CategorySchema = new Schema<Category>({
  id: String,
  title: Object,
  path: String,
  image: String,
  type: String,
  products: [String],
});

export const CategoryModel: Model<Category> =
  models?.Category || model<Category>("Category", CategorySchema, "category");
