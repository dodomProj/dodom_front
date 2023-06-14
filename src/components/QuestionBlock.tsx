import styled from 'styled-components';
import { questionStyle } from '../components/QuestionInput';
import { ReactNode } from 'react';

interface QuestionBlockProps {
  question: string;
  children: ReactNode;
}

const Box = styled.div`
  font-size: inherit;
`;

const QuestionTitle = styled.p`
  ${questionStyle}
`;

const QuestionBlock = ({ question, children }: QuestionBlockProps) => {
  return (
    <Box>
      <QuestionTitle>{question}</QuestionTitle>
      {children}
    </Box>
  );
};

export default QuestionBlock;
