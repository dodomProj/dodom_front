import ToReserveCard from '../ToReserveCard';
import ToConditionCard from '../ToConditionCard';
import DiaryResultCard from './DiaryResultCard';
import { OtherPages, ResultBox } from '../ConditionResultBox';

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
