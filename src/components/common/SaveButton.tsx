import styled from 'styled-components';
import { TfiDownload } from 'react-icons/tfi';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  align-self: end;
  border: none;
  background-color: inherit;
  cursor: pointer;

  :hover {
    font-weight: bold;
    > svg {
      stroke-width: 1;
    }
  }
`;
type ButtonProps = {
  onClick?: React.MouseEventHandler;
};
const SaveButton = ({ onClick }: ButtonProps) => {
  return (
    <Button onClick={onClick}>
      갤러리에 저장하기
      <TfiDownload />
    </Button>
  );
};

export default SaveButton;
