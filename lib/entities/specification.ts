import { Specification } from "@/models/bestpos/specification";
import { model, models, Schema } from "mongoose";

const SpecificationSchema = new Schema<Specification>({
  id: String,
  businessSize: Object,
  productId: String,
  posType: String,
  softwareType: String,
  freeTrial: Object,
  merchantService: Object,
  pricingModel: Object,
  priceRange: String,
  bestFor: Object,
});

export const SpecificationModel =
  models?.Specification ||
  model<Specification>("Specification", SpecificationSchema, "specification");
