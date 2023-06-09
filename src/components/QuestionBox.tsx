import { useEffect, useState } from 'react';
import { Progress } from '@nextui-org/react';
import styled from 'styled-components';
import Button from './Button';
import AnswerEl from './AnswerEl';
import { MainContent } from '../styles/basePadding';
import { TestQNAInfo, psychologicalQNA } from '../data/psychologicalTest';
import useFindTest from '../util/useFindTest';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { answerScoreState, answersState } from '../recoil';

interface QuestionBoxProps {
  setStage: (stage: number) => void;
}

const Box = styled(MainContent)`
  padding-bottom: 2rem;

  > p {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;
const ProgressStyle = styled(Progress)`
  background-color: var(--secondary);
  > div {
    background-color: var(--primary);
  }
`;
const AnswerBox = styled.ul`
  display: flex;
  max-width: 100%;
  justify-content: space-around;
  align-items: start;
  list-style: none;
  margin-top: 2rem;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const QuestionBox = ({ setStage }: QuestionBoxProps) => {
  const testQNA = useFindTest<TestQNAInfo>(psychologicalQNA);
  const setAnswersScore = useSetRecoilState(answerScoreState);
  const [answers, setAnswers] = useRecoilState(answersState);

  const [questionIdx, setQuestionIdx] = useState<number>(0);
  const [questionsLen, setQuestionsLen] = useState<number>(0);

  const setAnswer = (answerIdx: number) => {
    const result = answers.slice();
    result[questionIdx] = answerIdx;
    setAnswers(result);
  };

  useEffect(() => {
    if (testQNA?.questions) {
      setQuestionsLen(testQNA.questions.length);
      setAnswersScore(testQNA.answers.map((answer) => answer.score));
    }
  }, [testQNA]);

  return (
    <Box>
      <p>{testQNA?.questions && testQNA?.questions[questionIdx]}</p>
      <ProgressStyle
        value={((questionIdx + 1) / questionsLen) * 100}
        size="sm"
        color="warning"
        status="warning"
      />
      <AnswerBox>
        {testQNA?.answers?.map((answer, idx) => (
          <AnswerEl
            key={idx}
            img={answer.img}
            text={answer.text}
            setAnswer={() => setAnswer(idx)}
            selected={answers[questionIdx] === idx}
          />
        ))}
      </AnswerBox>
      <ButtonBox>
        {!!questionIdx && (
          <Button
            text="이전"
            onClick={() => questionIdx > 0 && setQuestionIdx(questionIdx - 1)}
          />
        )}
        <Button
          text={questionIdx === questionsLen - 1 ? '결과보기' : '다음'}
          onClick={
            questionsLen && questionIdx < questionsLen - 1
              ? () => setQuestionIdx(questionIdx + 1)
              : () => setStage(1)
          }
          isEmpty={answers[questionIdx] === undefined}
        />
      </ButtonBox>
    </Box>
  );
};

export default QuestionBox;
