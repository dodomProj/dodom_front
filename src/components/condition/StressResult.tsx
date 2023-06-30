import styled from 'styled-components';
import useTestResult from '../../util/useTestResult';
import CategoryBox from '../CategoryBox';
import ProgressBar from '../ProgressBar';
import { ProgressWrapper, barColor } from './BasicResult';

const ProgressContainer = styled(ProgressWrapper)`
  width: 40%;
  align-self: end;
`;
const Img = styled.img`
  margin-bottom: 2rem !important;
`;

const StressResult = () => {
  const { score, common, type } = useTestResult();
  if (score === undefined || !common?.total || !type) return null;
  return (
    <>
      <ProgressContainer
        color={type.level === 2 ? 'var(--black)' : barColor[type.level]}
        shadow={barColor[type.level]}
      >
        <img src={type.emoji} alt={type.emoji} />
        <ProgressBar
          value={(score / common.total) * 100}
          size="lg"
          bgcolor="inherit"
          barcolor={barColor[type.level]}
        />
        <span>{score}</span>
      </ProgressContainer>
      <Img src={type.img} alt="" />
      <CategoryBox title={type.subTitle} text={common.text.join('\n')} />
    </>
  );
};

export default StressResult;
