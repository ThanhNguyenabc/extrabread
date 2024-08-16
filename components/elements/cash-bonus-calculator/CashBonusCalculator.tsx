import { Col, Heading, Text } from '@/components/ui';
import Hero from '@/components/ui/hero';
import React, { PropsWithChildren } from 'react';

const CashBonusCalculator = ({ children }: PropsWithChildren) => {
  return (
    <Hero className="flex flex-col gap-4 md:flex-row md:gap-10">
      <Col className="flex-1 gap-4 md:gap-6">
        <Heading level="3" className="heading-xs text-center md:heading-lg md:text-start">
          {`Cash Signing Bonus Calculator`}
        </Heading>
        <Text type="paragraph" className="whitespace-pre-line text-neutral-700 md:text-lg">
          {`At ExtraBread, we go the extra mile by offering a generous cash signing bonus depending on your businesses’ yearly credit card sales.\n
No strings attached, no interests, contracts, or hidden fees involved. Swipe to input your businesses’ yearly credit card sales and see how much you could potentially earn!`}
        </Text>
      </Col>
      {children}
    </Hero>
  );
};

export default CashBonusCalculator;
