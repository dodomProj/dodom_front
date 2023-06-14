import { ReactNode, FocusEvent } from 'react';
import styled, { css } from 'styled-components';

interface QuestionProps {
  question: string;
  type?: string;
  placeholder?: string;
  placeholderColor?: string;
  textareaRows?: number;
  children?: ReactNode;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}
interface InputProps {
  placeholdercolor?: string;
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
const inputText = css<InputProps>`
  width: 100%;
  font-size: 0.9em;
  border: 1px solid var(--sub);
  border-radius: 8px;
  padding: 1rem;

  ::placeholder {
    color: ${(props) => props.placeholdercolor || 'var(--sub3)'};
  }
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
  placeholderColor,
  textareaRows,
  children,
  onBlur,
}: QuestionProps) => {
  return (
    <Box>
      <p>{question}</p>
      {type &&
        (type === 'textarea' ? (
          <BaseTextarea
            rows={textareaRows}
            placeholder={placeholder}
            onBlur={onBlur}
            placeholdercolor={placeholderColor}
          />
        ) : (
          <BaseInput
            type={type}
            placeholder={placeholder}
            onBlur={onBlur}
            placeholdercolor={placeholderColor}
          />
        ))}
      {children && children}
    </Box>
  );
};

export default QuestionInput;
