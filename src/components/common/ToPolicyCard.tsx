import styled from 'styled-components';
import { ButtonCard } from '../../styles/baseCard';
import MoreInfoArrow from './MoreInfoArrow';

const Card = styled(ButtonCard)`
  display: flex;
  justify-content: space-between;
  padding: 3rem;

  > img {
    margin-top: 2rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    text-align: right;

    > a:hover {
      color: var(--black);
    }
  }
`;

const ToPolicyCard = () => {
  return (
    <Card theme="--primary">
      <img src="/assets/lightbulb.png" alt="" />
      <div>
        <div>
          <h2>고용노동부 청년도전지원사업</h2>
          <p>정책을 통해 도움을 받을 수 있어요!</p>
        </div>
        <MoreInfoArrow toUri="/policy" infoText="자세히 알아보기" />
      </div>
    </Card>
  );
};

export default ToPolicyCard;
