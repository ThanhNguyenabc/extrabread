import Attribute from "./attribute";
import { CategoryType } from "./category_type";

export interface Category {
  id: string;
  title: Attribute;
  path: string;
  image?: string;
  type?: CategoryType;
  products: Array<string>;
}
