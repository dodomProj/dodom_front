import { useState, FocusEvent } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import QuestionInput from '../components/QuestionInput';
import QuestionBlock from '../components/QuestionBlock';
import ConsentCheck from '../components/survey/ConsentCheck';
import { MainContent, PageBase } from '../styles/basePadding';

import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { ReactComponent as Star } from '../svg/star.svg';

interface FormEl {
  name: string;
  star: number;
  review: string;
  opinion: string;
  consent: boolean;
}

const SurveyBox = styled(MainContent)`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 4rem;

  > button {
    align-self: center;
  }
`;
const Info = styled.p`
  color: var(--point);
  font-size: 0.8rem !important;
  font-family: 'Pretendard-Regular';
  margin-left: 1rem;
  margin-top: 0.6rem;
`;
const StyledRate = styled(Rate)`
  &.rc-rate {
    font-size: 5rem;
  }

  .rc-rate-star {
    color: var(--white);
  }

  .rc-rate-star-half .rc-rate-star-first,
  .rc-rate-star-full .rc-rate-star-second,
  .rc-rate-star-half:hover .rc-rate-star-first,
  .rc-rate-star-full:hover .rc-rate-star-second {
    color: var(--primary);
  }
`;

const Survey = () => {
  const [form, setForm] = useState<FormEl>({
    name: '',
    star: 0,
    review: '',
    opinion: '',
    consent: false,
  });
  const setSurveyForm =
    (key: string) =>
    (e: FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      e.target.value && setForm({ ...form, [key]: e.target.value });
    };

  return (
    <PageBase>
      <TextBox
        title="○○○ 상담사 만족도 설문조사"
        text={[
          '도돔(Dodom)을 이용해주셔서 감사드립니다.',

          '여러분의 소중한 후기가 다른 이들에게 희망과 용기가 되며, 상담사들에게 큰 힘이 됩니다.',
          '앞으로도 화창하게 빛날 여러분의 내일을 언제나 응원합니다.✨',
        ]}
        theme="light"
      />
      <SurveyBox>
        <QuestionInput
          question="1. 본인의 이름을 작성해주세요."
          id="name"
          type="text"
          placeholder="김도돔"
          placeholderColor="rgba(196, 190, 189, 1)"
          onBlur={setSurveyForm('name')}
        >
          <Info>실제 상담 후 진행된 설문인지 확인 시에 사용됩니다.</Info>
        </QuestionInput>
        <QuestionBlock question="2. 상담은 어느 정도 만족하셨나요?">
          <StyledRate
            value={form.star}
            allowHalf
            character={<Star />}
            onChange={(v) => setForm({ ...form, star: v })}
          />
        </QuestionBlock>
        <QuestionInput
          question="3. 상담의 어느 부분에서 만족/불만족 하셨나요? 자유롭게 작성해주세요."
          id="review"
          type="textarea"
          placeholder="ex. 현재 고민을 잘 들어주셨고, 실질적인 대처 방식을 제시해줘서 좋았어요.&#13;도돔 서비스의 연락 방식이나, 시간 약속 시스템이 만족스러웠어요."
          textareaRows={7}
          onBlur={setSurveyForm('review')}
          placeholderColor="rgba(196, 190, 189, 1)"
        />
        <QuestionInput
          question="4. 상담사에게 하고싶은 말을 자유롭게 작성해주세요."
          id="opinion"
          type="textarea"
          placeholder="ex. 도움이 된 점, 앞으로 달라지고 싶은 내 모습 등."
          textareaRows={7}
          onBlur={setSurveyForm('opinion')}
          placeholderColor="rgba(196, 190, 189, 1)"
        />
        <ConsentCheck
          checkedChange={(e) => setForm({ ...form, consent: e.target.checked })}
        />
        <Button text="제출하기" onClick={() => console.log(form)} />
      </SurveyBox>
    </PageBase>
  );
};

export default Survey;
