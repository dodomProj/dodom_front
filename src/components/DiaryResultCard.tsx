import styled from 'styled-components';
import SaveButton from './SaveButton';
import { ResultCard } from './ConditionResultCard';
import { useRecoilValue } from 'recoil';
import { diaryTextState } from '../recoil/diary';

const Card = styled(ResultCard)`
  > img {
    align-self: center;
    width: 20rem;
  }
`;

const DiaryResultCard = () => {
  const resultText = useRecoilValue(diaryTextState);
  return (
    <Card theme="--third">
      <img src="/assets/planet.png" alt="" />
      <h2>{resultText?.slice(0, 6) + '...'}</h2>
      <p>{resultText}</p>
      <SaveButton />
    </Card>
  );
};

export default DiaryResultCard;
