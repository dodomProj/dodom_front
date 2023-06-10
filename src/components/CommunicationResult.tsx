import styled from 'styled-components';
import useTestResult from '../util/useTestResult';
import ProgressBar from './ProgressBar';

const ProgressBox = styled.div`
  position: relative;

  > img,
  span {
    position: absolute;
    z-index: 1;
    font-size: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
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
      <ProgressBox>
        <span>개방적</span>
        <ProgressBar
          value={(Math.max(...scoreArr) / common?.total) * 100}
          size="lg"
          bgcolor="rgba(255, 194, 36, 0.4)"
          barcolor="var(--primary)"
        />
        <span>폐쇄적</span>
      </ProgressBox>
      <Img src={type.img} alt="" />
      <h2>{type.title}</h2>
      <p>{type.subTitle}</p>
    </>
  );
};

export default CommunicationResult;
