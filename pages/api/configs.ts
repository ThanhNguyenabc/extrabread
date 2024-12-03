import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { AppConfigModel } from "@/lib/entities/app_config";
import { connectMongo } from "@/lib/mongoose";
import { BusinessTypeMeta, PageMeta } from "@/models/bestpos/app_configs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const data = await AppConfigModel.find({});
    return res.status(200).send({ data: data?.[0] || {} });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export const getSEOTags = async (page: keyof PageMeta) => {
  try {
    await connectMongo();
    const data = await AppConfigModel.find({});
    return (
      data?.[0].metaTags?.pageTags?.[page] || data?.[0].metaTags?.pageTags?.home
    );
  } catch (error) {
    console.log(error)
  }
  return {};
};

export const getSEOTagByProduct = async (productSlug: string) => {
  try {
    await connectMongo();
    const data = await AppConfigModel.find({});
    return data?.[0].metaTags?.pageTags?.["products"]?.[productSlug];
  } catch (error) {
    console.log(error)
  }
  return null;
};

export const getSEOTagByBusinessType = async (type: string) => {
  try {
    const data = (await getSEOTags("businessTypes")) as BusinessTypeMeta;
    return data[type as keyof BusinessTypeMeta] || {};
  } catch (error) {
    console.log(error)
  }
  return {};
};
