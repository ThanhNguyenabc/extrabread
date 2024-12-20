import { SpecificationModel } from '@/lib/entities/specification';
import { connectMongo } from '@/lib/mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();
    switch (req.method) {
      case 'POST': {
        const { posId } = req.body || {};
        const item = await SpecificationModel.findOne({ productId: posId });
        return res.status(200).json({ data: item });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
