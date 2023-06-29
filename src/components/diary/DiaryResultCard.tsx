import styled from 'styled-components';
import SaveButton from '../SaveButton';
import { ResultCard } from '../condition/ConditionResultCard';
import { useRecoilValue } from 'recoil';
import { diaryTextState } from '../../recoil/diary';
import { useRef } from 'react';

import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const Card = styled(ResultCard)`
  > img {
    align-self: center;
    width: 20rem;
  }
  witdh: fit-content;
`;

const DiaryResultCard = () => {
  const resultText = useRecoilValue(diaryTextState);
  const cardRef = useRef<HTMLDivElement>(null);

  const onSaveButton = () => {
    const card = cardRef.current;
    const buttonFilterOnSave = (card: any) => {
      return card.tagName !== 'BUTTON';
    };
    card &&
      domtoimage.toBlob(card, { filter: buttonFilterOnSave }).then((blob) => {
        saveAs(blob, '나의일기.png');
      });
  };
  return (
    <Card ref={cardRef} theme="--third">
      <img src="/assets/planet.png" alt="" />
      <h2>{resultText?.slice(0, 6) + '...'}</h2>
      <p>{resultText}</p>
      <SaveButton onClick={onSaveButton} />
    </Card>
  );
};

export default DiaryResultCard;
