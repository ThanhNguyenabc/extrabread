import { ProductModel } from '@/lib/entities/product';
import { SuggestionPOSModel } from '@/lib/entities/suggestpos';
import { connectMongo } from '@/lib/mongoose';
import { CategoryType } from '@/models/bestpos/category_type';
import { DataSubmission } from '@/models/bestpos/data_submission';
import { QuestionnaireContact } from '@/models/bestpos/questionnaire_contact';
import { sendEmail } from 'lib/sendmail';
import { NextApiRequest, NextApiResponse } from 'next';

const BusinessMapper = {
  [CategoryType.full_service]: 'Restaurant',
  [CategoryType.retail]: 'Retail Stores',
  [CategoryType.quick_service]: 'Quick Service',
  [CategoryType.small_business]: 'Small Business',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();
    switch (req.method) {
      case 'GET': {
        const { business, salesystem, stations, handheld, discount } = req.query;
        const suggestKey = `${business},${salesystem},${stations},${handheld},${discount}`;
        const suggestModel = await SuggestionPOSModel.findOne({
          answer: suggestKey,
        });
        const productIds = suggestModel?.results;
        const products = await ProductModel.find({
          slug: { $in: productIds },
        });
        const mappingData = products?.reduce((result, item) => {
          result[`${item.slug}`] = item;
          return result;
        }, <any>{});

        const data = productIds?.map(item => mappingData[item]);
        return res.status(200).json({ data });
      }
      case 'POST':
        const { ref_url, conversion_funnel, data } = req.body as DataSubmission;
        const {
          business,
          haveSaleSystem,
          numberOfStations,
          numberOfHandheld,
          onDiscountProgram,
          contact,
        } = data as QuestionnaireContact;
        const { name, phone, email } = contact;

        let content = [
          `Business Type: ${BusinessMapper[business as keyof typeof BusinessMapper]}`,
          `Own a point sale system: ${haveSaleSystem}`,
          `The nubmer of station: ${numberOfStations}`,
          `The nubmer of handheld: ${numberOfHandheld}`,
          `On the cash discount program: ${onDiscountProgram}\n`,
          `Customer information`,
          `Customer name: ${name}`,
          `Customer email: ${email}`,
          `Customer phone number: ${phone}`,
        ];

        res.status(200).json({ data: true });

        const promises = [
          sendEmail({
            subject: 'Bestpos lead - Questionnaire',
            html: `<b>We have new data with the following information</b><br>
            ${content.join('<br>')}`,
          }),
        ];
        await Promise.all(promises);
        return;
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
