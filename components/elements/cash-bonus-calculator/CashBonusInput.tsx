import { Box, Col, Text } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/helpers';
import { Input } from '@nextui-org/react';
import React, { useCallback, useState } from 'react';

const CashInputItem = ({
  title,
  disable = false,
  value,
  placeHolder,
  setValue,
}: {
  title: string;
  disable?: boolean;
  value?: number;
  placeHolder?: string;
  setValue?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const onTextChange = useCallback(event => {
    const v = event.target.value.replace(/[^0-9]/g, '');
    if (v.length == 0) {
      setValue?.(-1);
    } else {
      setValue?.(parseInt(v));
    }
  }, []);
  return (
    <Col className="gap-3 p-4 md:p-6">
      <Text className="text-sm-semibold md:text-md-semibold">{title}</Text>
      <Input
        classNames={{
          inputWrapper: 'bg-transparent border-none shadow-none focus:bg-white hover:bg-white p-0',
          input: `text-4xl font-extrabold md:text-5xl ${
            placeHolder ? 'placeholder:text-neutral-300' : ''
          }`,
        }}
        startContent={<span className="heading-md md:heading-lg">$</span>}
        placeholder={placeHolder}
        disabled={disable}
        value={`${value != undefined && value >= 0 ? formatCurrency(value) : ''}`}
        onChange={onTextChange}
      />
    </Col>
  );
};

const CashBonusInput = ({ onClick }: { onClick?: () => void }) => {
  const [price, setPrice] = useState(-1);

  return (
    <>
      <Col className="bg-white rounded">
        <CashInputItem
          title="Input your average monthly credit card sales."
          value={price}
          setValue={setPrice}
          placeHolder="0"
        />
        <Box className=" h-[1px] bg-neutral-300 w-full" />
        <CashInputItem
          title="Your Cash Signing Bonus"
          disable
          value={price == -1 ? 0 : price / 100}
        />
      </Col>
      <Button
        onClick={onClick}
        size={'responsive'}
        className="mt-6 mb-10 md:w-full md:mb-0"
      >{`Request a quote`}</Button>
    </>
  );
};

export default CashBonusInput;
