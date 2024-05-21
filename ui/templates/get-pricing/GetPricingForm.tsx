import { ConfigProvider, Form, Input, Radio } from 'antd';
import variables from 'assets/styles/variables.module.scss';
import React from 'react';
import { PatternFormat } from 'react-number-format';

import { US_STATE_CODE } from '@/constants/us-state-code';
import { useTranslation } from 'next-i18next';
import { US_MASK } from '~/constants/index';

import { BaseForm } from '~/ui/organisms/base-form/BaseForm';
import { PhoneInput } from '~/ui/organisms/base-form/PhoneInput';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  onFinish?: (formValues: any) => void;
  btnSubmit?: React.ReactElement;
};

const { infoBaseColor } = variables;

export const GetPricingForm = ({ onFinish, btnSubmit }: Props) => {
  const { t: common } = useTranslation();
  const [form] = Form.useForm<{ name: string; age: number }>();
  const heardAbout = Form.useWatch('heardAbout', form);

  return (
    <BaseForm
      requiredMark={false}
      form={form}
      layout="vertical"
      onFinish={() => {
        onFinish && onFinish(form.getFieldsValue());
      }}
      className="flex flex-col w-full"
    >
      <ConfigProvider
        theme={{
          hashed: true,
          token: {
            colorPrimary: infoBaseColor,
            colorPrimaryHover: infoBaseColor,
          },
        }}
      >
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <Form.Item
            className="flex-1"
            label={common('your_name')}
            name="name"
            rules={[{ required: true }]}
          >
            <Input placeholder="e.g. John" size="large" />
          </Form.Item>
          <Form.Item
            className="flex-1"
            label={common('business_name')}
            name="business_name"
            rules={[{ required: true }]}
          >
            <Input placeholder="e.g. Burger King" size="large" />
          </Form.Item>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-4">
          <Form.Item
            className="flex-1"
            label={common('phone_number')}
            name="phone"
            rules={[
              {
                required: true,
                validator: (__, value: string) => {
                  const areaCode = (value ?? '').replace(/\D/g, '').substring(0, 3);
                  if (!US_STATE_CODE.includes(+areaCode)) {
                    return Promise.reject(common('error_invalid_area_code'));
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <PatternFormat customInput={PhoneInput} placeholder="(___) ___-____" format={US_MASK} />
          </Form.Item>
          <Form.Item
            className="flex-1"
            label={common('email')}
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
              },
            ]}
          >
            <Input
              placeholder={`${common('email').toLowerCase()}@${common('example')}`}
              size="large"
            />
          </Form.Item>
        </div>

        <Form.Item label={common('website')} name="website" rules={[{ required: true }]}>
          <Input placeholder="e.g. extrabread.co" size="large" />
        </Form.Item>
        <Form.Item label={common('hear_about_us')} name="heardAbout" rules={[{ required: true }]}>
          <Radio.Group>
            {(common('sources', { returnObjects: true }) as string[]).map(item => (
              <Radio key={item} value={item}>
                {item}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        {heardAbout === 'Other' && (
          <Form.Item name="other" rules={[{ required: true }]}>
            <Input placeholder={common('please_specify')} size="large" />
          </Form.Item>
        )}
      </ConfigProvider>
      {btnSubmit}
    </BaseForm>
  );
};
