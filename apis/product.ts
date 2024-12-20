import { ApiResponse } from '@/models/bestpos/api_response';
import { Product } from '@/models/bestpos/product.model';
import { Specification } from '@/models/bestpos/specification';
import { fetcher } from './fetcher';

export const getListPOS = async ({
  type = '',
  limit = 0,
  fields = '',
}: {
  type?: string;
  limit?: number;
  fields?: string;
} = {}) => {
  try {
    const result = await fetcher<ApiResponse<Array<Product>>>({
      url: '/products',
      params: {
        type,
        limit,
        fields,
      },
    });
    return result.data;
  } catch (error) {
    return [];
  }
};

export const getSpecification = async (productId: string) => {
  try {
    const result = await fetcher<ApiResponse<Specification>>({
      url: '/specification',
      method: 'POST',
      data: { posId: productId },
    });

    return result.data;
  } catch (error) {
    console.log('error =', error);
  }
  return null;
};
