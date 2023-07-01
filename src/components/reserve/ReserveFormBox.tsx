import styled from 'styled-components';
import { Box } from '../diary/DiaryEditBox';
import Button from '../Button';
import QuestionInput from '../QuestionInput';
import CheckBoxInput from '../CheckBoxInput';
import DateTimeBlock from '../DateTimeBlock';

import { useRecoilState, useRecoilValue } from 'recoil';
import { formDataState, formDateTimeState } from '../../recoil/reserve';

import { useNavigate } from 'react-router-dom';
import format from 'date-fns/format';
import { useEffect } from 'react';

const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: var(--third);
  border-radius: 20px;
  padding: 4rem;
`;

const Title = styled.div`
  display: flex;
  p {
    font-size: 24px;
    margin-top: 1rem;
  }
`;
const Left = styled.div`
  width: 15%;
  min-width: 80px;
  max-width: 120px;
  img {
    width: 100%;
  }
`;

const Right = styled.div`
  margin-left: 2rem;
`;

const Form = styled.form`
  p {
    font-size: 18px;
    margin-left: 2px;
  }
  margin: 1rem 0;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.2rem;
  gap: 1rem;
  div {
    flex: 1;
  }
  padding-left: calc(15% + 1rem);
`;

const InputBox = styled.div`
  margin-bottom: 1.2rem;
  padding-left: calc(15% + 1rem);
`;

const ReserveFormBox = () => {
  const navigate = useNavigate();
  const formDateTime = useRecoilValue(formDateTimeState);
  const [formData, setFormData] = useRecoilState(formDataState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = Object.entries(formData);
    if (target.every(([_, value]) => value)) {
      navigate('/reserve/recommend');
    } else {
      alert('모든 입력을 완료해주세요.');
    }
  };

  useEffect(() => {
    const { timeList } = formDateTime;
    const nextTimeList = [...timeList];
    setFormData((prev) => ({
      ...prev,
      timeList: nextTimeList.map(({ date }) =>
        format(date, "yyyy-MM-dd'T'HH:mm:ss")
      ),
    }));
  }, [formDateTime]);

  return (
    <FormBox>
      <Title>
        <Left>
          <img src={process.env.PUBLIC_URL + '/assets/mobile.png'} />
        </Left>
        <Right>
          <h2>상담 받아보기</h2>
          <p>작성한 오늘의 일기로 전문가에게 도움을 받아볼 수 있어요!</p>
        </Right>
      </Title>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FlexBox>
          <QuestionInput
            question="성함"
            type="text"
            id="form-name"
            placeholder="백도돔"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <QuestionInput
            question="연락처"
            type="text"
            id="form-tel"
            placeholder="010-1234-1234"
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
          />
        </FlexBox>
        <InputBox>
          <QuestionInput
            question="이메일"
            type="text"
            id="form-email"
            placeholder="ddm@dodom.com"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </InputBox>
        <InputBox>
          <DateTimeBlock />
        </InputBox>
        <InputBox>
          <QuestionInput
            question="기타 문의 사항"
            type="textarea"
            id="form-tel"
            placeholder="이외의 상담 시간 관련 요청사항이나 궁금한 점, 상담 받고 싶은 부분 등이 있다면 자유롭게 작성해주세요 :)"
            textareaRows={3}
            onChange={(e) =>
              setFormData({ ...formData, inquiry: e.target.value })
            }
          />
        </InputBox>
        <InputBox>
          <CheckBoxInput
            checked={formData.method === 'call'}
            text="전화가 좋아요!"
            onChange={() => setFormData({ ...formData, method: 'call' })}
            id="form-call"
          />
          <CheckBoxInput
            checked={formData.method === 'message'}
            text="문자가 좋아요!"
            onChange={() => setFormData({ ...formData, method: 'message' })}
            id="form-message"
          />
        </InputBox>
        <ButtonBox>
          <Button text="상담사 추천받기" forSubmit={true} />
        </ButtonBox>
      </Form>
    </FormBox>
  );
};

export default ReserveFormBox;
