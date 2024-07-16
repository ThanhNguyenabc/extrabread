import { Box, Col, Heading, Row, Text } from '@/components/ui';
import Slider from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { IcThumb } from '@/ui/img-resource/ExIcon';
import clsx from 'clsx';
import { formatCurrency } from 'helpers/number';
import { useTranslation } from 'next-i18next';
import { HTMLAttributes, PropsWithChildren, useState } from 'react';

type CashBonusCalculatorProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  onValueChange?: (price: number) => void;
  headingStyle?: string;
};
export const CashBonusCalculator = ({
  children,
  className,
  headingStyle,
  onValueChange,
  ...other
}: CashBonusCalculatorProps) => {
  const { t } = useTranslation();
  const [price, setPrice] = useState<number>(100_000);

  const onChange = val => {
    setPrice(val);
    onValueChange && onValueChange(val);
  };
  return (
    <Col className={cn(`w-full gap-2 md:gap-6`, className)} {...other}>
      <Text
        className={clsx(
          'text-md-semibold text-neutral-700 mb-1 md:text-neutral-900 md:text-2xl',
          headingStyle,
        )}
      >
        {t('footer.subTitle')}
      </Text>
      <Col className="bg-yellow-400 px-4 py-3 items-center rounded-2xl md:gap-2 md:px-6 md:py-8">
        <Text className="text-xs-semibold whitespace-pre-line md:text-lg">{t('footer.subTitle2')}</Text>
        <Heading level={'3'} className="heading-sm">
          ${formatCurrency(price / 100)}
        </Heading>
      </Col>

      <Col className="gap-1 bg-white rounded-2xl md:gap-2 px-4 py-3 md:px-6 md:py-8">
        <Text className="text-xs-semibold self-center whitespace-pre-line md:text-lg">{t('footer.subtitle3')}</Text>
        <Box className="p-2 rounded-lg text-center w-full">
          <Heading className="heading-sm" level={'3'}>
            ${formatCurrency(price)}
          </Heading>
        </Box>
        <Slider
          step={100}
          minValue={100_000}
          maxValue={500_000_000}
          defaultValue={100_000}
          onChange={onChange}
          className="mt-5 mx-2"
          color="foreground"
          renderThumb={props => (
            <div
              {...props}
              className="h-10 top-1/2 cursor-grab data-[dragging=true]:cursor-grabbing"
            >
              <IcThumb height={40} />
            </div>
          )}
        />
        <Row className="mt-2 justify-between text-neutral-600 md:text-lg">
          <Text>$100,000</Text>
          <Text>$500,000,000</Text>
        </Row>
      </Col>
      {children}
    </Col>
  );
};
