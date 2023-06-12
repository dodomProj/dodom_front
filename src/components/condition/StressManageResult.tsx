import styled from 'styled-components';
import useTestResult from '../../util/useTestResult';
import CategoryBox from '../CategoryBox';

const Text = styled.div`
  font-size: 1.2rem;

  > p:first-child {
    font-weight: bold;
  }
`;

const StressManageResult = () => {
  const { scoreArr, common, type } = useTestResult();
  if (!scoreArr || !common?.total || !type) return null;

  return (
    <>
      <CategoryBox
        title={type.subTitle}
        text={type.subTitle}
        textsize="1.5rem"
        marginbottom="12.5rem"
      />
      <div>
        <img src="" alt="" />
        <canvas>123456789</canvas>
        <Text>
          {common.text.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </Text>
      </div>
    </>
  );
};

export default StressManageResult;
