import styled from 'styled-components';
import SaveButton from './SaveButton';
import ConditionResultContents from './condition/ConditionResultContents';
import { ButtonCard } from '../styles/baseCard';

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

  > p {
    margin-bottom: 3rem;
  }
`;

const ConditionResultCard = ({ test }: ResultCardProps) => {
  if (!test) return null;

  return (
    <ResultCard theme="--third">
      <ConditionResultContents test={test} />
      <SaveButton />
    </ResultCard>
  );
};

export default ConditionResultCard;
