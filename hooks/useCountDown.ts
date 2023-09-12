import { useEffect, useState } from 'react';

export const useCountDown = (start: number) => {
  const [counter, setCounter] = useState(start);
  useEffect(() => {
    if (counter === 0) return;
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
  }, [counter]);
  return counter;
};
