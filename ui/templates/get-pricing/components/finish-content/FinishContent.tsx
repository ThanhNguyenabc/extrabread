import { Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import { EMAIL, PHONE } from '~/constants/index';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import styles from './FinishContent.module.scss';
const { Text, Link } = Typography;

export const FinishContent = () => {
  const { t } = useTranslation('questionnaire');
  return (
    <div className={styles.finishContent}>
      <Icon name="check-circle-solid" size={48} color="green" />

      <Heading level={4}> {t('all_done')}</Heading>

      <Text className="font-18-18-16 text-grey">{t('finish.desc')}</Text>

      <Text className="font-18-18-16 text-grey">{t('finish.any_question')}</Text>

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
