import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import CounselorCard from './CounselorCard';
import { Box } from '../diary/DiaryEditBox';
import { BsArrowRight } from 'react-icons/bs';
import { tmpCounselor, tmpCounselorDetail } from '../../data/tmpCounselor';

const RecommendBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const TitleBox = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  > p {
    font-size: 1.5rem;
  }
`;
const More = styled(Link)`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 4rem;
`;
const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonBox = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 100%;

  button {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const ReserveRecommend = () => {
  return (
    <RecommendBox>
      <TitleBox>
        <img src={process.env.PUBLIC_URL + '/assets/counselorpic.svg'} />
        <TextBox>
          <h2>추천 상담사</h2>
          <p>적합한 상담사를 추천해드려요!</p>
        </TextBox>
      </TitleBox>
      <More to="/counsel">
        더보기
        <BsArrowRight />
      </More>
      <CardBox>
        {tmpCounselor.slice(0, 3).map((el) => (
          <CounselorCard {...el} />
        ))}
      </CardBox>
      <ButtonBox>
        <Button white={true} text="랜덤 배정받기" />
        <Button text="상담 예약하기" />
      </ButtonBox>
    </RecommendBox>
  );
};

export default ReserveRecommend;
