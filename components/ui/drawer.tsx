import { useDevice } from '@/hooks/useDetectMobile';
import { Drawer, DrawerProps } from 'antd';
import React from 'react';

const BDrawer = ({ children, ...other }: DrawerProps) => {
  const { isLaptop, isTablet } = useDevice();
  return (
    <Drawer
      {...other}
      closeIcon={null}
      title={null}
      contentWrapperStyle={{
        width: (isTablet && 600) || (isLaptop && 768) || '100%',
      }}
      style={{
        zIndex: 1000,
      }}
    >
      {children}
    </Drawer>
  );
};

export default BDrawer;
