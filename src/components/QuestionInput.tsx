import { ReactNode, FocusEvent } from 'react';
import styled, { css } from 'styled-components';

interface QuestionProps {
  question: string;
  type: string;
  id: string;
  onBlur: (e: FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  placeholder?: string;
  placeholderColor?: string;
  textareaRows?: number;
  children?: ReactNode;
}
interface InputProps {
  placeholdercolor?: string;
}

const Box = styled.div`
  font-size: inherit;
`;
export const questionStyle = css`
  font-size: inherit;
  margin-bottom: 1rem;
`;
const Label = styled.label`
  display: block;
  ${questionStyle}
`;
const inputStyle = css<InputProps>`
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
  ${inputStyle}
`;
export const BaseTextarea = styled.textarea`
  ${inputStyle}
  resize: none;
`;

const QuestionInput = ({
  question,
  id,
  type,
  placeholder,
  placeholderColor,
  textareaRows,
  children,
  onBlur,
}: QuestionProps) => {
  return (
    <Box>
      <Label htmlFor={id}>{question}</Label>
      {type === 'textarea' ? (
        <BaseTextarea
          id={id}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholdercolor={placeholderColor}
          rows={textareaRows}
        />
      ) : (
        <BaseInput
          id={id}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholdercolor={placeholderColor}
          type={type}
        />
      )}
      {children && children}
    </Box>
  );
};

export default QuestionInput;
