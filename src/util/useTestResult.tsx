import { useEffect, useState } from 'react';
import {
  ResultCommonInfo,
  ResultTypeInfo,
  TestResultInfo,
  psychologicalResult,
} from '../data/psychologicalTest';
import useFindTest from './useFindTest';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { answerScoreState, answersState } from '../recoil/condition';
import { formDataState } from '../recoil/reserve';

export interface TestResult {
  score: number;
  scoreArr: number[];
  common?: ResultCommonInfo;
  type?: ResultTypeInfo;
}

const useTestResult = (): TestResult => {
  const answers = useRecoilValue(answersState);
  const answerScore = useRecoilValue(answerScoreState);
  const resultObj = useFindTest<TestResultInfo>(psychologicalResult);

  const [score, setScore] = useState<number>(0);
  const [scoreArr, setScoreArr] = useState<number[]>([]);
  const [type, setType] = useState(resultObj?.result[0]);
  const setFormData = useSetRecoilState(formDataState);

  useEffect(() => {
    if (resultObj?.result && answers && answerScore) {
      let tmpType: any;

      if (Array.isArray(resultObj.result[0].score)) {
        let tmpScoreArr = resultObj.result.map((type) =>
          Array.isArray(type.score)
            ? type.score.reduce(
                (score, questionNum) =>
                  score + answerScore[answers[questionNum - 1]],
                0
              )
            : 0
        );
        tmpScoreArr.pop();
        setScoreArr(tmpScoreArr);
        const max = Math.max(...tmpScoreArr);
        tmpType =
          tmpScoreArr.filter((score) => score === max).length ===
          tmpScoreArr.length
            ? resultObj.result[resultObj.result.length - 1]
            : resultObj.result[tmpScoreArr.indexOf(max)];
      } else {
        let tmpScore = answers.reduce(
          (score, answerIdx) => score + answerScore[answerIdx],
          0
        );
        setScore(tmpScore);
        tmpType = resultObj.result.find((el) => tmpScore <= el.score);
      }
      setType(tmpType);
      setFormData((formData) => {
        return { ...formData, result: tmpType ? tmpType.title : '' };
      });
    }
  }, [resultObj, answers, answerScore]);
  return { score, scoreArr, common: resultObj?.common, type };
};

export default useTestResult;
