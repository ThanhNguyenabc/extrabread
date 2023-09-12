import { Typography } from 'antd';
import { EMAIL, PHONE } from '~/constants/index';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import styles from './FinishContent.module.scss';
const { Text, Link } = Typography;

export const FinishContent = () => {
  return (
    <div className={styles.finishContent}>
      <Icon name="check-circle-solid" size={48} color="green" />

      <Heading level={4}>All done!</Heading>

      <Text className="font-18-18-16 text-grey">
        We have all the information we need to prepare an offer for you. Our team will be in touch
        within 24 hours.
      </Text>

      <Text className="font-18-18-16 text-grey">
        If you have any urgent questions or concerns, please don&#39;t hesitate to reach out to us.
      </Text>

      <Flex gap={16} gapSp={8} className={styles.finishContentContact}>
        <Flex gapSp={8}>
          <Icon name="phone" color="green-active" />
          <Link strong href={`tel:${PHONE}`}>
            {PHONE}
          </Link>
        </Flex>
        <Text>or</Text>
        <Flex gapSp={8}>
          <Icon name="mail" color="green-active" />
          <Link strong href={`mailto:${EMAIL}`}>
            {EMAIL}
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};
