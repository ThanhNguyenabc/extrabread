import { Form, Input, InputNumber, Radio, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { Button } from '~/ui/atoms/button/Button';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Icon } from '~/ui/atoms/icon/Icon';
import { BaseForm } from '~/ui/organisms/base-form/BaseForm';
import { FormValue } from '../../types';
import { PriceSlider } from '../price-slider/PriceSlider';
import styles from './AdditionalInfo.module.scss';

type Props = {
  onSubmit?: (values: FormValue) => void;
};

export const AdditionalInfo = (props: Props) => {
  const [form] = Form.useForm<FormValue>();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue({
      price: 50,
      onCashDiscount: `Yes, I'm on it`,
      franchise: "Yes, I'm a franchise",
      locationsHave: 1,
      stationsHave: '0-1',
    });
    window.dataLayer.push({ event: 'getpricing_additionalinfo' });
  }, []);

  return (
    <div className={styles['additionalInfo']}>
      <BaseForm
        form={form}
        layout="vertical"
        className={styles['additionalInfo-form']}
        requiredMark={false}
        onFinish={() => {
          setLoading(true);
          props.onSubmit?.(form.getFieldsValue());
        }}
      >
        <div style={{ marginBottom: 24, alignSelf: 'center' }}>
          <Form.Item name="price" rules={[{ required: true }]}>
            <PriceSlider />
          </Form.Item>
        </div>

        {!showForm && (
          <Button type="primary" onClick={() => setShowForm(true)} className="w-fit self-center">
            <Flex>
              Continue
              <Icon name="down" color="white" size={24} />
            </Flex>
          </Button>
        )}

        {showForm && (
          <>
            <div className={styles['additionalInfo_checkbox-row']}>
              <Flex>
                <label>Are you currently on cash discount?</label>
                <Tooltip
                  arrow
                  placement="right"
                  overlayClassName={styles['additionalInfo_tooltip']}
                  align={{ offset: [8, 0] }}
                  title={
                    <span>
                      Also known as Zero processing, or passing off the fees to the customer. A cash
                      discount is when you post credit card prices and offer a discount on that
                      price for customers who pay with cash.
                    </span>
                  }
                >
                  <span>
                    <Icon name="info" color="light" />
                  </span>
                </Tooltip>
              </Flex>
              <Form.Item name="onCashDiscount" rules={[{ required: true }]}>
                <Radio.Group>
                  {[
                    "Yes, I'm on it",
                    "No, but I'm willing to go on it",
                    'Not sure what that is',
                    'Not interested',
                  ].map((item, idx) => (
                    <Radio key={idx} value={item} className={styles['additionalInfo_radio']}>
                      {item}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
            </div>

            <div className={styles['additionalInfo_checkbox-row']}>
              <label>Are you a franchise/franchisee?</label>
              <Form.Item name="franchise" rules={[{ required: true }]}>
                <Radio.Group>
                  {["Yes, I'm a franchise", "Yes, I'm a franchisee", 'Neither'].map((item, idx) => (
                    <Radio key={idx} value={item} className={styles['additionalInfo_radio']}>
                      {item}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
            </div>

            <div className={styles['additionalInfo_checkbox-row']}>
              <label>How many locations do you have?</label>
              <Form.Item name="locationsHave" rules={[{ required: true }]}>
                <InputNumber
                  size="large"
                  style={{ width: 160 }}
                  className={styles['additionalInfo_numberInput']}
                  controls={{
                    upIcon: (
                      <div style={{ width: 40 }}>
                        <Icon name="plus" size={16} />
                      </div>
                    ),
                    downIcon: (
                      <div style={{ width: 40 }}>
                        <Icon name="minus" size={16} />
                      </div>
                    ),
                  }}
                />
              </Form.Item>
            </div>

            <div className={styles['additionalInfo_checkbox-row']}>
              <label>How many stations do you currently have?</label>
              <Form.Item name="stationsHave" rules={[{ required: true }]}>
                <Radio.Group>
                  {['0-1', '2-4', '5+'].map((item, idx) => (
                    <Radio key={idx} value={item} className={styles['additionalInfo_radio']}>
                      {item}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
            </div>

            <div className={styles['additionalInfo_checkbox-row']}>
              <label>What point-of-sale system are you currently using?</label>
              <Form.Item name="usingPointOfSale" rules={[{ required: true }]}>
                <Input placeholder="Name of POS system" size="large" />
              </Form.Item>
            </div>

            <div className={styles['additionalInfo-form_button']}>
              <Button htmlType="submit" type="primary" loading={loading}>
                Submit
              </Button>
            </div>
          </>
        )}
      </BaseForm>
    </div>
  );
};
