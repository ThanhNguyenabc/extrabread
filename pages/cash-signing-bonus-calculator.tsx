import { Button } from '@/components/ui/button';
import Col from '@/components/ui/col';
import Hero from '@/components/ui/hero';
import { Meta } from '@/models/app_config.model';
import { CashBonusCalculator } from '@/ui/organisms/cta-inner-footer/CashBonusCalculator';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import { Seo } from '~/ui/util-components/Seo';
import { getSEOTag } from './api/app-configs';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [seoTag, translation] = await Promise.all([
    getSEOTag('home', locale),
    serverSideTranslations(locale ?? 'en', ['common']),
  ]);
  return {
    props: {
      seoTag,
      ...translation,
    },
    revalidate: 120,
  };
};

const CashSigningBonusCal = ({ seoTag }: { seoTag?: Meta }) => {
  const { title, description, keywords, image } = seoTag || {};
  return (
    <>
      <Seo title={title} description={description} keywords={keywords} imageFeature={image}></Seo>
      <Hero className="flex flex-col gap-4 md:flex-row md:gap-10">
        <Col className="gap-4 md:gap-6 md:max-w-sm">
          <h3 className="heading-xs text-center md:heading-lg md:text-start">
            {`Credit Card Processing Calculator`}
          </h3>
          <p className="whitespace-pre-line text-neutral-700 md:text-lg">
            {`At ExtraBread, we go the extra mile by offering a generous cash signing bonus depending on your businesses’ yearly credit card sales.\n
No strings attached, no interests, contracts, or hidden fees involved. Swipe to input your businesses’ yearly credit card sales and see how much you could potentially earn!`}
          </p>
        </Col>
        <CashBonusCalculator>
          <Button className="w-full md:w-full" size={'responsive'}>
            {`Request a quote`}
          </Button>
        </CashBonusCalculator>
      </Hero>
    </>
  );
};

export default CashSigningBonusCal;
