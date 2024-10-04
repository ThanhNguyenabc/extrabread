import { connectMongo } from '@/lib/mongoose';
import { Product } from '@/models/bestpos/product.model';
import { CategoryModel } from 'lib/entities/category';
import { ProductModel } from 'lib/entities/product';
import { getMongoDbClient } from 'lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET': {
        const { type, limit, fields } = req.query;
        const result = await fetchProductList({
          type: type && (type as string),
          limit: limit ? Number(limit) : 0,
          fields: fields && (fields as string),
        });
        return res.setHeader('Cache-Control', 's-maxage=100').status(200).json({ data: result });
      }
      case 'POST': {
        const { posId } = req.body;
        const data = await getProductById(posId);
        return res.setHeader('Cache-Control', 's-maxage=100').status(200).json({ data });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

export const getProductById = async (id: string) => {
  await getMongoDbClient(process.env.BESTPOS_MONGODB_URL);
  const product = await ProductModel.findOne({ id: id });
  return product;
};

export const fetchProductList = async ({
  type,
  limit,
  fields,
}: {
  type?: string;
  limit?: number;
  fields?: string;
} = {}) => {
  await connectMongo()
  let filterKeys;
  if (fields) filterKeys = fields.replaceAll(',', ' ');
  if (!type || type.length == 0) {
    const products = await ProductModel.find({}, filterKeys)
      .sort({
        'expert_opinion.overall': -1,
      })
      .limit(limit || 0)
      .exec();

    return products;
  }
  let result: Array<Product> = [];
  const category = await CategoryModel.findOne({ type: type });
  if (category) {
    const productIds = category.products;
    const productMap: { [item: string]: Product } = {};
    const products = await ProductModel.find(
      {
        id: { $in: productIds },
      },
      filterKeys,
    )
      .limit(limit || 0)
      .exec();
    products.forEach(item => {
      productMap[item.id] = item;
    });
    result = productIds.map(id => productMap[id]);
  }

  return result;
};
