import { BreadButtonProps, Button } from '../button/Button';
import { Flex } from '../flex/Flex';
import { Icon } from '../icon/Icon';
import styles from './NextBackButton.module.scss';

type Props = {
  disabledBack?: boolean;
  disabledNext?: boolean;
  onBack?: VoidFunction;
  onNext?: VoidFunction;
};

type ArrowCircleButtonProps = BreadButtonProps & {
  direction?: 'left' | 'right';
};

export const ArrowCircleButton = ({ direction = 'left', ...props }: ArrowCircleButtonProps) => (
  <Button shape="circle" size="small" icon={<Icon name={direction as any} />} {...props} />
);

export const NextBackButton = (props: Props) => {
  return (
    <Flex gap={16} className={styles['next-back-button']}>
      <ArrowCircleButton onClick={props.onBack} disabled={props.disabledBack} direction="left" />
      <ArrowCircleButton onClick={props.onNext} disabled={props.disabledNext} direction="right" />
    </Flex>
  );
};
