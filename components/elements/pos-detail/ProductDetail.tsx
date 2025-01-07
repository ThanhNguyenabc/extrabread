import Loading from '@/components/ui/loading/Loading';
import useLocale from '@/hooks/useLocale';
import useRequestDemoForm from '@/hooks/useRequestDemoForm';
import { ProductDetail } from 'models/bestpos/product-detail.model';
import { useTranslation } from 'next-i18next';
import React from 'react';
import ExpertOpinion from './ExpertOpinion';
import FrequentlyQuestion from './FrequentlyQuestion';
import ImageGrid from './ImageGrid';
import Introduction from './Introduction';
import PaymentProcessing from './payment_processing';
import Pricing from './Pricing';
import ProsAndCons from './ProsAndCons';
import SoftwareInfo from './SoftwareInfo';
import SpecificationView from './Specification';

export const ProductDetailView = ({ productData }: { productData: ProductDetail }) => {
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
      <ImageGrid images={productData.images} />

      <Introduction productData={productData} />

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
