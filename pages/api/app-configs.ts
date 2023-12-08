import { getMongoDbClient } from '@/lib/mongodb';
import { AppConfig } from '@/models/app_config.model';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await getAppConfig();
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Not found',
    });
  }
}

export const getAppConfig = async (): Promise<AppConfig | null> => {
  try {
    const db = await getMongoDbClient();
    const data = (await db?.collection('app_configs').findOne<AppConfig>({})) || null;
    return data;
  } catch (error) {
    console.log('get app config error=', error);
  }
  return null;
};

export const getSEOTag = async (page: string, locale = 'en') => {
  try {
    const configs = await getAppConfig();
    const seoTagConfig = configs?.seo_tags[page];
    let translations: object | undefined = {};
    if (locale != 'en') {
      translations = seoTagConfig?.translations?.[locale];
    }
    seoTagConfig?.translations && delete seoTagConfig.translations;
    return {
      ...seoTagConfig,
      ...translations,
    };
  } catch (error) {
    console.log('get app config error=', error);
  }
  return null;
};
