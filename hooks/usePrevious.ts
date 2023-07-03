import { useEffect, useRef } from 'react';

export const usePrevious = <T>(curVal: T) => {
  const prevVal = useRef<T>();

  useEffect(() => {
    prevVal.current = curVal;
  }, [curVal]);

  return prevVal.current;
};
