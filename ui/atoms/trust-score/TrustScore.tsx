import { Typography } from 'antd';
import { NewRate } from '../new-rate/NewRate';
import styles from './TrustScore.module.scss';

interface Props {
  score: number;
}

export const TrustpilotText = () => (
  <Typography.Text
    strong
    style={{
      color: '#050505',
      marginLeft: 2,
      lineHeight: '26px',
    }}
  >
    Trustpilot
  </Typography.Text>
);

export const TrustScore = ({ score }: Props) => {
  return (
    <div className={styles['trustScore']}>
      <div className="flex">
        <img src="/images/color-icons/star-solid.png" width={20} height={20} />
        <TrustpilotText />
      </div>
      <NewRate value={score} size={24} gutter={4} />
      <Typography.Text className={styles['trustScore-text']}>TrustScore {score}</Typography.Text>
    </div>
  );
};
