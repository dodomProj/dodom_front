import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TextBox from '../components/TextBox';
import { firstDodom } from '../data/textBoxData';
import { PageBase, basePadding } from '../styles/basePadding';

const MainBox = styled(PageBase)`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
`;
const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  :hover {
    a:not(a:hover) {
      filter: brightness(50%);
    }
  }
  height: calc(-250px + 100vh);
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    height: fit-content;
  }
  @media only screen and (min-width: 701px) and (max-height: 632px) {
    height: fit-content;
  }
`;
const ButtonCard = styled(Link)`
  background-color: var(${(props) => props.theme});
  /* min-width: 50vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 2;
  transition: 0.5s;
  padding: 1rem;
  img {
    display: block;
    margin-bottom: 70px;
    width: 40%;
  }
  h1 {
    margin-bottom: 28px;
  }
  p {
    font-size: 24px;
  }
  :hover {
    color: var(--black);
  }
  text-align: center;
`;
const Bottom = styled.div`
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  h1 {
    color: var(--primary);
    margin-bottom: 15px;
  }
  p {
    color: var(--white);
    cursor: pointer;
  }
  height: 150px;
`;
const SubBox = styled.div`
  height: fit-content;
  background: var(--black);
  display: flex;
  flex-direction: column;
  /* @media only screen and (min-width: 1080px) {
    height: calc(-200px + 100vh);
    padding-bottom: 0;
  } */
  padding-bottom: 100px;
`;
const LinkBox = styled.div`
  ${basePadding}
  width: 100%;
  display: flex;
  justify-content: flex-end;
  a {
    color: var(--white);
    cursor: pointer;
    margin-left: 4rem;
    word-break: keep-all;
  }
  img {
    width: 1rem;
    margin-left: 1rem;
  }
`;
const Main = () => {
  const target = useRef<HTMLDivElement>(null);
  const onMoveToTarget = () => {
    target?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <>
      <MainBox>
        <Top>
          <ButtonCard to="/diary" theme="--primary">
            <img src={process.env.PUBLIC_URL + '/assets/chat.png'} />
            <h1>솔직한 내 마음 일기 작성하기</h1>
            <p>아무도 모르는 내 마음, 편하게 써봐요.</p>
          </ButtonCard>
          <ButtonCard to="/" theme="--third">
            <img src={process.env.PUBLIC_URL + '/assets/glass.png'} />
            <h1>내 상태 체크하기</h1>
            <p>
              내 상태 체크하기로 간단한 설문을 통해
              <br />
              심리 검사를 진행할 수 있어요.
            </p>
          </ButtonCard>
        </Top>
        <Bottom>
          <h1>도돔이 처음이라면?</h1>
          <p onClick={onMoveToTarget}>도돔 자세히 알아보기</p>
        </Bottom>
      </MainBox>
      <SubBox ref={target}>
        <TextBox {...firstDodom} />
        <LinkBox>
          <Link to="/counsel">
            상담사 알아보기
            <img src={process.env.PUBLIC_URL + '/assets/arrow_white.png'} />
          </Link>
          <Link to="/guide">
            DODOM 더 알아보기
            <img src={process.env.PUBLIC_URL + '/assets/arrow_white.png'} />
          </Link>
        </LinkBox>
      </SubBox>
    </>
  );
};

export default Main;
