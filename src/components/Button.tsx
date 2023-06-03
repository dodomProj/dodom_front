import styled from 'styled-components';

const Btn = styled.button`
  margin-top: 3rem;
  width: fit-content;
  padding: 10px 50px;
  font-size: 24px;
  background-color: var(--primary);
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
`;

type ButtonProps = {
  text: string;
  onClick?: React.MouseEventHandler;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return <Btn onClick={onClick}>{text}</Btn>;
};

export default Button;
