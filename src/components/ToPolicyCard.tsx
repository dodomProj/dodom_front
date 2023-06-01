import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonCard } from '../styles/baseCard';

const Item = styled(Link)`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  :hover {
    color: var(--black);
  }
  /* cursor: pointer; */
  padding: 3rem;
  div {
    > h2,
    p {
      text-align: end;
    }
  }
`;

const ToPolicyCard = () => {
  return (
    <ButtonCard theme="--primary">
      <Item to="/policy">
        <img src="/assets/lightbulb.png" alt="" />
        <div>
          <h2>어쩌고 정책, 저쩌고 사업에서</h2>
          <p>도움을 받을 수 있어요!</p>
        </div>
      </Item>
    </ButtonCard>
  );
};

export default ToPolicyCard;
