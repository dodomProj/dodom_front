import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useFindTest = <T extends { key: string }>(arr: T[]): T | undefined => {
  const [selected, setSelected] = useState<T | undefined>(arr[0]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      const key = pathname.split('/condition/')[1];
      const test: T | undefined = arr.find((test: T) => test.key === key);
      setSelected(test);
    }
  }, [arr, pathname]);

  return selected;
};

export default useFindTest;
