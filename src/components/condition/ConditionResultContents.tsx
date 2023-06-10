import { ResultCardProps } from '../ConditionResultCard';
import CommunicationResult from './CommunicationResult';

const ConditionResultContents = ({ test }: ResultCardProps) => {
  if (test === 'anxiety' || test === 'depression') return null;
  if (test === 'stress') return null;
  if (test === 'stress-management') return null;
  if (test === 'communication-parent-child') return <CommunicationResult />;
  return null;
};

export default ConditionResultContents;
