import styled from 'styled-components';
import { useState } from 'react';
import { Box } from '../diary/DiaryEditBox';
import Button from '../Button';

import { tmpCounselor, tmpCounselorDetail } from '../../data/tmpCounselor';
import CounselorCard from './CounselorCard';
import CounselorDetail from './CounselorDetail';
import { BsArrowRight } from 'react-icons/bs';

const RecommendBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  padding: 1rem 3rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.2rem;
  h2 {
    margin: 0.8rem 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const More = styled.div`
  padding-right: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: flex-end;
  div {
    width: fit-content;
    display: flex;
    align-items: center;
  }
`;

const CardBox = styled.div`
  display: flex;
  padding: 2rem 1rem;
  justify-content: space-around;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    padding: 0.8rem 2.4rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;
const ReserveRecommend = () => {
  const [cardClicked, setCardClicked] = useState(false);

  return (
    <RecommendBox>
      <Top>
        <img src={process.env.PUBLIC_URL + '/assets/counselorpic.svg'} />
        <TextBox>
          <h2>추천상담사</h2>
          <p>적합한 상담사를 추천해드려요!</p>
        </TextBox>
      </Top>
      <Content>
        <More>
          <div>
            <p>더보기</p>
            <BsArrowRight />
          </div>
        </More>
        <CardBox>
          <CounselorCard
            {...tmpCounselor}
            onClick={() => {
              setCardClicked((prev) => !prev);
            }}
          />
          <CounselorCard {...tmpCounselor} />
          <CounselorCard {...tmpCounselor} />
        </CardBox>
        {cardClicked ? (
          <CounselorDetail {...{ ...tmpCounselor, ...tmpCounselorDetail }} />
        ) : null}
      </Content>
      <Bottom>
        <Button white={true} text="랜덤 배정받기" />
        <Button text="상담 예약하기" />
      </Bottom>
    </RecommendBox>
  );
};

export default ReserveRecommend;
