import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface QuestionProps {
  question: string;
  type?: string;
  placeholder?: string;
  textareaRows?: number;
  children?: ReactNode;
}

const Box = styled.div`
  font-size: inherit;
  padding-bottom: 2rem;

  > p {
    font-size: inherit;
    font-family: 'Pretendard-medium';
    font-weight: normal;
    margin-bottom: 1rem;
  }
`;
const inputText = css`
  width: 100%;
  font-size: 0.9em;
  border: 1px solid var(--sub);
  border-radius: 8px;
  padding: 1rem;
`;
export const BaseInput = styled.input`
  ${inputText}
`;
export const BaseTextarea = styled.textarea`
  ${inputText}
  resize: none;
`;

const QuestionInput = ({
  question,
  type,
  placeholder,
  textareaRows,
  children,
}: QuestionProps) => {
  return (
    <Box>
      <p>{question}</p>
      {!type ? (
        children
      ) : type === 'textarea' ? (
        <BaseTextarea placeholder={placeholder} rows={textareaRows} />
      ) : (
        <BaseInput type={type} placeholder={placeholder} />
      )}
    </Box>
  );
};

export default QuestionInput;
