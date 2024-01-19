export type Product = {
  id: string;
  name?: string;
  images?: string[];
  longDesc?: string;
  desc?: string;
  route: string;
  logo?: string;
  pros?: string[];
  cons?: string[];
  monthly_pricing?: number;
  onetime_pricing?: number;
  features?: {
    description: string;
    href?: string;
  }[];
};
