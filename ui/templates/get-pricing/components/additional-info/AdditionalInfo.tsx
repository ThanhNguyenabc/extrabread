import { Form, Input, InputNumber, Radio, Tooltip } from 'antd';
import { useTranslation } from 'next-i18next';
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
  const { t } = useTranslation('questionnaire');
  const { t: common } = useTranslation();

  const [form] = Form.useForm<FormValue>();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue({
      price: 50,
      onCashDiscount: t('on_cash_discount'),
      franchise: t('franchise'),
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
              {common('continue')}
              <Icon name="down" color="white" size={24} />
            </Flex>
          </Button>
        )}

        {showForm && (
          <>
            <div className={styles['additionalInfo_checkbox-row']}>
              <Flex>
                <label>{t('cash_discount')}</label>
                <Tooltip
                  arrow
                  placement="right"
                  overlayClassName={styles['additionalInfo_tooltip']}
                  align={{ offset: [8, 0] }}
                  title={<span>{t('cash_discount_desc')}</span>}
                >
                  <span>
                    <Icon name="info" color="light" />
                  </span>
                </Tooltip>
              </Flex>
              <Form.Item name="onCashDiscount" rules={[{ required: true }]}>
                <Radio.Group>
                  {(t('cash_discount_questions', { returnObjects: true }) as string[])?.map(
                    (item, idx) => (
                      <Radio key={idx} value={item} className={styles['additionalInfo_radio']}>
                        {item}
                      </Radio>
                    ),
                  )}
                </Radio.Group>
              </Form.Item>
            </div>

            <div className={styles['additionalInfo_checkbox-row']}>
              <label>{t('franchise_heading')}</label>
              <Form.Item name="franchise" rules={[{ required: true }]}>
                <Radio.Group>
                  {(t('franchise_questions', { returnObjects: true }) as string[])?.map(
                    (item, idx) => (
                      <Radio key={idx} value={item} className={styles['additionalInfo_radio']}>
                        {item}
                      </Radio>
                    ),
                  )}
                </Radio.Group>
              </Form.Item>
            </div>

            <div className={styles['additionalInfo_checkbox-row']}>
              <label>{t('location_question')}</label>
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
              <label> {t('station_question')}</label>
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
              <label>{t('sale_system_question')}</label>
              <Form.Item name="usingPointOfSale" rules={[{ required: true }]}>
                <Input placeholder={t('name_of_pos')} size="large" />
              </Form.Item>
            </div>

            <div className={styles['additionalInfo-form_button']}>
              <Button htmlType="submit" type="primary" loading={loading}>
                {common('submit')}
              </Button>
            </div>
          </>
        )}
      </BaseForm>
    </div>
  );
};
