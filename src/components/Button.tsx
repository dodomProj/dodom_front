import styled from 'styled-components';

const Btn = styled.button<{ disabled?: boolean; white?: boolean }>`
  margin-top: 3rem;
  width: fit-content;
  padding: 10px 50px;
  font-size: 24px;
  background-color: ${(props) =>
    props.disabled
      ? 'rgb(219,171,50)'
      : props.white
      ? 'var(--white)'
      : 'var(--primary)'};
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid var(--primary);
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

type ButtonProps = {
  text: string;
  onClick?: React.MouseEventHandler;
  isEmpty?: boolean;
  white?: boolean;
};

const Button = ({ text, onClick, isEmpty, white }: ButtonProps) => {
  return (
    <Btn onClick={onClick} disabled={isEmpty} white={white}>
      {text}
    </Btn>
  );
};

export default Button;
