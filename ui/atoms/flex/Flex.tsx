import classNames from 'classnames';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import styles from './Flex.module.scss';

type Props = PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    gap?: number;
    gapSp?: number;
    gapTb?: number;
    type?: 'block' | 'inline';
    className?: string;
    direction?: 'row' | 'column';
    align?: 'center' | 'start';
    justify?: 'center';
  }
>;

export const Flex: FC<Props> = ({
  children,
  gap = 8,
  gapSp,
  gapTb,
  className,
  justify,
  align = 'center',
  direction = 'row',
  type = 'block',
  ...props
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current && divRef.current.style.setProperty('--gap', `${gap}px`);
    divRef.current && divRef.current.style.setProperty('--gap-tb', `${gapTb ?? gap}px`);
    divRef.current && divRef.current.style.setProperty('--gap-sp', `${gapSp ?? gapTb ?? gap}px`);
  }, [divRef, gap, gapSp]);

  return (
    <div
      className={classNames(styles['flex'], 'flex', className)}
      style={{
        display: type === 'block' ? 'flex' : 'inline-flex',
        flexDirection: direction,
        alignItems: align === 'center' ? 'center' : 'flex-start',
        justifyContent: justify,
      }}
      ref={divRef}
      {...props}
    >
      {children}
    </div>
  );
};
