import { useState, useEffect } from 'react';
import SubtitleBox from '../components/common/SubtitleBox';
import QuestionBox from '../components/condition/QuestionBox';
import ResultContainer from '../components/common/ResultContainer';
import { PageBase } from '../styles/basePadding';
import useFindTest from '../util/useFindTest';

import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { reserveCardInfo } from '../recoil/reserve';

const ConditionCheck = () => {
  const testInfo = useFindTest('info');
  const [conditionStage, setConditionStage] = useState<number>(0);

  const setCardInfo = useSetRecoilState(reserveCardInfo);
  const resetCardInfo = useResetRecoilState(reserveCardInfo);
  useEffect(() => {
    resetCardInfo();
    setCardInfo({ ...testInfo.info, title: testInfo.title });
  }, [testInfo, setConditionStage, setCardInfo, resetCardInfo]);

  return (
    <PageBase>
      <SubtitleBox {...testInfo.info} title={testInfo.title} />
      {conditionStage === 0 ? (
        <QuestionBox setStage={setConditionStage} />
      ) : (
        <ResultContainer />
      )}
    </PageBase>
  );
};

export default ConditionCheck;
