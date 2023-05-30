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
  const { pathname } = useLocation();
  if (!pathname) return;
  const key = pathname.split('/condition/')[1];
  const test = {
    ...arr.find((test: Test) => test.key === key),
  };
  delete test.key;
  return test;
};

export default useFindTest;
