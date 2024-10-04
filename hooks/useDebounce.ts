import debounce from 'lodash/debounce';
import React, { useCallback } from 'react';

const useDebounce = (
  handleFn: (value: any) => void,
  dependecies: Array<any> = [],
  time?: number,
) => {
  return useCallback(
    debounce(value => {
      handleFn && handleFn(value);
    }, time || 350),
    dependecies,
  );
};

export default useDebounce;
