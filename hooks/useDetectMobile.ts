import { useEffect, useState } from 'react';

export const BreakPoints = {
  mobile: 751,
  tablet: 992,
  desktop: 1440,
};

export const useDevice = () => {
  const [breakPoint, setBreakPoint] = useState({
    isMobile: false,
    isLessTablet: false,
    isTablet: false,
    isLaptop: true,
    screenSize: window.innerWidth || 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setBreakPoint({
        isMobile: window.innerWidth < BreakPoints.mobile,
        isLessTablet: window.innerWidth <= BreakPoints.tablet,
        isTablet: window.innerWidth > BreakPoints.mobile && window.innerWidth <= BreakPoints.tablet,
        isLaptop: window.innerWidth > BreakPoints.tablet,
        screenSize: window.innerWidth,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakPoint;
};
