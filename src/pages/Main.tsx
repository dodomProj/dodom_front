import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(-100px + 100vh);
  width: 100vw;
`;
const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
const ButtonCard = styled.div`
  background-color: var(${(props) => props.theme});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 70vh;
  img {
    display: block;
    margin-bottom: 70px;
    width: 40%;
  }
  h1 {
    margin-bottom: 28px;
  }
  text-align: center;
`;
const Bottom = styled.div`
  background-color: var(${'--dodom_black'});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  h1 {
    color: var(${'--dodom_yellow'});
    margin-bottom: 15px;
  }
  p {
    color: var(${'--dodom_white'});
  }
`;

const Main = () => {
  return (
    <MainBox>
      <Top>
        <ButtonCard theme="--dodom_yellow">
          <img src={process.env.PUBLIC_URL + '/assets/chat.png'} />
          <h1>솔직한 내 마음 일기 작성하기</h1>
          <p>아무도 모르는 내 마음, 편하게 써봐요.</p>
        </ButtonCard>
        <ButtonCard theme="--dodom_beige">
          <img src={process.env.PUBLIC_URL + '/assets/glass.png'} />
          <h1>내 상태 체크하기</h1>
          <p>
            내 상태 체크하기는 간단한 설문을 통해 심리 검사를 진행하고,
            <br />
            현재 자신의 상태를 알아볼 수 있는 프로그램입니다.
          </p>
        </ButtonCard>
      </Top>
      <Bottom>
        <h1>도돔이 처음이라면?</h1>
        <p>도돔 자세히 알아보기</p>
      </Bottom>
    </MainBox>
  );
};

export default Main;
