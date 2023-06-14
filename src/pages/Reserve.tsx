import styled from 'styled-components';
import { PageBase, basePadding } from '../styles/basePadding';

import TextBox from '../components/TextBox';
import { aboutDiary } from '../data/textBoxData';

import { Routes, Route, Navigate } from 'react-router-dom';
import ReserveRecommend from '../components/reserve/ReserveRecommend';
import ReserveSuccess from '../components/reserve/ReserveSuccess';
import ReserveFormBox from './../components/reserve/ReserveFormBox';

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
          <Route path="/" element={<ReserveFormBox />} />
          <Route path="/recommend" element={<ReserveRecommend />} />
          <Route path="/reserved" element={<ReserveSuccess />} />
        </Routes>
      </Bottom>
    </CounselBox>
  );
};

export default Counsel;
