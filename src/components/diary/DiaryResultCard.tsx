import styled from 'styled-components';
import SaveButton from '../common/SaveButton';
import { ResultCard } from '../condition/ConditionResultCard';
import { useRecoilValue } from 'recoil';
import { diaryTextState } from '../../recoil/diary';
import { useRef } from 'react';

import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import useSaveImg from '../../util/useSaveImg';

const Card = styled(ResultCard)`
  > img {
    align-self: center;
    width: 20rem;
  }
`;

const DiaryResultCard = () => {
  const resultText = useRecoilValue(diaryTextState);
  const { imgRef, saveImg } = useSaveImg('나의일기');

  return (
    <Card ref={imgRef} theme="--third">
      <img src="/assets/planet.png" alt="" />
      <h2>{resultText?.slice(0, 6) + '...'}</h2>
      <p>{resultText}</p>
      <SaveButton onClick={saveImg} />
    </Card>
  );
};

export default DiaryResultCard;
