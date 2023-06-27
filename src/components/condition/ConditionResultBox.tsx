import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ToDiaryCard from '../ToDiaryCard';
import ToReserveCard from '../ToReserveCard';
import ConditionResultCard from './ConditionResultCard';

type Direction = {
  direction?: string;
};

export const ResultBox = styled.div<Direction>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 1.5rem;

  > div {
    width: 100%;
  }
`;
export const OtherPages = styled.div<Direction>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 1.8rem;

  > div {
    flex: 1;
  }
`;

const ConditionResultBox = () => {
  const { pathname } = useLocation();
  const [key, setKey] = useState<string>();

  useEffect(() => {
    if (pathname) {
      setKey(pathname.split('/condition/')[1]);
    }
  }, [pathname]);

  return (
    <ResultBox
      direction={key === 'communication-parent-child' ? 'row' : 'column'}
    >
      <ConditionResultCard test={key} />
      <OtherPages
        direction={key === 'communication-parent-child' ? 'column' : 'row'}
      >
        <ToReserveCard
          keyword={pathname.includes('depression') ? 'depression' : 'health'}
        />
        <ToDiaryCard />
      </OtherPages>
    </ResultBox>
  );
};

export default ConditionResultBox;
