import { Col, Heading, Text } from '@/components/ui';
import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import Slider from '@/components/ui/slider';
import { useDevice } from '@/hooks/useDetectMobile';
import { Input } from '@nextui-org/react';
import { Row } from 'antd';
import React, { useState } from 'react';

const Styles = {
  input: {
    label: 'font-semibold flex-1 md:text-base',
    inputWrapper: 'flex-1 border-neutral-300 md:text-base lg:w-[200px]',
    input: 'placeholder:text-neutral-600 p-1 h-12 text-base',
  },
  slider: {
    labelStyle: 'mt-3 justify-between text-neutral-600 text-small',
    classNames: {
      trackWrapper: 'h-2 bg-neutral-300 rounded-lg',
      track: 'h-2',
      thumb: 'w-8 h-8',
    },
  },
};

const calculateMonthlyFee = (amount: number, percentage: number) => {
  const fee = (amount * percentage) / 100;
  return Math.round(fee * 100) / 100;
};

const CreditCardCalculator = () => {
  const { isLaptop } = useDevice();
  const [data, setData] = useState<{ percentageTransaction: number; transactionAmount: number }>({
    percentageTransaction: 0,
    transactionAmount: 0,
  });

  const monthlyFee = calculateMonthlyFee(data.transactionAmount, data.percentageTransaction);
  const creditCardFee = Math.round(monthlyFee * 0.03 * 100) / 100;
  const keepingFee = Math.round(creditCardFee * 12 * 100) / 100;

  return (
    <Hero className="flex flex-col gap-4 md:flex-row md:gap-20">
      <Col className="flex-1 w-full gap-10 ">
        <Col className="gap-4 md:gap-6">
          <Heading level="3" className="heading-sm text-start md:heading-lg">
            {`How much can you save in credit card processing fees?`}
          </Heading>
          <Text type="paragraph" className="whitespace-pre-line text-base text-neutral-600">
            {`We won't surprise you with hidden fees. Extrabread keeps it clear and upfront. Ask about our Cash Discount program to avoid credit card processing fees.`}
          </Text>
        </Col>

        <Col className="gap-6 md:gap-10">
          <Input
            label="Average monthly transaction amount"
            placeholder="0"
            labelPlacement={!isLaptop ? 'outside' : 'outside-left'}
            startContent="$"
            value={data.transactionAmount.toString()}
            variant="bordered"
            classNames={Styles.input}
            onChange={event => {
              const str = event.target.value.replace(/[^\d]/g, '') ?? '0';
              setData(prev => ({ ...prev, transactionAmount: Number(str) }));
            }}
          />
          <Col className="gap-4">
            <Input
              label="What percentage of your transactions are card payments?"
              placeholder="0"
              labelPlacement="outside-left"
              startContent="$"
              variant="bordered"
              value={data.percentageTransaction.toString()}
              readOnly
              classNames={{
                ...Styles.input,
                inputWrapper: 'border-neutral-300 w-[80px]',
              }}
            />
            <Slider
              minValue={0}
              maxValue={100}
              leftLabel="0%"
              rightLabel="100%"
              labelStyle={Styles.slider.labelStyle}
              classNames={Styles.slider.classNames}
              onChange={event =>
                setData(prev => ({ ...prev, percentageTransaction: event as number }))
              }
            />
          </Col>
        </Col>
      </Col>
      <Col className="border border-neutral-300 bg-neutral-100 rounded-2xl p-6 md:p-20 gap-10 md:w-[50%] md:gap-20">
        <Col>
          {[
            {
              title: 'Monthly  Credit card sales',
              value: monthlyFee,
            },
            { title: 'Credit Card Fees', value: creditCardFee },
          ].map(item => (
            <Row
              key={item.title}
              className="text-sm-semibold flex-1 border-b-1 py-2 border-neutral-300 justify-between md:p-4 md:text-medium "
            >
              <Text className="md:font-normal">{item.title}</Text>
              <Text>${item.value}</Text>
            </Row>
          ))}
        </Col>
        <Col className="md:gap-4">
          <Text className="text-md-semibold md:text-xl">Amount you save annually</Text>
          <Text className="heading-lg md:heading-xl">${keepingFee}</Text>
        </Col>
        <Col className="gap-4">
          <Button className="md:w-full">{`Lower your Fees Today`}</Button>
          <Text className=" text-xs text-neutral-600">
            {`*The values displayed are estimations only based on the data you provide and do not
          constitute an offer or guarantee of any kind. The estimated amount you keep does not
          include taxes or other deductions.`}
          </Text>
        </Col>
      </Col>
    </Hero>
  );
};

export default CreditCardCalculator;
