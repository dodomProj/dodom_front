import styled from 'styled-components';
import { ButtonCard } from '../styles/baseCard';
import { Link } from 'react-router-dom';

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

const ToCounselCard = () => {
  return (
    <ButtonCard theme="--primary">
      <Item to={'/counsel'}>
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

export default ToCounselCard;
