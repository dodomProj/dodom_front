import { PageBase, basePadding } from '../styles/basePadding';

import styled from 'styled-components';
import TextBox from '../components/TextBox';
import { aboutDiary } from '../data/textBoxData';
import diaryTips from '../data/diaryTips';
import { PageProps } from '../recoil';
import { useEffect } from 'react';
import App from './../App';

const DiaryBox = styled(PageBase)`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  height: 500px;
`;
const Bottom = styled.div`
  ${basePadding};
  padding-top: 7.5rem;
`;
const EditBox = styled.div`
  background-color: var(--third);
  border-radius: 20px;
  padding: 5rem;
`;
const EditTip = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  p {
    color: var(--sub3);
    margin-top: 1rem;
    font-size: 18px;
    line-height: 22px;
  }
`;
const Info = styled.div`
  img {
    width: 5rem;
  }
  div {
    position: absolute;
    right: 12rem;
    background-color: var(--white);
    opacity: 0.6;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 1rem 2rem;
    p {
      text-indent: -1rem;
      margin-bottom: 1rem;
    }
  }
  li {
    font-family: 'Pretendard-Regular';
    font-size: 12px;
    line-height: 1rem;
  }
`;
const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  textarea {
    width: 100%;
    height: fit-content;
    padding: 1rem;
    border: none;
  }
  button {
    margin-top: 3rem;
    width: fit-content;
    padding: 10px 50px;
    font-size: 24px;
    background-color: var(--primary);
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border: none;
  }
`;
const Diary = ({ themeSetter }: PageProps) => {
  useEffect(() => {
    themeSetter('light');
  }, []);
  return (
    <DiaryBox>
      <Top>
        <TextBox {...aboutDiary} />
      </Top>
      <Bottom>
        {/* EditBox or ResultBox */}
        <EditBox>
          {/* EditTip & EditForm */}
          <EditTip>
            {/* Title & Info */}
            <Title>
              <h2>솔직한 내 마음 일기</h2>
              <p>
                정해진 이야기는 없어요.
                <br />
                하고 싶은 이야기를 마음껏 작성해주세요 :)
              </p>
            </Title>
            <Info>
              <img src={process.env.PUBLIC_URL + '/assets/info.png'} />
              <div>
                <p>무슨 말을 써야할 지 모르겠다면, 아래 질문을 참고해보세요!</p>
                <ul>
                  {diaryTips.map((tip) => (
                    <li>{tip}</li>
                  ))}
                </ul>
              </div>
            </Info>
          </EditTip>
          <EditForm>
            <textarea />
            <button type="submit">작성하기</button>
          </EditForm>
        </EditBox>
      </Bottom>
    </DiaryBox>
  );
};

export default Diary;
