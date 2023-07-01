import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonCard } from '../../styles/baseCard';

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
    align-self: flex-start;
    padding-bottom: 1rem;
  }
`;

const ToDiaryCard = () => {
  return (
    <ButtonCard theme="--third">
      <Item to={'/diary'}>
        <img src={process.env.PUBLIC_URL + '/assets/chat.png'} alt="" />
        <div>
          <h2>마음 일기 작성하기</h2>
          <p>
            아무도 모르는 내 마음,
            <br />
            편하게 써봐요!
          </p>
        </div>
      </Item>
    </ButtonCard>
  );
};

export default ToDiaryCard;
