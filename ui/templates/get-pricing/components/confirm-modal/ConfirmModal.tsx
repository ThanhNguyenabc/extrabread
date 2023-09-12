import { Modal, ModalProps, Typography } from 'antd';
import { useEffect } from 'react';
import { EMAIL, PHONE } from '~/constants/index';
import { Button } from '~/ui/atoms/button/Button';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import styles from './ConfirmModal.module.scss';
const { Text, Link } = Typography;

type Props = ModalProps & {
  onContinue?: VoidFunction;
};

export const ConfirmModal = ({ onContinue, ...props }: Props) => {
  useEffect(() => {
    props.open && window.dataLayer.push({ event: 'getpricing_leadsubmitted' });
  }, [props.open]);

  return (
    <Modal
      {...props}
      rootClassName={styles['confirm-modal']}
      width={608}
      closable={false}
      footer={false}
    >
      <div className={styles['confirm-modal_inner']}>
        <Flex direction="column" gap={16}>
          <Heading level={4}>
            Great! We&#39;ve received <br className="only-sp" /> your initial information.
          </Heading>

          <Text className="font-18 text-grey">
            To speed up the process and receive a direct quote, you can either complete the next
            part (only 6 questions) or schedule a call with us at your convenience.
          </Text>
        </Flex>

        <Flex direction="column" gap={16}>
          <Button block type="primary" onClick={onContinue}>
            <Flex type="inline">
              Continue to Proceed Quotation
              <Icon name="right" color="white" />
            </Flex>
          </Button>
          <Button
            block
            href="https://calendly.com/info-11061234/consultation?month=2023-06"
            target="_blank"
          >
            <Flex type="inline">
              Schedule a Call
              <Icon name="calendar" />
            </Flex>
          </Button>
        </Flex>

        <Flex direction="column" gap={16} className="hide-tb">
          <Text className="text-grey">
            If you would like to learn more, feel free to contact us at
          </Text>
          <Flex gap={16}>
            <Flex gap={0}>
              <Icon name="phone" color="green-active" />
              <Link strong href={`tel:${PHONE}`}>
                {PHONE}
              </Link>
            </Flex>
            <Text>or</Text>
            <Flex>
              <Icon name="mail" color="green-active" />
              <Link strong href={`mailto:${EMAIL}`}>
                {EMAIL}
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </Modal>
  );
};
