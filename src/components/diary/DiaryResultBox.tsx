import ToReserveCard from '../ToReserveCard';
import ToConditionCard from '../ToConditionCard';
import DiaryResultCard from './DiaryResultCard';
import { OtherPages, ResultBox } from '../condition/ConditionResultBox';
import { useRecoilValue } from 'recoil';
import { diaryTextState } from '../../recoil/diary';
import { depressionKeywords } from '../../data/diaryKeywordData';

const DiaryResultBox = () => {
  const diaryText = useRecoilValue(diaryTextState);
  // 임시로직
  const depressionCheck = (text: string) => {
    return depressionKeywords.some((word) => text.includes(word));
  };
  return (
    <ResultBox>
      <DiaryResultCard />
      <OtherPages>
        <ToReserveCard
          keyword={depressionCheck(diaryText) ? 'depression' : 'health'}
        />
        <ToConditionCard />
      </OtherPages>
    </ResultBox>
  );
};

export default DiaryResultBox;
