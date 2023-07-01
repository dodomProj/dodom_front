import { useNavigate } from 'react-router-dom';
import Logo from '../components/common/Logo';
import Button from '../components/common/Button';
import { MainContent, PageBase } from '../styles/basePadding';
import styled from 'styled-components';

const Main = styled(MainContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  gap: 1rem;
  text-align: center;

  > h1 {
    font-size: 6rem;
  }

  > p {
    font-size: 1.5rem;
    word-break: keep-all;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 500px) {
    > button {
      flex: 1;
      padding-right: 0;
      padding-left: 0;
    }
  }
`;

const Error = () => {
  const navigate = useNavigate();

  return (
    <PageBase>
      <Main>
        <h1>404 Error</h1>
        <p>죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.</p>
        <Logo isText />
        <ButtonBox>
          <Button text="메인으로" onClick={() => navigate('/')} />
          <Button text="이전으로" onClick={() => navigate(-1)} white />
        </ButtonBox>
      </Main>
    </PageBase>
  );
};

export default Error;
