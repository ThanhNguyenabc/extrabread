import { Button } from '@/components/ui/button';
import Loading from '@/components/ui/loading/Loading';
import { COLORS } from '@/constants/colors';
import { getSystemIcon } from '@/helpers';
import { getCurrentMonth } from '@/helpers/date';
import useLocale from '@/hooks/useLocale';
import useRequestDemoForm from '@/hooks/useRequestDemoForm';
import { DefaultImg } from '@/ui/img-resource/ImageResources';
import { ProductDetail } from 'models/bestpos/product-detail.model';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';
import ExpertOpinion from './ExpertOpinion';
import FrequentlyQuestion from './FrequentlyQuestion';
import ImageGrid from './ImageGrid';
import PaymentProcessing from './payment_processing';
import Pricing from './Pricing';
import ProsAndCons from './ProsAndCons';
import SoftwareInfo from './SoftwareInfo';
import SpecificationView from './Specification';

export const ProductDetailView = ({ productData }: { productData: ProductDetail }) => {
  const { t: common } = useTranslation('common');
  const { t } = useTranslation('pos-detail');
  const { openForm } = useRequestDemoForm();
  const { locale } = useLocale();

  if (!productData) {
    return (
      <div className="flex justify-center mt-8">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col py-6 gap-8 lg:gap-16 md:py-8">
      <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
        <div className="col-span-1 items-center flex flex-col gap-4">
          <span className="txt-sm-bold ">{`${common('last_updated')} ${getCurrentMonth(
            locale,
          )}`}</span>
          <div className="block w-[120px] aspect-[2] md:w-[240px]">
            <Image src={productData.logo || DefaultImg} alt="pos-logo" width={240} height={120} />
          </div>

          <Button
            className="hidden rounded-full md:w-[220px] lg:flex "
            size={'default'}
            variant={'success'}
            onClick={openForm}
          >
            {common('request_a_demo')}
          </Button>
        </div>
        <div className="col-span-2 flex flex-col gap-4 md:gap-8 flex-1">
          <p className="txt-md md:text-xl text-neutral-700 whitespace-pre-line">
            {productData.intro?.[locale]}
          </p>
          <div className="hidden items-center gap-3 lg:flex">
            {productData.os_system?.map((item, index) => {
              const Icon = getSystemIcon(item);
              return <Icon key={`item-os-${index}`} className="w-6 h-6 text-neutral-400" />;
            })}
          </div>

          <Button
            style={{ backgroundColor: COLORS.success }}
            className="flex rounded-full w-[222px] self-center lg:hidden"
            onClick={openForm}
          >
            {common('request_a_demo')}
          </Button>
        </div>
      </div>

      <ImageGrid images={productData.images} />
      <ProsAndCons pros={productData.pros} cons={productData.cons} />
      <ExpertOpinion data={productData.expert_opinion} />
      <SpecificationView posId={`${productData.id}`} />
      <SoftwareInfo title={t('pos-integration')} desc={productData.pos_integrations?.[locale]} />
      <SoftwareInfo title={t('software')} desc={productData.software?.[locale]} />
      <PaymentProcessing desc={productData.payment_processing} />
      <Pricing
        monthlyPrice={productData.monthly_price}
        desc={productData.pricing_desc?.[locale] || []}
        oneTimePurchase={productData.one_time_purchase}
        onRequestDemo={openForm}
        productName={productData.name}
      />
      <FrequentlyQuestion />
    </div>
  );
};
