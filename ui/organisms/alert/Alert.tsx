import { NotificationIcon } from '~/ui/img-resource/ImageResources';
import styles from './Alert.module.scss';

export const Alert = () => {
  return (
    <div className={styles.alert}>
      <NotificationIcon />
      <span>Cash Signing Bonus & Free POS system</span>
    </div>
  );
};
