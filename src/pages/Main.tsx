import styled from 'styled-components';
import Button from '../components/Button';
import ToConditionCard from '../components/ToConditionCard';
//폰트 테스트용 임시 코드

const Main = () => {
  const test = () => {
    console.log('click');
  };
  return (
    <>
      <Bold>Tittle1/Pretendard Bold 48 px</Bold>
      <Medium>Subtittle/Pretendard Medium 24 px</Medium>
      <Regular>Caption/Pretendard Regular 12 px</Regular>
      <Button text="작성하기" onClick={test} />
      <ToConditionCard />
    </>
  );
};

export default Main;

const Bold = styled.div`
  font-family: 'Pretendard-Bold';
  font-size: 36px;
`;

const Medium = styled.div`
  font-family: 'Pretendard-Medium';
  font-size: 16px;
`;

const Regular = styled.div`
  font-family: 'Pretendard-Regular';
  font-size: 12px;
`;
