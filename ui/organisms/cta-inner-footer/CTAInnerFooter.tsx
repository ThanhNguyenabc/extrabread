import { Col, Heading } from '@/components/ui';
import Hero from '@/components/ui/hero';
import { GetPricingButton } from '@/ui/atoms/get-pricing/GetPricingButton';
import { useTranslation } from 'next-i18next';

import CashBonusInput from '@/components/elements/cash-bonus-calculator/CashBonusInput';

interface Props {
  htmlText?: string;
  sale?: number;
  bonus?: number;
}

export const CTAInnerFooter = (props: Props) => {
  const { t } = useTranslation();

  return (
    <footer className="bg-green-500">
      <Hero className="flex flex-col gap-10 lg:flex-row lg:gap-10">
        <Col className="gap-4 md:gap-12 lg:max-w-xl">
          <Heading level="3" className="heading-xs whitespace-pre-line md:heading-lg text-white">
            {props.htmlText}
          </Heading>
          <GetPricingButton title={t('get_start_today')} color="black" size="large" />
        </Col>
        <CashBonusInput />
      </Hero>
    </footer>
  );
};
