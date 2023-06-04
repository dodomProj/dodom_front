import styled from 'styled-components';
import { Box } from '../diary/DiaryEditBox';
import Button from '../Button';
import QuestionInput from '../QuestionInput';
import CheckBoxInput from '../CheckBoxInput';

import { useRecoilState } from 'recoil';
import { counselCallCheck, counselMessageCheck } from '../../recoil/counsel';
import { useEffect } from 'react';

const FormBox = styled(Box)`
  display: flex;
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
    margin-left: 7rem;
  }
`;

const CounselFormBox = () => {
  const [callCheck, setCallCheck] = useRecoilState(counselCallCheck);
  const [messageCheck, setMessageCheck] = useRecoilState(counselMessageCheck);
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
          <QuestionInput question="연락처" type="tel" placeholder="연락처" />
          <QuestionInput question="이메일" type="email" placeholder="이메일" />
          <QuestionInput
            question="상담 가능 시간"
            type="textarea"
            placeholder="상담 가능 시간을 모두 적어주세요!"
            textareaRows={3}
          />
          <QuestionInput
            question="기타 문의 사항"
            type="textarea"
            placeholder="기타 문의 사항이 있나요? 있다면 작성해주세요 :)"
            textareaRows={3}
          />
          <CheckBoxInput
            checked={callCheck}
            text="전화가 좋아요!"
            onChange={() => setCallCheck((prev) => !prev)}
            id="call"
          />
          <CheckBoxInput
            checked={messageCheck}
            text="문자가 좋아요!"
            onChange={() => setMessageCheck((prev) => !prev)}
            id="message"
          />
          {/* 버튼 텍스트 수정 가능 */}
          <Button text="완료" />
        </Form>
      </Right>
    </FormBox>
  );
};

export default CounselFormBox;
