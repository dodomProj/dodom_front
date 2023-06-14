import styled from 'styled-components';
import { PageBase, basePadding } from '../styles/basePadding';

import TextBox from '../components/TextBox';
import { aboutDiary } from '../data/textBoxData';

import { Routes, Route, Navigate } from 'react-router-dom';
import CounselFormBox from '../components/counsel/CounselFormBox';
import CounselRecommend from '../components/counsel/CounselRecommend';
import CounselReserved from '../components/counsel/CounselReserved';

const CounselBox = styled(PageBase)`
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

const Counsel = () => {
  return (
    <CounselBox>
      <Top>
        <TextBox {...aboutDiary} />
      </Top>
      <Bottom>
        <Routes>
          <Route path="/form" element={<CounselFormBox />} />
          <Route path="/recommend" element={<CounselRecommend />} />
          <Route path="/reserved" element={<CounselReserved />} />
        </Routes>
      </Bottom>
    </CounselBox>
  );
};

export default Counsel;
