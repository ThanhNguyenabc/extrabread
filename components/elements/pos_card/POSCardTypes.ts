import { RecommendTagProps } from '@/components/ui/RecommendTag';
import { Product } from '@/models/bestpos/product.model';

export enum Priority {
  'first' = 'first',
  'second' = 'second',
  'third' = 'third',
}

export const RecommendColorConfig = {
  [Priority.first]: {
    tagColor: 'bg-[#F79009]',
    borderColor: 'border-primary',
    bgColor: 'bg-primary',
  },
  [Priority.second]: {
    tagColor: 'bg-neutral-400',
    borderColor: '',
  },
  [Priority.third]: {
    tagColor: 'bg-[#80523D]',
    iconColor: 'text-white',
    borderColor: '',
  },
};

export interface POSCardProps {
  data: Product;
  classname?: string;
  priority?: Priority;
  recommendTagProps?: RecommendTagProps;
  navigateTo?: string;
}
