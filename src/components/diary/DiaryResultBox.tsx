import ToCounselCard from '../ToCounselCard';
import ToConditionCard from '../ToConditionCard';
import DiaryResultCard from './DiaryResultCard';
import { OtherPages, ResultBox } from '../ConditionResultBox';

const DiaryResultBox = () => {
  return (
    <ResultBox>
      <DiaryResultCard />
      <OtherPages>
        <ToCounselCard />
        <ToConditionCard />
      </OtherPages>
    </ResultBox>
  );
};

export default DiaryResultBox;
