import styled from 'styled-components';
import Button from '../Button';
import QuestionInput from '../QuestionInput';
import CheckBoxInput from '../CheckBoxInput';
import DateTimeBlock from '../DateTimeBlock';

import { useRecoilState } from 'recoil';
import { formDataState } from '../../recoil/reserve';
import { formTimeState } from '../../recoil/reserve';

const FormBox = styled.div`
  display: flex;
  background-color: var(--third);
  border-radius: 20px;
  padding: 4rem;
`;
const Left = styled.div`
  img {
    width: 10rem;
  }
  margin-right: 3rem;
`;

const Right = styled.div`
  flex: 1;
  padding-top: 2rem;
`;

const Title = styled.div`
  p {
    font-size: 24px;
    margin-top: 1rem;
  }
  margin-bottom: 3rem;
`;

const Form = styled.form`
  p {
    font-size: 18px;
    margin-left: 2px;
  }
  button {
    margin-left: 4rem;
  }
`;

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.2rem;
`;

const FlexQuestionInput = styled(QuestionInput)`
  width: 100%;
  flex: 1;
  margin-right: 1rem;
`;

const InputBox = styled.div`
  margin-bottom: 1.2rem;
`;

const ReserveFormBox = () => {
  const [formData, setFormData] = useRecoilState(formDataState);
  const [formTime, setFormTime] = useRecoilState(formTimeState);

  const onSubmit = () => {
    const totalFormData = {
      ...formData,
      ...formTime,
    };
    console.log(totalFormData);
  };

  return (
    <FormBox>
      <Left>
        <img src={process.env.PUBLIC_URL + '/assets/mobile.png'} />
      </Left>
      <Right>
        <Title>
          <h2>상담 받아보기</h2>
          <p>작성한 오늘의 일기로 전문가에게 도움을 받아볼 수 있어요!</p>
        </Title>
        <Form>
          <FlexBox>
            <FlexQuestionInput
              question="성함"
              type="text"
              id="form-name"
              placeholder="백도돔"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <FlexQuestionInput
              question="연락처"
              type="text"
              id="form-tel"
              placeholder="010-1234-1234"
              onChange={(e) =>
                setFormData({ ...formData, tel: e.target.value })
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
                setFormData({ ...formData, etc: e.target.value })
              }
            />
          </InputBox>
          <InputBox>
            <CheckBoxInput
              checked={formData.call}
              text="전화가 좋아요!"
              onChange={() =>
                setFormData({ ...formData, call: !formData.call })
              }
              id="form-call"
            />
            <CheckBoxInput
              checked={formData.message}
              text="문자가 좋아요!"
              onChange={() =>
                setFormData({ ...formData, message: !formData.message })
              }
              id="form-message"
            />
          </InputBox>

          {/* 버튼 텍스트 수정 가능 */}
          <Button
            text="상담사 추천받기"
            forSubmit={false}
            onClick={() => onSubmit()}
          />
        </Form>
      </Right>
    </FormBox>
  );
};

export default ReserveFormBox;
