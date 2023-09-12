import { Divider, Form, Input, Typography } from 'antd';
import { PatternFormat } from 'react-number-format';
import { EMAIL, PHONE, RouteConfig, US_MASK } from '~/constants/index';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Button } from '~/ui/atoms/button/Button';
import { Heading } from '~/ui/atoms/heading/Heading';
import { LinkMore } from '~/ui/atoms/link-more/LinkMore';
import { BaseForm } from '~/ui/organisms/base-form/BaseForm';
import { PhoneInput } from '~/ui/organisms/base-form/PhoneInput';

import { US_STATE_CODE } from '@/constants/us-state-code';
import Image from 'next/image';
import styles from './index.module.scss';
const { Text, Link: AntLink } = Typography;

interface ContactInfoProp {
  icon: string;
  title: string;
  detail: JSX.Element;
  phone?: string;
  email?: string;
  href?: string;
}

const ContactInfo = ({ icon, title, detail, phone, email, href }: ContactInfoProp) => {
  return (
    <div className={styles['contact_info']}>
      <Image src={icon} alt="icon" width={48} height={48} quality={100} />
      <Text strong className="f-body-lg-semi">
        {title}
      </Text>
      <Text className="text-grey font-16-14">{detail}</Text>
      {phone && (
        <AntLink className="text-primary" strong href={`tel:${phone}`}>
          {phone}
        </AntLink>
      )}
      {email && (
        <AntLink className="text-primary" strong href={`mailto:${email}`}>
          {email}
        </AntLink>
      )}
      {href && <LinkMore href={href} text="General FAQ" color="green" />}
    </div>
  );
};

const CONTACT_LIST = [
  {
    icon: '/images/color-icons/phone.svg',
    title: 'Call us now',
    detail: (
      <>
        Got questions?
        <br /> We’re ready to help you find the answer.
      </>
    ),
    phone: PHONE,
  },
  {
    icon: '/images/color-icons/email.svg',
    title: 'Email to us',
    detail: (
      <>
        Please email any questions, comments or <br /> suggestions to us
      </>
    ),
    email: EMAIL,
  },
  {
    icon: '/images/color-icons/question.svg',
    title: 'FAQs',
    detail: <>Find the answers using our Self-service</>,
    href: RouteConfig.Faqs,
  },
];

export const Contact = () => {
  return (
    <main className={styles['contact']}>
      <BreadCard>
        <div className={styles['contact_inner']}>
          <Heading centered level={2}>
            Support 24/7
          </Heading>

          <div className={styles['contact_info-list']}>
            {CONTACT_LIST.map((item, idx) => (
              <ContactInfo key={`${idx}`} {...item} />
            ))}
          </div>
          <Divider />

          <div className={styles['contact_form']}>
            <div className={styles['contact_form-header']}>
              <Heading level={4}>Leave us a message</Heading>
              <Text className="font-18 block mt-16 mb-40 text-grey">
                If you have any questions, please do not hesitate to contact us.
              </Text>
            </div>
            <BaseForm layout="vertical">
              <Form.Item label="Your Name" name="yourName">
                <Input size="large" />
              </Form.Item>
              <Form.Item label="Business Name" name="businessName">
                <Input size="large" />
              </Form.Item>
              <div className={styles['contact_form-grid']}>
                <div>
                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        validator: (__, value: string) => {
                          const areaCode = (value ?? '').replace(/\D/g, '').substring(0, 3);
                          if (!US_STATE_CODE.includes(+areaCode)) {
                            return Promise.reject('Invalid us area code');
                          }
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <PatternFormat
                      customInput={PhoneInput}
                      placeholder="(555) 000-0000"
                      format={US_MASK}
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: 'email',
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </div>
              <Form.Item label="Message" name="message">
                <Input.TextArea
                  rows={2}
                  size="large"
                  placeholder={`What's on your mind? Share your thoughts`}
                />
              </Form.Item>

              <Button block type="primary" htmlType="submit" className="mt-24">
                Send message
              </Button>
            </BaseForm>
          </div>
        </div>
      </BreadCard>
    </main>
  );
};
