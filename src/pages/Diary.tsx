import { useRef } from 'react';
import styled from 'styled-components';
import { PageBase, basePadding } from '../styles/basePadding';

import { useRecoilState } from 'recoil';
import { diaryTextState, tipHoverState, tipClickState } from '../recoil/diary';

import TextBox from '../components/TextBox';
import { aboutDiary } from '../data/textBoxData';
import diaryTips from '../data/diaryTips';
import useAutosizeTextArea from '../util/useAutosizeTextArea';

import {
  diaryCardData,
  conditionCardData,
  counselCardData,
} from '../data/navCardData';

import NavCard from '../components/NavCard';

const DiaryBox = styled(PageBase)`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  height: 500px;
  div > div {
    margin-bottom: 3rem;
  }
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
const Info = styled.div`
  img {
    width: 3.5rem;
    cursor: pointer;
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
  textarea {
    width: 100%;
    height: fit-content;
    border: none;
    font-size: 18px;
    padding: 0.5rem 0.2rem;
    resize: none;
    ::placeholder {
      color: var(--sub3);
      line-height: 22px;
    }
    :focus {
      outline: none;
    }
    background: transparent;
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
const Diary = () => {
  const [diaryText, setDiaryText] = useRecoilState(diaryTextState);
  const [tipHover, setTipHover] = useRecoilState(tipHoverState);
  const [tipClick, setTipClick] = useRecoilState(tipClickState);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textareaRef.current, diaryText);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target?.value;
    setDiaryText(text);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(diaryText);
  };

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
            <h2>솔직한 내 마음 일기</h2>
            <Info>
              <img
                src={process.env.PUBLIC_URL + '/assets/info.png'}
                onMouseOver={() => setTipHover(true)}
                onMouseOut={() => setTipHover(false)}
                onClick={() => setTipClick((prev) => !prev)}
              />
              {tipHover || tipClick ? (
                <div>
                  <p>
                    무슨 말을 써야할 지 모르겠다면, 아래 질문을 참고해보세요!
                  </p>
                  <ul>
                    {diaryTips.map((tip) => (
                      <li>{tip}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Info>
          </EditTip>
          <EditForm onSubmit={(e) => handleSubmit(e)}>
            <textarea
              onChange={handleChange}
              placeholder="정해진 이야기는 없어요.&#13;&#10;하고 싶은 이야기를 마음껏 작성해주세요 :)"
              ref={textareaRef}
              rows={3}
              value={diaryText}
              autoFocus
            />
            <button type="submit">작성하기</button>
          </EditForm>
        </EditBox>
      </Bottom>
      <NavCard {...conditionCardData} />
      <NavCard {...counselCardData} />
      <NavCard {...diaryCardData} />
    </DiaryBox>
  );
};

export default Diary;
