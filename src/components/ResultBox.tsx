import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ToDiaryCard from './ToDiaryCard';
import ToCounselCard from './ToCounselCard';
import ToConditionCard from './ToConditionCard';
import DiaryResultCard from './DiaryResultCard';
import ConditionResultCard from './ConditionResultCard';

const Box = styled.div`
  display: flex;
  gap: 1.5rem;

  > div {
    width: 50%;
  }
`;
const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const ResultBox = () => {
  const { pathname } = useLocation();
  return (
    <Box>
      {pathname.includes('diary') ? (
        <DiaryResultCard />
      ) : (
        <ConditionResultCard />
      )}
      <ColumnBox>
        <ToCounselCard />
        {pathname.includes('diary') ? <ToConditionCard /> : <ToDiaryCard />}
      </ColumnBox>
    </Box>
  );
};

export default ResultBox;
