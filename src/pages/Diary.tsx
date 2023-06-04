import styled from 'styled-components';
import { PageBase, basePadding } from '../styles/basePadding';

import { useRecoilValue } from 'recoil';
import { diarySubmitState } from '../recoil/diary';

import TextBox from '../components/TextBox';
import { aboutDiary } from '../data/textBoxData';
import DiaryEditBox from '../components/DiaryEditBox';
import DiaryResultBox from '../components/DiaryResultBox';

import { Routes, Route, Navigate } from 'react-router-dom';

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

const Diary = () => {
  const diarySubmit = useRecoilValue(diarySubmitState);
  return (
    <DiaryBox>
      <Top>
        <TextBox {...aboutDiary} />
      </Top>
      <Bottom>
        <Routes>
          <Route path="/" element={<DiaryEditBox />} />
          <Route
            path="/result"
            element={
              diarySubmit ? (
                <DiaryResultBox />
              ) : (
                <Navigate replace to="/diary" />
              )
            }
          />
        </Routes>
      </Bottom>
    </DiaryBox>
  );
};

export default Diary;
