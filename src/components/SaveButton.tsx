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
const SaveButton = () => {
  return (
    <Button>
      갤러리에 저장하기
      <TfiDownload />
    </Button>
  );
};

export default SaveButton;
