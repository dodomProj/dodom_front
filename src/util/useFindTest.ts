import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TestProps, psychologicalTest } from '../data/psychologicalTest';

const useFindTest = (key: string): TestProps => {
  const [selected, setSelected] = useState<TestProps>({ id: '', title: '' });
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      const id = pathname.split('/condition/')[1];
      const subject = psychologicalTest.find((test) => test.id === id);
      const newOne = { ...selected };
      if (subject) {
        newOne.id = subject.id;
        newOne.title = subject.title;
        newOne[key] = subject[key];
      }

      setSelected(newOne);
    }
  }, [key, pathname]);

  return selected;
};

export default useFindTest;
