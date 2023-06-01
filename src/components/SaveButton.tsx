import styled from 'styled-components';

export const Button = styled.button`
  align-self: end;
  border: none;
  background-color: inherit;
  cursor: pointer;

  :hover {
    font-weight: bold;
    /* TfiDownload */
  }
`;
const SaveButton = () => {
  return <Button>갤러리에 저장하기</Button>;
};

export default SaveButton;
