import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Progress } from '@nextui-org/react';
import Button from './Button';
import AnswerEl from './AnswerEl';
import { basePadding } from '../styles/basePadding';
import { psychologicalQNA } from '../data/psychologicalTest';
import useFindTest from '../util/useFindTest';

const Box = styled.div`
  ${basePadding}
  padding-top: 4rem;
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
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const QuestionBox = () => {
  const testQNA = useFindTest(psychologicalQNA);

  const [questionIdx, setQuestionIdx] = useState<number>(0);
  const [questionsLen, setQuestionsLen] = useState<number>(0);

  useEffect(() => {
    if (testQNA?.questions) {
      setQuestionsLen(testQNA.questions.length);
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
          <AnswerEl key={idx} {...answer} />
        ))}
      </AnswerBox>
      <ButtonBox>
        <Button
          text="이전"
          onClick={() => questionIdx > 0 && setQuestionIdx(questionIdx - 1)}
        />
        <Button
          text={questionIdx === questionsLen - 1 ? '완료' : '다음'}
          onClick={() =>
            questionsLen &&
            questionIdx < questionsLen - 1 &&
            setQuestionIdx(questionIdx + 1)
          }
        />
      </ButtonBox>
    </Box>
  );
};

export default QuestionBox;