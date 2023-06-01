import styled from 'styled-components';
import ToDiaryCard from './ToDiaryCard';
import ToCounselCard from './ToCounselCard';
import ConditionResultCard from './ConditionResultCard';

export const ResultBox = styled.div`
  display: flex;
  gap: 1.5rem;

  > div {
    width: 50%;
  }
`;
export const OtherPages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const ConditionResultBox = () => {
  return (
    <ResultBox>
      <ConditionResultCard />
      <OtherPages>
        <ToCounselCard />
        <ToDiaryCard />
      </OtherPages>
    </ResultBox>
  );
};

export default ConditionResultBox;
