/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, Typography } from 'antd';
import classNames from 'classnames';
import React, { FC, useRef, useState } from 'react';
import { useDevice } from '~/hooks/useDetectMobile';
import { Icon } from '~/ui/atoms/icon/Icon';
import styles from './ProcessBar.module.scss';
const { Text } = Typography;

type Props = {
  activeIndex?: number;
  steps: {
    tab: string;
    label: React.ReactNode;
  }[];
  onGoBack: VoidFunction;
};

export const ProcessBar: FC<Props> = ({ activeIndex = 0, steps, onGoBack }) => {
  const { isMobile } = useDevice();
  const [openPopup, setOpenPopup] = useState(false);
  const toggleBtnRef = useRef<HTMLElement>(null);

  return (
    <>
      <div className={styles.processBar}>
        {steps.map((item, idx) => (
          <div
            key={idx}
            className={classNames(
              styles['processBar-item'],
              activeIndex >= idx && styles['processBar-item--active'],
            )}
          >
            <Text
              className={classNames(activeIndex === idx && styles['processBar-item-text--active'])}
            >
              {item.tab}
            </Text>
          </div>
        ))}
      </div>
      {isMobile && (
        <>
          <div className={styles['processBar-header']}>
            {activeIndex > 0 ? (
              <Button
                shape="circle"
                type="text"
                onClick={onGoBack}
                style={{ width: 56, height: 56 }}
                icon={<Icon name="left" />}
              />
            ) : (
              <div style={{ width: 56 }} />
            )}

            <Text>{steps[activeIndex].label}</Text>

            <div
              className={classNames(
                styles['processBar-btn'],
                openPopup && styles['processBar-btn--active'],
              )}
              onClick={() => setOpenPopup(prevVal => !prevVal)}
            >
              <Button
                shape="circle"
                type="text"
                ref={toggleBtnRef}
                icon={<Icon name="list" />}
                style={{ width: 56, height: 56 }}
              />
            </div>
          </div>

          {openPopup && (
            <div
              className={styles['processBar-popup']}
              // @ts-ignore
              style={{ top: toggleBtnRef.current?.getBoundingClientRect()?.bottom + 12 }}
            >
              <div className={styles['processBar-steps']}>
                {steps.map((item, idx) => (
                  <div
                    key={idx}
                    className={classNames(
                      styles['processBar-step'],
                      activeIndex >= idx && styles['processBar-step--pass'],
                      activeIndex === idx && styles['processBar-step--active'],
                      activeIndex < idx && styles['processBar-step--inactive'],
                    )}
                  >
                    <Text>{item.label}</Text>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
