import {
  CASH_DISCOUNT_ITEMS,
  GENERAL_ITEMS,
  PAYMENT_PROCESSING_ITEMS,
  SALE_SYSTEM_ITEMS,
  SIGNING_BONUS_ITEMS,
} from '@/constants/faq';
import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import { useState } from 'react';
import { Collapse, Panel } from '~/ui/atoms/collapse/Collapse';
import { Heading, SectionHeading } from '~/ui/atoms/heading/Heading';
import { FQATabs, TabType, TabsEnum } from './components/FQATabs/FQATabs';
import styles from './index.module.scss';
const { Text } = Typography;

const DATA = {
  [TabsEnum.General]: {
    heading: 'General FAQ',
    faqs: GENERAL_ITEMS,
  },
  [TabsEnum.PaymentProcessing]: {
    heading: 'Payment Processing FAQ?',
    faqs: PAYMENT_PROCESSING_ITEMS,
  },
  [TabsEnum.SaleSystem]: {
    heading: 'Point of Sale System FAQ?',
    faqs: SALE_SYSTEM_ITEMS,
  },
  [TabsEnum.CashDiscount]: {
    heading: 'Cash Discount/ Zero Processing Fees FAQ',
    faqs: CASH_DISCOUNT_ITEMS,
  },
  [TabsEnum.SigningBonus]: {
    heading: 'Cash signing bonus FAQ?',
    faqs: SIGNING_BONUS_ITEMS,
  },
};

export const Faqs = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabsEnum.General);

  const items = DATA[activeTab]['faqs'];
  const heading = DATA[activeTab]['heading'];

  return (
    <main className={styles['faqs']}>
      <div className={styles['faqs_heading']}>
        <SectionHeading
          centered
          centerSp
          level={2}
          heading={
            <>
              Frequently asked <br />
              questions
            </>
          }
          subHeading={
            <Text className="font-18 text-grey">
              Got questions? We’re ready to help you find the answer.
            </Text>
          }
        />
      </div>

      <FQATabs value={activeTab} onChange={setActiveTab} />

      <div className={styles['faqs_inner']}>
        {
          <div>
            <Heading level={5} className="mb-24">
              {heading}
            </Heading>
            <Collapse>
              {items.map((item, idx) => (
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
              ))}
            </Collapse>
          </div>
        }
      </div>
    </main>
  );
};
