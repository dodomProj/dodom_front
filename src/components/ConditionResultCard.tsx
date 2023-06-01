import styled from 'styled-components';
import SaveButton from './SaveButton';
import { ButtonCard } from '../styles/baseCard';

export const ResultCard = styled(ButtonCard)`
  display: flex;
  flex-direction: column;
  padding: 3rem;

  :hover {
    color: var(--black);
  }

  > img {
    margin-bottom: 4rem;
    align-self: end;
  }

  > p {
    margin-bottom: 2rem;
  }
`;

const ConditionResultCard = () => {
  return (
    <ResultCard theme="--third">
      <h2>{'스트레스 지수가 높아요!'}</h2>
      <img src="/assets/pensive_face.png" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur. Odio pulvinar nunc semper
        tristique odio erat. Vitae odio integer pretium purus fermentum
        elementum. Vitae massa et sed platea risus sollicitudin. Eu at ultricies
        quisque tincidunt condimentum amet nec quis mauris. Eros porta pulvinar
        velit dictum purus. Nibh consectetur arcu ante augue. In enim felis
        ornare in orci. Mauris lectus aliquet lectus auctor et venenatis mattis
        +긍정적 멘트로 상담 및 대나무 숲 유도도 좋을 것 같아요:).
      </p>
      <SaveButton />
    </ResultCard>
  );
};

export default ConditionResultCard;
