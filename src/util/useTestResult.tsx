import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ResultCommon, ResultType } from '../data/psychologicalTest';
import useFindTest from './useFindTest';
import { formDataState } from '../recoil/reserve';
import { answerScoreState, answersState } from '../recoil/condition';

export interface TestResult {
  score: number;
  scoreArr: number[];
  common?: ResultCommon;
  type?: ResultType;
}

const useTestResult = (): TestResult => {
  const answers = useRecoilValue(answersState);
  const answerScore = useRecoilValue(answerScoreState);
  const { title, result } = useFindTest('result');

  const [score, setScore] = useState<number>(0);
  const [scoreArr, setScoreArr] = useState<number[]>([]);
  const [type, setType] = useState<ResultType>();
  const setFormData = useSetRecoilState(formDataState);

  useEffect(() => {
    if (result && answers && answerScore) {
      let tmpType: any;

      if (Array.isArray(result.types[0].score)) {
        let tmpScoreArr = result.types.map((type) =>
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
            ? result.types[result.types.length - 1]
            : result.types[tmpScoreArr.indexOf(max)];
      } else {
        let tmpScore = answers.reduce(
          (score, answerIdx) => score + answerScore[answerIdx],
          0
        );
        setScore(tmpScore);
        tmpType = result.types.find((type) => tmpScore <= type.score);
      }
      tmpType && setType(tmpType);
      setFormData((formData) => {
        return {
          ...formData,
          result: tmpType ? tmpType.title : '',
          type: title,
        };
      });
    }
  }, [result, answers, answerScore]);
  return { score, scoreArr, common: result?.common, type };
};

export default useTestResult;
