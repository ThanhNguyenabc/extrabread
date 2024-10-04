import Attribute from "./attribute";
import { ExpertOpinion, Product } from "./product.model";

export interface ProductDetail extends Product {
  productId: string;
  intro?: Attribute;
  images?: Array<string>;
  expert_opinion: ExpertOpinion;
  pos_integrations?: Attribute;
  software?: Attribute;
  payment_processing?: Attribute;
  pricing_desc?: Attribute<Array<string>>;
}
