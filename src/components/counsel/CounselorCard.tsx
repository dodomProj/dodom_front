import styled from 'styled-components';
import { Card } from '../../styles/baseCard';
import { BsArrowRight } from 'react-icons/bs';

const CardBox = styled(Card)`
  width: 16rem;
`;
const Top = styled(Card)`
  background: var(--sub);
  display: flex;
  align-items: end;
  padding: 2rem 0;
  p {
    font-size: 24px;
    display: block;
  }
  img {
    width: 11rem;
  }
`;
const Bottom = styled.div`
  padding: 1rem;
`;
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
`;
const Title = styled.div`
  font-size: 18px;
`;
const Content = styled.div`
  text-align: end;
  max-width: 6.5rem;
  color: var(--sub3);
`;
const More = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  color: var(--sub2);
  p {
    vertical-align: center;
    font-family: 'Pretendard-Regular';
    font-size: 0.8rem;
  }
  svg {
    font-size: 0.8rem;
    vertical-align: center;
  }
`;

type Props = {
  name: string;
  year: number;
  score: number;
  intro: string;
  img: string;
};

const CounselorCard = ({ name, year, score, intro, img }: Props) => {
  return (
    <CardBox>
      <Top>
        <img src={process.env.PUBLIC_URL + `/assets/${img}`} />
        <p>{name}</p>
      </Top>
      <Bottom>
        <Line>
          <Title>경력</Title>
          <Content>전문 상담사 {year}년</Content>
        </Line>
        <Line>
          <Title>상담 후기 점수</Title>
          <Content>{score}점 (5.0)</Content>
        </Line>
        <Line>
          <Title>한 줄 소개</Title>
          <Content>{intro}</Content>
        </Line>
        <More>
          <p>자세히</p>
          <BsArrowRight />
        </More>
      </Bottom>
    </CardBox>
  );
};

export default CounselorCard;
