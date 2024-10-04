import Attribute from "./attribute";

export interface Testimonial {
  short_description?: Attribute;
  name: string;
  jobTitle: Attribute;
  review: Attribute;
  rating?: number;
  image: string;
}
