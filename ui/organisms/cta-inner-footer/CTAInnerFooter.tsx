import { GetPricingButton } from '@/ui/atoms/get-pricing/GetPricingButton';
import { useHookstate } from '@hookstate/core';
import { Col, Row, Slider, Space, Typography } from 'antd';
import variables from 'assets/styles/variables.module.scss';
import { formatCurrency } from 'helpers/number';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { commonState } from '~/hooks/useCtaFooterState';
import { Button } from '~/ui/atoms/button/Button';
import { Container } from '~/ui/atoms/container/Container';
import { Heading } from '~/ui/atoms/heading/Heading';
import styles from './CTAInnerFooter.module.scss';

const { textColor } = variables;
const { Text } = Typography;

interface Props {
  htmlText?: string;
  sale?: number;
  bonus?: number;
}

export const CTAInnerFooter = (props: Props) => {
  const { t } = useTranslation();
  const state = useHookstate(commonState);
  const { push } = useRouter();
  const [price, setPrice] = useState<number>(Number(props.sale ?? state.sale.get() ?? 0));

  return (
    <footer className={styles['cta-footer']}>
      <Container className={styles['cta-footer_container']}>
        <Row gutter={[32, 32]}>
          <Col md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
            <Space direction="vertical" size={0}>
              <Heading level={3} className={styles['cta-footer_heading']}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: props.htmlText ?? state.footerText.get() ?? '',
                  }}
                />
              </Heading>
              <GetPricingButton title={t('get_start_today')} color="black" size="large" />
            </Space>
          </Col>
          <Col
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
            className={styles['cta-footer_right-block']}
          >
            <Text strong className={styles['cta-footer_right-block_text']}>
              {t('footer.subTitle')}
            </Text>

            <div className={styles['cta-footer_signing-bonus']}>
              <Text strong className="font-18-14 whitespace-pre-line max-w-[200px]">
                {t('footer.subTitle2')}
              </Text>
              <Heading level={3}>${formatCurrency(price / 100)}</Heading>
            </div>

            <div className={styles['cta-footer_estimated']}>
              <div>
                <Text strong className="font-18-14 whitespace-pre-line max-w-[200px]">
                  {t('footer.subtitle3')}
                </Text>
                <Heading level={3}>${formatCurrency(price)}</Heading>
              </div>
              <div className={styles['cta-footer_slider-wrapper']}>
                <Slider
                  step={100}
                  min={100_000}
                  max={5_000_000}
                  defaultValue={2_500000}
                  trackStyle={{ backgroundColor: textColor }}
                  rootClassName={styles['cta-footer_slider']}
                  tooltip={{
                    formatter: formatCurrency,
                  }}
                  onChange={val => setPrice(val)}
                />
                <div className={styles['cta-footer_slider-values']}>
                  <Text>$100,000</Text>
                  <Text>$5,000,000</Text>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
