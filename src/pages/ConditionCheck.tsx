import SubtitleBox from '../components/SubtitleBox';
import QuestionBox from '../components/QuestionBox';
import ResultContainer from '../components/ResultContainer';
import { PageBase } from '../styles/basePadding';
import { psychologicalTest } from '../data/psychologicalTest';
import useFindTest from '../util/useFindTest';

const ConditionCheck = () => {
  const testInfo = useFindTest(psychologicalTest);

  return (
    <PageBase>
      <SubtitleBox {...testInfo} />
      {/* <QuestionBox /> */}
      <ResultContainer />
    </PageBase>
  );
};

export default ConditionCheck;
