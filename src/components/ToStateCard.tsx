import styled from 'styled-components';
import { ButtonCard } from '../styles/baseCard';
import { Link } from 'react-router-dom';

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: end;
  :hover {
    color: var(--black);
  }
  cursor: pointer;
  padding: 3rem;
  div {
    align-self: flex-end;
  }
  img {
    align-self: flex-start;
  }
`;

const ToStateCard = () => {
  return (
    <ButtonCard theme="--third">
      <Item to={'/state'}>
        <div>
          <h2>심리검사 받아보기</h2>
          <p>
            간단한 설문을 통한
            <br />
            심리검사도 진행해 보아요!
          </p>
        </div>
        <img src={process.env.PUBLIC_URL + '/assets/glass.png'} />
      </Item>
    </ButtonCard>
  );
};

export default ToStateCard;
