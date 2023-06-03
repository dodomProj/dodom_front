import styled from 'styled-components';
import SaveButton from './SaveButton';
import { ResultCard } from './ConditionResultCard';

const Card = styled(ResultCard)`
  > img {
    align-self: center;
    width: 20rem;
  }
`;

const DiaryResultCard = () => {
  return (
    <Card theme="--third">
      <img src="/assets/planet.png" alt="" />
      <h2>오늘 내 기분은..</h2>
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
    </Card>
  );
};

export default DiaryResultCard;
