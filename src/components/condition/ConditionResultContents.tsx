import { ResultCardProps } from '../ConditionResultCard';
import BasicResult from './BasicResult';
import CommunicationResult from './CommunicationResult';
import StressManageResult from './StressManageResult';
import StressResult from './StressResult';

const ConditionResultContents = ({ test }: ResultCardProps) => {
  if (test === 'anxiety' || test === 'depression') return <BasicResult />;
  if (test === 'stress') return <StressResult />;
  if (test === 'stress-management') return <StressManageResult />;
  if (test === 'communication-parent-child') return <CommunicationResult />;
  return null;
};

export default ConditionResultContents;
