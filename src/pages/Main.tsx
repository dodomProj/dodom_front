import styled from 'styled-components';
import Button from '../components/Button';
import ToConditionCard from '../components/ToConditionCard';
import QuestionInput from '../components/QuestionInput';
import CategoryBox from '../components/CategoryBox';
import LoadingBox from '../components/LoadingBox';
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
      <QuestionInput question="연락처" type="tel" placeholder="연락처" />
      <QuestionInput
        question="상담 가능 시간"
        type="textarea"
        placeholder="상담 가능 시간을 모두 적어주세요!"
        textareaRows={3}
      />
      <CategoryBox
        title="우울증 전문 상담사"
        text={`우울증 상담을 전문으로 하는 상담사입니다.\n상담사에 마우스를 가져가면, 더 자세히 알아볼 수 있어요.`}
      />
      <LoadingBox
        title="마음 일기가 성공적으로 작성되었어요!"
        text="일기가 카드로 만들어지고 있으니, 잠시만 기다려주세요!"
      />
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
