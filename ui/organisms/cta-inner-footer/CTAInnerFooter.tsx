import { Col, Heading, Text } from '@/components/ui';
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
    <footer className="bg-blue-300">
      <Hero className="flex flex-col gap-10 lg:flex-row lg:gap-10">
        <Col className="gap-4 md:gap-12 lg:max-w-xl">
          <Heading level="3" className="heading-xs whitespace-pre-line md:heading-lg">
            {props.htmlText}
          </Heading>
          <GetPricingButton title={t('get_start_today')} size="large" />
        </Col>
        <Col className="gap-4">
          <Heading level="1" className="heading-xs whitespace-pre-line md:heading-md">
            Your Cash Signing Bonus
          </Heading>
          <Text>
            {`Receive a cash signing bonus once you sign with Bestpos. Ask our team to learn more and if your business qualifies for a cash signing bonus`}
          </Text>
          <CashBonusInput />
        </Col>
      </Hero>
    </footer>
  );
};
