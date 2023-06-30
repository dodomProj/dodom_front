import { useState, useEffect, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import QuestionInput from '../components/QuestionInput';
import QuestionBlock from '../components/QuestionBlock';
import ConsentCheck from '../components/survey/ConsentCheck';
import { surveyData } from '../data/textBoxData';
import { MainContent, PageBase } from '../styles/basePadding';
import { dodomAPI } from '../api';
import postData from '../api/postData';
import { findCounselorName } from '../util/findCounselorName';

import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { ReactComponent as Star } from '../svg/star.svg';

interface FormEl {
  [key: string]: string | number | boolean;
  name: string;
  score: number;
  review: string;
  opinion: string;
  agree: boolean;
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
  /* width: 100%; */
  .rc-rate-star {
    color: var(--white);
  }

  .rc-rate-star-half .rc-rate-star-first,
  .rc-rate-star-full .rc-rate-star-second,
  .rc-rate-star-half:hover .rc-rate-star-first,
  .rc-rate-star-full:hover .rc-rate-star-second {
    color: var(--primary);
  }

  @media screen and (max-width: 768px) {
    .rc-rate-star {
      margin-right: 0;
      svg {
        width: 4rem;
      }
    }
  }
`;

const Survey = () => {
  const [form, setForm] = useState<FormEl>({
    name: '',
    score: 0,
    review: '',
    opinion: '',
    agree: false,
  });
  const [counselorName, setCounselorName] = useState<string>();
  const { search } = useLocation();
  const navigate = useNavigate();

  const setSurveyForm =
    (key: string) =>
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const value = e.target.value;
      form[key] !== value && setForm({ ...form, [key]: value });
    };

  const submitForm = () => {
    postData(
      `/reviews?appointmentId=${search.split('?appointmentId=')[1]}`,
      form
    ).then((res) => {
      if (res.status === 201) navigate('/');
      else alert('제출에 실패했습니다.\n잠시후 다시 시도해주세요');
    });
  };

  useEffect(() => {
    if (!search.includes('?appointmentId=')) navigate('/');
    else {
      dodomAPI(`/appointments${search}`).then((res) =>
        res.status === 200 && !res.data.reviewExist
          ? setCounselorName(findCounselorName(res.data.counselorId))
          : navigate('/')
      );
    }
  }, [search]);

  return (
    <PageBase>
      <TextBox {...surveyData} title={`${counselorName} ${surveyData.title}`} />
      <SurveyBox>
        <QuestionInput
          question="1. 본인의 이름을 작성해주세요."
          id="name"
          type="text"
          placeholder="김도돔"
          placeholderColor="rgba(196, 190, 189, 1)"
          onChange={setSurveyForm('name')}
        >
          <Info>실제 상담 후 진행된 설문인지 확인 시에 사용됩니다.</Info>
        </QuestionInput>
        <QuestionBlock question="2. 상담은 어느 정도 만족하셨나요?">
          <StyledRate
            value={form.score}
            allowHalf
            character={<Star />}
            onChange={(v) => setForm({ ...form, score: v })}
          />
        </QuestionBlock>
        <QuestionInput
          question="3. 상담의 어느 부분에서 만족/불만족 하셨나요? 자유롭게 작성해주세요."
          id="review"
          type="textarea"
          placeholder="ex. 현재 고민을 잘 들어주셨고, 실질적인 대처 방식을 제시해줘서 좋았어요.&#13;도돔 서비스의 연락 방식이나, 시간 약속 시스템이 만족스러웠어요."
          textareaRows={7}
          onChange={setSurveyForm('review')}
          placeholderColor="rgba(196, 190, 189, 1)"
        />
        <QuestionInput
          question="4. 상담사에게 하고싶은 말을 자유롭게 작성해주세요."
          id="opinion"
          type="textarea"
          placeholder="ex. 도움이 된 점, 앞으로 달라지고 싶은 내 모습 등."
          textareaRows={7}
          onChange={setSurveyForm('opinion')}
          placeholderColor="rgba(196, 190, 189, 1)"
        />
        <ConsentCheck
          checkedChange={(e) => setForm({ ...form, agree: e.target.checked })}
        />
        <Button
          text="제출하기"
          onClick={submitForm}
          isEmpty={!Object.values(form).every((el) => el)}
        />
      </SurveyBox>
    </PageBase>
  );
};

export default Survey;
