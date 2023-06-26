import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonCard } from '../styles/baseCard';
import { useSetRecoilState } from 'recoil';
import { counselKeywordState } from '../recoil/reserve';

const Item = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: end;
  :hover {
    color: var(--black);
  }
  cursor: pointer;
  padding: 3rem;
  div {
    padding: 1rem 0;
  }
`;

interface CardProps {
  keyword: string;
}

const ToReserveCard = ({ keyword }: CardProps) => {
  const setCounselKeyword = useSetRecoilState(counselKeywordState);

  return (
    <ButtonCard theme="--primary" onClick={() => setCounselKeyword(keyword)}>
      <Item to={'/reserve/'}>
        <div>
          <h2>상담 받아보기</h2>
          <p>
            작성한 오늘의 일기로,
            <br />
            상담을 받아보아요!
          </p>
        </div>
        <img src={process.env.PUBLIC_URL + '/assets/mobile.png'} />
      </Item>
    </ButtonCard>
  );
};

export default ToReserveCard;
