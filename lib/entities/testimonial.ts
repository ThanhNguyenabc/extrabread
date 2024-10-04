import { Testimonial } from "@/models/bestpos/testimonial.model";
import { Model, model, models, Schema } from "mongoose";

const TestimonialSchema = new Schema<Testimonial>({
  short_description: Object,
  name: String,
  jobTitle: Object,
  review: Object,
  rating: Number,
  image: String,
});

export const TestimonialModel: Model<Testimonial> =
  models?.TestimonialModel ||
  model<Testimonial>("TestimonialModel", TestimonialSchema, "testimonials");
