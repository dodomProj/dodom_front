import styled from 'styled-components';
import useTestResult from '../../util/useTestResult';
import ProgressBar from '../common/ProgressBar';
import { ProgressBox } from './BasicResult';

const ProgressWrapper = styled(ProgressBox)`
  > span {
    font-family: 'Pretendard-Regular';
    font-size: 0.75rem;
  }

  > span:first-child {
    left: 0.7rem;
  }

  > span:last-child {
    right: 0.7rem;
  }

  > div {
    border-radius: 10px;
    height: 2.5rem;
  }
`;

const Img = styled.img`
  width: 100% !important;
  margin: 4rem 0;
`;

const CommunicationResult = () => {
  const { scoreArr, common, type } = useTestResult();
  if (!scoreArr || !common?.total || !type) return null;

  return (
    <>
      <ProgressWrapper>
        <span>개방적</span>
        <ProgressBar
          value={(Math.max(...scoreArr) / common?.total) * 100}
          size="lg"
          bgcolor="rgba(255, 194, 36, 0.4)"
          barcolor="var(--primary)"
        />
        <span>폐쇄적</span>
      </ProgressWrapper>
      <Img src={type.img} alt="" />
      <h2>{type.title}</h2>
      <p>{type.subTitle}</p>
    </>
  );
};

export default CommunicationResult;
