import { ApiResponse } from '@/models/bestpos/api_response';
import { Product } from '@/models/bestpos/product.model';
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

    console.log('daaaa');
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log('error = ', error);
    return [];
  }
};
