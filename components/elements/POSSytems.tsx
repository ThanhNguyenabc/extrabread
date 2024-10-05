import SelectedList from '@/components/ui/select-list';
import { BUSINESS_MENU } from '@/constants';
import { RouteConfig } from '@/constants/routes';
import { getCurrentMonth } from '@/helpers/date';
import { MetaTag } from '@/models/bestpos/app_configs';
import { CategoryType } from '@/models/bestpos/category_type';
import { Product } from '@/models/bestpos/product.model';
import { IcStar } from '@/ui/img-resource/ExIcon';
import { Seo } from '@/ui/util-components/Seo';
import useTrans from 'hooks/useTrans';
import HTMLReactParser from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ProductList from './ProductList';

const ALLTABS = [
  {
    title: 'popular',
    type: CategoryType.popular,
    link: RouteConfig.POSSystems,
    icon: IcStar,
  },
  ...BUSINESS_MENU,
];

interface POSSystemsProps {
  seoTag?: MetaTag;
  type?: string;
  data: Array<Product>;
}

const POSSystems = ({ seoTag, data }: POSSystemsProps) => {
  const { t: common } = useTranslation('common');

  const { t } = useTranslation('pos_systems');
  const { locale } = useTrans();
  const router = useRouter();
  const { slug: type = CategoryType.popular } = router.query;
  const selectedTabIndex = ALLTABS.findIndex(item => item.type == type);

  return (
    <>
      <Seo title={seoTag?.title[locale]} description={seoTag?.description[locale]} />
      <div className="flex flex-col bg-neutral-100 flex-1 overflow-hidden">
        <div className="flex flex-col gap-4 py-6 bg-white mb-6 px-4 lg:items-center text-center md:py-10 md:px-12">
          <p className="txt-sm-bold">{`${common('last_updated')} ${getCurrentMonth(locale)}`}</p>

          <h1 className="txt-heading-medium mx-auto md:txt-heading-xlarge">
            {HTMLReactParser(t('category_title'))}
          </h1>
          <h2 className="txt-md md:text-xl text-neutral-700 mt-4 md:mt-0 mx-auto">
            {HTMLReactParser(t('category_desc'))}
          </h2>

          <SelectedList
            data={ALLTABS}
            className="flex overflow-auto"
            selectedClassName="bg-neutral-900 text-white"
            selectIndex={selectedTabIndex}
            renderItem={item => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={`${RouteConfig.POSSystems}/${
                    item.type == CategoryType.popular ? '' : item.type
                  }`}
                  className="border-none rounded-3xl"
                >
                  <div
                    className="flex flex-col items-center gap-1 text-sm font-semibold py-[10px] min-w-[180px] lg:min-w-fit px-4 border rounded-3xl border-neutral-300
               hover:bg-neutral-900 h-full hover:text-white"
                  >
                    <Icon width={20} height={20} />
                    {common(item.title)}
                  </div>
                </Link>
              );
            }}
          />
        </div>

        <ProductList type={type as string} data={data} />
        {/* <FooterCTA className="mt-12" /> */}
      </div>
    </>
  );
};

export default POSSystems;
