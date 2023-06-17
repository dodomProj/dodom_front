import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TextBox from '../components/TextBox';
import { firstDodom } from '../data/textBoxData';
import { PageBase } from '../styles/basePadding';
import Button from '../components/Button';
import ToConditionCard from '../components/ToConditionCard';
import QuestionInput from '../components/QuestionInput';

const MainBox = styled(PageBase)`
  display: flex;
  flex-direction: column;
  height: calc(100vh);
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
`;
const ButtonCard = styled(Link)`
  background-color: var(${(props) => props.theme});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 500px;
  height: 70vh;
  transition: 0.5s;
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
`;
const SubBox = styled.div`
  position: relative;
  height: calc(-200px + 100vh);
`;
const LinkBox = styled.div`
  position: absolute;
  bottom: 5%;
  right: 7rem;
  display: flex;
  div {
    color: var(--white);
    cursor: pointer;
    margin-left: 4rem;
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
        <TextBox {...firstDodom}>
          <LinkBox>
            <div>
              상담사 알아보기
              <img src={process.env.PUBLIC_URL + '/assets/arrow_white.png'} />
            </div>
            <div>
              DODOM 더 알아보기
              <img src={process.env.PUBLIC_URL + '/assets/arrow_white.png'} />
            </div>
          </LinkBox>
        </TextBox>
      </SubBox>
    </>
  );
};

export default Main;
