import { ConfigProvider, Form, Input, Radio, Space, Typography } from 'antd';
import variables from 'assets/styles/variables.module.scss';
import classNames from 'classnames';
import React, { FC, Fragment, useEffect, useMemo, useState } from 'react';
import { PatternFormat } from 'react-number-format';

import { US_STATE_CODE } from '@/constants/us-state-code';
import HtmlParser from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { US_MASK } from '~/constants/index';
import { useDevice } from '~/hooks/useDetectMobile';
import { Button } from '~/ui/atoms/button/Button';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import { ArrowCircleButton } from '~/ui/atoms/next-back-button/NextBackButton';
import { BaseForm } from '~/ui/organisms/base-form/BaseForm';
import { PhoneInput } from '~/ui/organisms/base-form/PhoneInput';
import { PricingBusinessList } from './BusinessList';
import styles from './GetPricing.module.scss';
import { AdditionalInfo } from './components/additional-info/AdditionalInfo';
import { ConfirmModal } from './components/confirm-modal/ConfirmModal';
import { ProcessBar } from './components/process-bar/ProcessBar';
import { FormValue } from './types';

const STATIONS = [
  {
    value: '0-2',
    img: '/images/1-stations.png',
  },
  {
    value: '2-3',
    img: '/images/2-stations.png',
  },
  {
    value: '5+',
    img: '/images/4-stations.png',
  },
];

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  onFinish?: (formValues: any) => void;
  softSubmit?: (formValues: any) => void;
};

const { infoBaseColor } = variables;
const { Text } = Typography;

export const FormContent: FC<Props> = ({ softSubmit, onFinish }) => {
  const { query } = useRouter();

  const { curStep, data } = query;

  const { t } = useTranslation('questionnaire');
  const { t: common } = useTranslation();
  const { isMobile } = useDevice();
  const [step, setStep] = useState(curStep ? Number(curStep) : 1);
  const [subStep2, setSubStep2] = useState(0);
  const [selectedBusiness, setBusiness] = useState<number | undefined>(undefined);
  const [form] = Form.useForm<{ name: string; age: number }>();
  const heardAbout = Form.useWatch('heardAbout', form);
  const [openConfirm, setOpenConfirm] = useState(false);

  const [answer, setAnswer] = useState<FormValue>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (step === 2 && !answer.lookingFor) {
      window.dataLayer.push({ event: 'getpricing_lookingfor' });
    } else if (step === 3) {
      window.dataLayer.push({ event: 'getpricing_filllead' });
    }
  }, [step]);

  useEffect(() => {
    if (data) {
      const formValues = JSON.parse((data as string) ?? '');
      setAnswer(formValues);
    }
  }, [data]);

  const STEPS = useMemo(() => {
    return [
      { ...t('steps.first', { returnObjects: true }) },
      { ...t('steps.second', { returnObjects: true }) },

      {
        tab: t('steps.third.tab'),
        label: <div className="text-center">{t('steps.third.label')}</div>,
      },
      { ...t('steps.fourth', { returnObjects: true }) },
    ] as Array<{ tab: string; label: string }>;
  }, [t]);

  return (
    <Fragment>
      {!curStep && (
        <ProcessBar activeIndex={step - 1} steps={STEPS} onGoBack={() => setStep(step - 1)} />
      )}
      {step === 1 && (
        <div className={styles['get-pricing_list']}>
          {!isMobile && <Text className="heading-display-sm">{t('type_of_business')}</Text>}
          <PricingBusinessList
            onClick={value => {
              setBusiness(value.index);
              setAnswer(preVal => ({
                ...preVal,
                typeBusiness: value.value,
              }));
              setTimeout(() => {
                setStep(2);
              }, 300);
            }}
            activeIndex={selectedBusiness}
          />
        </div>
      )}

      {step === 2 && (
        <div className={styles['get-pricing_list']}>
          {!isMobile && (
            <div className={styles['get-pricing_heading']}>
              <ArrowCircleButton onClick={() => setStep(1)} />
              <Heading level={5}>{HtmlParser(t('looking_for'))}</Heading>
              <div style={{ width: 40 }} />
            </div>
          )}
          <ConfigProvider
            theme={{
              hashed: true,
              token: {
                colorPrimaryHover: infoBaseColor,
              },
            }}
          >
            <div className={styles['get-pricing_form']}>
              {/* Capital button */}
              <Button
                onClick={() => {
                  setSubStep2(1);
                  setAnswer(preVal => ({
                    ...preVal,
                    stationsLookingFor: undefined,
                    lookingFor: t('cash_signing_bonus'),
                  }));
                }}
                className={classNames(subStep2 === 1 && styles['btn-selected'])}
              >
                {t('cash_signing_bonus')}
              </Button>
              {subStep2 === 1 && (
                <div className={styles['get-pricing_form-inner']}>
                  <Text>{HtmlParser(t('card_payment_fee'))}</Text>
                  <Space size={16}>
                    <Button
                      size="small"
                      color="black"
                      type="primary"
                      onClick={() => {
                        setAnswer(preVal => ({ ...preVal, cashBonus: '1' }));
                        setStep(3);
                      }}
                    >
                      {common('yes')}
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        setAnswer(preVal => ({ ...preVal, cashBonus: '0' }));
                        setStep(3);
                      }}
                    >
                      {common('no')}
                    </Button>
                  </Space>
                </div>
              )}
              <Button
                onClick={() => {
                  setStep(3);
                  setAnswer(preVal => ({
                    ...preVal,
                    cashBonus: undefined,
                    stationsLookingFor: undefined,
                    lookingFor: 'Zero processing fees',
                  }));
                }}
                className={classNames(subStep2 === 2 && styles['btn-selected'])}
              >
                {common('Zero Processing Fees')}
              </Button>

              <Button
                onClick={() => {
                  setSubStep2(3);
                  setAnswer(preVal => ({
                    ...preVal,
                    cashBonus: undefined,
                    lookingFor: common('point_of_sale_systems'),
                  }));
                }}
                className={classNames(subStep2 === 3 && styles['btn-selected'])}
              >
                {common('point_of_sale_systems')}
              </Button>

              {subStep2 === 3 && (
                <div className={styles['get-pricing_form-inner']}>
                  <Text>{t('question_for_stations')}</Text>
                  <div className={styles['get-pricing_point-of-sale']}>
                    {STATIONS.map((item, idx) => (
                      <Button
                        key={`${idx}`}
                        size="small"
                        onClick={() => {
                          setAnswer(preVal => ({
                            ...preVal,
                            stationsLookingFor: item.value,
                          }));
                          setStep(3);
                        }}
                        className={classNames(
                          answer.stationsLookingFor === item.value && styles['btn-selected'],
                          styles['btn'],
                        )}
                      >
                        <img src={item.img} />
                        <Text className="weight-600"> {`${item.value} ${common('stations')}`}</Text>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <Button
                onClick={() => {
                  setAnswer(preVal => ({
                    ...preVal,
                    cashBonus: undefined,
                    stationsLookingFor: undefined,
                    lookingFor: "Same day Funding",
                  }));
                  setStep(3);
                }}
                className={classNames(subStep2 === 4 && styles['btn-selected'])}
              >
                {`Same day Funding`}
              </Button>

              {/*  All of the above */}
              <Button
                onClick={() => {
                  setAnswer(preVal => ({
                    ...preVal,
                    cashBonus: undefined,
                    stationsLookingFor: undefined,
                    lookingFor: t('all_of_above'),
                  }));
                  setStep(3);
                }}
                className={classNames(subStep2 === 4 && styles['btn-selected'])}
              >
                {t('all_of_above')}
              </Button>
            </div>
          </ConfigProvider>
        </div>
      )}

      {step === 3 && (
        <div className={styles['get-pricing_list']}>
          {!isMobile && (
            <div className={styles['get-pricing_heading']}>
              <ArrowCircleButton onClick={() => setStep(2)} />
              <Heading level={5}>{t('follow_up_contact')}</Heading>
              <div style={{ width: 40 }} />
            </div>
          )}

          <BaseForm
            requiredMark={false}
            form={form}
            layout="vertical"
            className={styles['get-pricing_step-3-form']}
            onFinish={() => {
              setAnswer(prevVal => ({ ...prevVal, ...form.getFieldsValue() }));
              setOpenConfirm(true);
              softSubmit?.({ ...answer, ...form.getFieldsValue() });
            }}
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
              <Form.Item label={common('your_name')} name="name" rules={[{ required: true }]}>
                <Input placeholder="e.g. John" size="large" />
              </Form.Item>
              <Form.Item
                label={common('business_name')}
                name="business_name"
                rules={[{ required: true }]}
              >
                <Input placeholder="e.g. Burger King" size="large" />
              </Form.Item>
              <Form.Item
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
                <PatternFormat
                  customInput={PhoneInput}
                  placeholder="(___) ___-____"
                  format={US_MASK}
                />
              </Form.Item>
              <Form.Item
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
              <Form.Item label={common('website')} name="website" rules={[{ required: true }]}>
                <Input placeholder="e.g. extrabread.co" size="large" />
              </Form.Item>
              <Form.Item
                label={common('hear_about_us')}
                name="heardAbout"
                rules={[{ required: true }]}
              >
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
            <div style={{ textAlign: 'start' }}>
              <Button type="primary" htmlType="submit">
                <Flex align="center">
                  {common('continue')}
                  <Icon name="right" color="white" size={24} />
                </Flex>
              </Button>
            </div>
          </BaseForm>

          <ConfirmModal
            centered
            open={openConfirm}
            onContinue={() => {
              setStep(4);
              setOpenConfirm(false);
            }}
            onCancel={() => setOpenConfirm(false)}
          />
        </div>
      )}

      {step === 4 && (
        <div className={classNames(styles['get-pricing_list'], styles['get-pricing_step-4-form'])}>
          {!isMobile && (
            <div className={styles['get-pricing_heading']}>
              <ArrowCircleButton onClick={() => setStep(3)} />
              <Heading level={5}>{t('set_of_questions')}</Heading>
              <div style={{ width: 40 }} />
            </div>
          )}
          <AdditionalInfo
            onSubmit={values => {
              // setAnswer(prevVal => ({ ...prevVal, ...values }));
              onFinish?.({ ...answer, ...values });
            }}
          />
        </div>
      )}
    </Fragment>
  );
};
