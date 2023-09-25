import { ConfigProvider, Form, Input, Radio, Space, Typography } from 'antd';
import variables from 'assets/styles/variables.module.scss';
import classNames from 'classnames';
import React, { FC, Fragment, useEffect, useState } from 'react';
import { PatternFormat } from 'react-number-format';

import { US_STATE_CODE } from '@/constants/us-state-code';
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
    label: '0-2 station',
    value: '0-2',
    img: '/images/1-stations.png',
  },
  {
    label: '2-3 stations',
    value: '2-3',
    img: '/images/2-stations.png',
  },
  {
    label: '5+ stations',
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

const STEPS = [
  { tab: 'Type of business', label: 'What type of business?' },
  { tab: 'What are you looking for?', label: 'What are you looking for?' },
  {
    tab: 'Contact Information',
    label: (
      <div className="text-center">
        We need your contact <br className="hide-pc" /> to follow up
      </div>
    ),
  },
  { tab: 'Additional info', label: 'Final set of questions' },
];

export const FormContent: FC<Props> = ({ softSubmit, onFinish }) => {
  const { isMobile } = useDevice();
  const [step, setStep] = useState(1);
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

  return (
    <Fragment>
      <ProcessBar activeIndex={step - 1} steps={STEPS} onGoBack={() => setStep(step - 1)} />
      {step === 1 && (
        <div className={styles['get-pricing_list']}>
          {!isMobile && <Text className="heading-display-sm">What type of business?</Text>}
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
              <Heading level={5}>
                What are you <br className="only-sp" /> looking for?
              </Heading>
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
                    lookingFor: 'Cash signing bonus',
                  }));
                }}
                className={classNames(subStep2 === 1 && styles['btn-selected'])}
              >
                Cash signing bonus
              </Button>
              {subStep2 === 1 && (
                <div className={styles['get-pricing_form-inner']}>
                  <Text>
                    Are you currently passing your card payments fees to the customer?{' '}
                    <br className="hide-pc" /> (cash discount program)
                  </Text>
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
                      Yes
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        setAnswer(preVal => ({ ...preVal, cashBonus: '0' }));
                        setStep(3);
                      }}
                    >
                      No
                    </Button>
                  </Space>
                </div>
              )}
              {/* Residual-current device (RCD) button */}
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
                Zero processing fees
              </Button>

              {/* Point-of-sale system button */}
              <Button
                onClick={() => {
                  setSubStep2(3);
                  setAnswer(preVal => ({
                    ...preVal,
                    cashBonus: undefined,
                    lookingFor: 'Point-of-sale system',
                  }));
                }}
                className={classNames(subStep2 === 3 && styles['btn-selected'])}
              >
                Point-of-sale system
              </Button>

              {subStep2 === 3 && (
                <div className={styles['get-pricing_form-inner']}>
                  <Text>How many stations are you looking for?</Text>
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
                        <Text className="weight-600">{item.label}</Text>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/*  All of the above */}
              <Button
                onClick={() => {
                  setAnswer(preVal => ({
                    ...preVal,
                    cashBonus: undefined,
                    stationsLookingFor: undefined,
                    lookingFor: 'All of the above',
                  }));
                  setStep(3);
                }}
                className={classNames(subStep2 === 4 && styles['btn-selected'])}
              >
                All of the above
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
              <Heading level={5}>
                We need your contact <br className="hide-pc" /> to follow up
              </Heading>
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
              <Form.Item label="Your name" name="name" rules={[{ required: true }]}>
                <Input placeholder="e.g. John" size="large" />
              </Form.Item>
              <Form.Item label="Business name" name="business_name" rules={[{ required: true }]}>
                <Input placeholder="e.g. Burger King" size="large" />
              </Form.Item>
              <Form.Item
                label="Phone Number"
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
                  placeholder="(___) ___-____"
                  format={US_MASK}
                />
              </Form.Item>
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
                <Input placeholder="email@example.com" size="large" />
              </Form.Item>
              <Form.Item label="Website" name="website" rules={[{ required: true }]}>
                <Input placeholder="e.g. extrabread.co" size="large" />
              </Form.Item>
              <Form.Item
                label="How did you hear about us?"
                name="heardAbout"
                rules={[{ required: true }]}
              >
                <Radio.Group>
                  <Radio value={'Lil Mo'}>Lil Mo</Radio>
                  <Radio value={'BestPOS'}>BestPOS</Radio>
                  <Radio value={'Referral'}>Referral</Radio>
                  <Radio value={'Other'}>Other</Radio>
                </Radio.Group>
              </Form.Item>
              {heardAbout === 'Other' && (
                <Form.Item name="other" rules={[{ required: true }]}>
                  <Input placeholder="Please specify" size="large" />
                </Form.Item>
              )}
            </ConfigProvider>
            <div style={{ textAlign: 'start' }}>
              <Button type="primary" htmlType="submit">
                <Flex align="center">
                  Continue
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
              <Heading level={5}>Final set of questions</Heading>
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
