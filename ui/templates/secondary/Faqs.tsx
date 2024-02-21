import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { Collapse, Panel } from '~/ui/atoms/collapse/Collapse';
import { Heading, SectionHeading } from '~/ui/atoms/heading/Heading';
import { FAQTabs, TabType, TabsEnum } from './components/FQATabs/FAQTabs';
import styles from './index.module.scss';
const { Text } = Typography;

const DATA = {
  [TabsEnum.General]: {
    heading: 'general_faq',
    faqs: 'general_faqs',
  },
  [TabsEnum.PaymentProcessing]: {
    heading: 'payment_processing_faq',
    faqs: 'payment_faqs',
  },
  [TabsEnum.SaleSystem]: {
    heading: 'sale_systems_faq',
    faqs: 'sale_items_faqs',
  },
  [TabsEnum.CashDiscount]: {
    heading: 'discount_faq',
    faqs: 'cash_discount_faqs',
  },
  [TabsEnum.SigningBonus]: {
    heading: 'sign_bonus_faq',
    faqs: 'bonus_faqs',
  },
};

export const Faqs = () => {
  const { t } = useTranslation(['faq']);
  const [activeTab, setActiveTab] = useState<TabType>(TabsEnum.General);

  const items = t(DATA[activeTab]['faqs'], {
    returnObjects: true,
  }) as Array<{ header: string; content: string; list?: string[] }>;

  const heading = t(DATA[activeTab]['heading']);

  return (
    <main className={styles['faqs']}>
      <div className={styles['faqs_heading']}>
        <SectionHeading
          centered
          centerSp
          level={2}
          heading={<>{t('heading')}</>}
          subHeading={<Text className="font-18 text-grey">{t('sub_title')}</Text>}
        />
      </div>

      <FAQTabs value={activeTab} onChange={setActiveTab} />

      <div className={styles['faqs_inner']}>
        {
          <div>
            <Heading level={5} className="mb-24">
              {heading}
            </Heading>
            <Collapse>
              {items.map((item, idx) => {
                return (
                  <Panel header={item.header} key={`${idx}`}>
                    {!isEmpty(item.content) && item.content}
                    {!isEmpty(item.list) && (
                      <ul style={{ marginTop: 8 }}>
                        {item.list?.map((text, idx) => (
                          <li style={{ lineHeight: 1.6 }} key={idx}>
                            {text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Panel>
                );
              })}
            </Collapse>
          </div>
        }
      </div>
    </main>
  );
};
