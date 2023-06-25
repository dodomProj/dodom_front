import styled from 'styled-components';
import SaveButton from '../SaveButton';
import ConditionResultContents from '../condition/ConditionResultContents';
import { ButtonCard } from '../../styles/baseCard';
import useSaveImg from '../../util/useSaveImg';

export interface ResultCardProps {
  test?: string;
}

export const ResultCard = styled(ButtonCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;

  :hover {
    color: var(--black);
  }

  > img {
    margin-bottom: 4rem;
  }

  > button {
    margin-top: 3rem;
  }
`;

const ConditionResultCard = ({ test }: ResultCardProps) => {
  const { imgRef, saveImg } = useSaveImg('검사결과');

  if (!test) return null;

  return (
    <ResultCard theme="--third" ref={imgRef}>
      <ConditionResultContents test={test} />
      <SaveButton onClick={saveImg} />
    </ResultCard>
  );
};

export default ConditionResultCard;
