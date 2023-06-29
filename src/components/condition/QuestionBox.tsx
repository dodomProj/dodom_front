import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import Button from '../Button';
import AnswerEl from './AnswerEl';
import ProgressBar from '../ProgressBar';
import { MainContent } from '../../styles/basePadding';
import { answerScoreState, answersState } from '../../recoil/condition';
import useFindTest from '../../util/useFindTest';

interface QuestionBoxProps {
  setStage: (stage: number) => void;
}

const Box = styled(MainContent)`
  padding-bottom: 2rem;

  > p {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;
const AnswerBox = styled.ul`
  display: flex;
  justify-content: center;
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
  const { qna } = useFindTest('qna');

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
    if (qna?.questions) {
      setQuestionsLen(qna.questions.length);
      setAnswersScore(qna.answers.map((answer) => answer.score));
      setAnswers([]);
    }
  }, [qna]);

  return (
    <Box>
      {qna && (
        <>
          <p>{qna.questions[questionIdx]}</p>
          <ProgressBar
            value={(questionIdx / questionsLen) * 100}
            size="sm"
            bgcolor="var(--secondary)"
            barcolor="var(--primary)"
          />
          <AnswerBox>
            {qna.answers.map((answer, idx) => (
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
                onClick={() =>
                  questionIdx > 0 && setQuestionIdx(questionIdx - 1)
                }
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
        </>
      )}
    </Box>
  );
};

export default QuestionBox;
