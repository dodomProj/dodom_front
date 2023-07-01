import ToReserveCard from '../ToReserveCard';
import ToConditionCard from '../ToConditionCard';
import DiaryResultCard from './DiaryResultCard';
import { OtherPages, ResultBox } from '../condition/ConditionResultBox';
import { useRecoilValue } from 'recoil';
import { diaryTextState } from '../../recoil/diary';
import { depressionKeywords } from '../../data/diaryKeywordData';
import ToPolicyCard from '../ToPolicyCard';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1.2;
`;

const DiaryResultBox = () => {
  const diaryText = useRecoilValue(diaryTextState);

  const depressionCheck = (text: string) => {
    return depressionKeywords.some((word) => text.includes(word));
  };
  return (
    <ResultBox direction="column">
      <OtherPages>
        <DiaryResultCard />
        <FlexBox>
          <ToReserveCard
            keyword={depressionCheck(diaryText) ? 'depression' : 'health'}
          />
          <ToConditionCard />
        </FlexBox>
      </OtherPages>

      <ToPolicyCard />
    </ResultBox>
  );
};

export default DiaryResultBox;
