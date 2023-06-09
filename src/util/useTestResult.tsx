import { useEffect, useState } from 'react';
import { TestResultInfo, psychologicalResult } from '../data/psychologicalTest';
import useFindTest from './useFindTest';
import { useRecoilState } from 'recoil';
import { answerScoreState, answersState } from '../recoil';

const useTestResult = () => {
  const [answers, setAnswers] = useRecoilState(answersState);
  const [answerScore, setAnswerScore] = useRecoilState(answerScoreState);
  const resultObj = useFindTest<TestResultInfo>(psychologicalResult);

  const [score, setScore] = useState<number | number[]>(0);
  const [type, setType] = useState(resultObj?.result[0]);

  useEffect(() => {
    if (resultObj?.result) {
      let tmpScore: number | number[] = 0;
      let tmpType;

      if (Array.isArray(resultObj.result[0].score)) {
        tmpScore = resultObj.result.map((type) =>
          Array.isArray(type.score)
            ? type.score.reduce(
                (score, questionNum) =>
                  score + answerScore[answers[questionNum - 1]],
                0
              )
            : 0
        );
        tmpScore.pop();
        const max = Math.max(...tmpScore);
        tmpType =
          tmpScore.filter((score) => score === max).length === tmpScore.length
            ? resultObj.result[resultObj.result.length - 1]
            : resultObj.result[tmpScore.indexOf(max)];
      } else {
        tmpScore = answers.reduce(
          (score, answerIdx) => score + answerScore[answerIdx],
          0
        );
        tmpType = resultObj.result.find((el) => tmpScore <= el.score);
      }
      setScore(tmpScore);
      setType(tmpType);
      setAnswers([]);
      setAnswerScore([]);
    }
  }, [resultObj]);

  return { score, common: resultObj?.common, type };
};

export default useTestResult;
