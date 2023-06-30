import styled from 'styled-components';
import { Card } from '../../styles/baseCard';

const CardBox = styled(Card)<{ grayscale?: boolean; emphatic?: boolean }>`
  position: relative;
  background-color: var(--white);
  cursor: pointer;
  height: 100%;

  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.grayscale && 'rgba(17, 14, 13, 0.6)'};
    border: ${(props) => props.emphatic && '6px solid var(--primary)'};
    border-radius: 1.25rem;
  }
`;
const Top = styled(Card)`
  background: var(--sub);
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-right: 1.2rem;

  p {
    font-size: 1.5rem;
    display: block;
    padding-bottom: 2.1rem;
    word-break: keep-all;
  }
  img {
    width: 67%;
    padding: 2.9rem 0;
  }
`;
const Bottom = styled.div`
  padding: 1.2rem;
`;
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 0.8rem;
`;
const Title = styled.p`
  font-size: 1.2rem;
  word-break: keep-all;
`;
const Content = styled.p`
  text-align: end;
  max-width: 6.5rem;
  color: var(--sub3);
  word-break: keep-all;
`;

type Props = {
  name: string;
  career: number;
  score: number;
  introduce: string;
  icon: string;
  onClick: (id: number) => void;
  selectedCard: number;
  grayscale?: boolean;
  counselorId: number;
};

const CounselorCard = ({
  name,
  career,
  score,
  introduce,
  icon,
  onClick,
  selectedCard,
  grayscale,
  counselorId,
}: Props) => {
  return (
    <CardBox
      onClick={() => onClick(counselorId)}
      emphatic={counselorId === selectedCard}
      grayscale={
        grayscale && selectedCard !== -1 && counselorId !== selectedCard
      }
    >
      <Top>
        <img src={icon} alt="" />
        <p>{name}</p>
      </Top>
      <Bottom>
        <Line>
          <Title>경력</Title>
          <Content>전문 상담사 {career}년</Content>
        </Line>
        <Line>
          <Title>상담 후기 점수</Title>
          <Content>{score}점 (5.0)</Content>
        </Line>
        <Line>
          <Title>한 줄 소개</Title>
          <Content>{introduce}</Content>
        </Line>
      </Bottom>
    </CardBox>
  );
};

export default CounselorCard;
