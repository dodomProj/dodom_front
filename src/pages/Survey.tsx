import styled from 'styled-components';
import { MainContent, PageBase, basePadding } from '../styles/basePadding';
import QuestionInput from '../components/QuestionInput';
import Button from '../components/Button';

const TitleBox = styled.div`
  ${basePadding}
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  padding-bottom: 4rem;
  justify-content: center;
  align-items: start;
  background-color: var(--primary);

  > h1 {
    margin-bottom: 2.5rem;
  }

  > p {
    font-size: 1.5rem;
  }
`;
const SurveyBox = styled(MainContent)`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;

  > button {
    align-self: center;
  }
`;
const Survey = () => {
  return (
    <PageBase>
      <TitleBox>
        <h1>도돔 DODOM 설문조사</h1>
        <p>
          도돔(Dodom)을 이용해주셔서 감사드립니다.
          <br />
          여러분의 소중한 후기가 다른 이들에게 희망과 용기가 되며, 상담사들에게
          큰 힘이 됩니다. <br />
          앞으로도 화창하게 빛날 여러분의 내일을 언제나 응원합니다.✨
        </p>
      </TitleBox>
      <SurveyBox>
        <QuestionInput
          question="1. 본인의 이름을 작성해주세요."
          type="text"
          placeholder="김도돔"
          textareaRows={5}
        />
        <QuestionInput question="2. 상담은 어느 정도 만족하셨나요?" />
        <QuestionInput
          question="3. 상담의 어느 부분에서 만족/불만족 하셨나요? 자유롭게 작성해주세요."
          type="textarea"
          placeholder="ex. 현재 고민을 잘 들어주셨고, 실질적인 대처 방식을 제시해줘서 좋았어요.&#13;도돔 서비스의 연락 방식이나, 시간 약속 시스템이 만족스러웠어요."
          textareaRows={5}
        />
        <QuestionInput
          question="4. 상담사에게 하고싶은 말을 자유롭게 작성해주세요."
          type="textarea"
          placeholder="ex. 도움이 된 점, 앞으로 달라지고 싶은 내 모습 등."
          textareaRows={5}
        />
        <Button text="제출하기" onClick={() => console.log('버튼 클릭')} />
      </SurveyBox>
    </PageBase>
  );
};

export default Survey;
