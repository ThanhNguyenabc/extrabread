import { Button } from '@/ui/atoms/button/Button';
import { Flex } from '@/ui/atoms/flex/Flex';
import { Heading } from '@/ui/atoms/heading/Heading';
import { Icon } from '@/ui/atoms/icon/Icon';
import { Modal, Typography } from 'antd';
import Image from 'next/image';
import HowYaDoin from 'public/images/speak-bubble.png';
import { useState } from 'react';
import styles from './HowYaModal.module.scss';
const { Text } = Typography;

export const HowYaModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <Modal
      rootClassName={styles.howYaModal}
      open={open}
      width={544}
      footer={null}
      closable={false}
      style={{ top: 118 }}
    >
      <Image
        quality={100}
        src={HowYaDoin}
        width={238}
        alt="speak-bubble"
        className={styles['howYaModal_bubble']}
      />
      <div className={styles['howYaModal_inner']}>
        <Flex direction="column" align="start">
          <Text strong className="text-primary">
            Mo Bread Mo Semolini
          </Text>
          <Heading level={5} className={styles['howYaModal_heading']}>
            Extrabread has you covered with
          </Heading>
        </Flex>

        <ul>
          <li>Premium POS Systems at a great discount</li>
          <li>0% Processing Fees</li>
          <li>Cash Signing Bonus</li>
        </ul>

        <Flex gap={12} gapSp={8} align="start">
          <Icon name="light-bulb" color="green" size={24} style={{ flexShrink: 0 }} />
          <Text className="text-primary font-16-14" strong>
            Plus an extra $1,000 bonus to get rid of that outfit you&apos;re wearing. How Ya Doing!
          </Text>
        </Flex>

        <Button
          type="primary"
          size="large"
          onClick={() => {
            setOpen(false);
          }}
        >
          Get Started Now
        </Button>
      </div>
    </Modal>
  );
};
