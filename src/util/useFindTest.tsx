import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useFindTest = <T extends { id: string }>(arr: T[]): T | undefined => {
  const [selected, setSelected] = useState<T | undefined>(arr[0]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      const id = pathname.split('/condition/')[1];
      const test: T | undefined = arr.find((test: T) => test.id === id);
      setSelected(test);
    }
  }, [arr, pathname]);

  return selected;
};

export default useFindTest;
