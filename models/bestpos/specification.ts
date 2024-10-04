import Attribute from "./attribute";

export interface Specification {
  bestFor: Attribute;
  id: string;
  businessSize: Attribute;
  productId: string;
  posType: string;
  softwareType: string;
  freeTrial: Attribute;
  merchantService: Attribute;
  pricingModel: Attribute;
  priceRange: string;
}
