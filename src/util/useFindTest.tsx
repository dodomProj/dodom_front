import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type Test = {
  key?: string;
  title?: string;
  text?: string[];
  img?: string;
  time?: number;
  questions?: string[];
  answers?: {
    img: string;
    text: string;
    score: number;
  }[];
};

const useFindTest = (arr: Test[]): Test | undefined => {
  const [selected, setSelected] = useState<Test>();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      const key = pathname.split('/condition/')[1];
      const test = {
        ...arr.find((test: Test) => test.key === key),
      };
      delete test.key;
      setSelected(test);
    }
  }, [arr, pathname]);
  return selected;
};

export default useFindTest;
