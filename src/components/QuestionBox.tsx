import styled from 'styled-components';
import { Progress } from '@nextui-org/react';
import AnswerEmoticon from './AnswerEmoticon';
import { basePadding } from '../styles/basePadding';

const Box = styled.div`
  ${basePadding}
  padding-top: 4rem;
  padding-bottom: 2rem;

  > p {
    font-size: 24px;
    font-weight: bold;
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
  justify-content: center;
  align-items: center;
  list-style: none;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionBox = () => {
  return (
    <Box>
      <p>1. 아침에 일어나는게 두렵다.</p>
      <ProgressStyle value={50} size="sm" color="warning" status="warning" />
      <AnswerBox>
        <AnswerEmoticon />
        <AnswerEmoticon />
        <AnswerEmoticon />
      </AnswerBox>
      <ButtonBox>
        <button>이전</button>
        <button>다음</button>
      </ButtonBox>
    </Box>
  );
};

export default QuestionBox;
