import ToReserveCard from '../ToReserveCard';
import ToConditionCard from '../ToConditionCard';
import DiaryResultCard from './DiaryResultCard';
import { OtherPages, ResultBox } from '../condition/ConditionResultBox';

const DiaryResultBox = () => {
  return (
    <ResultBox>
      <DiaryResultCard />
      <OtherPages>
        <ToReserveCard />
        <ToConditionCard />
      </OtherPages>
    </ResultBox>
  );
};

export default DiaryResultBox;
