import { useState, useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import SubtitleBox from '../components/SubtitleBox';
import QuestionBox from '../components/condition/QuestionBox';
import ResultContainer from '../components/ResultContainer';
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
  }, [testInfo]);
  return (
    <PageBase>
      <SubtitleBox {...testInfo.info} title={testInfo.title} />
      {conditionStage === 0 ? (
        <QuestionBox setStage={setConditionStage} />
      ) : (
        <ResultContainer />
      )}
      {/* <LoadingBox
        title="검사가 완료되었습니다 :)"
        text="검사 결과를 로딩중이니 잠시만 기다려주세요!"
      /> */}
    </PageBase>
  );
};

export default ConditionCheck;
