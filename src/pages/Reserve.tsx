import styled from 'styled-components';
import { PageBase, basePadding } from '../styles/basePadding';

import TextBox from '../components/TextBox';
import { aboutDiary } from '../data/textBoxData';

import { Routes, Route, Navigate } from 'react-router-dom';
import ReserveRecommend from '../components/reserve/ReserveRecommend';
import ReserveSuccess from '../components/reserve/ReserveSuccess';
import ReserveFormBox from './../components/reserve/ReserveFormBox';

const ReserveBox = styled(PageBase)`
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  ${basePadding};
  padding-top: 7.5rem;
  height: fit-content;
  margin-bottom: 4rem;
  width: 100%;
`;

const Reserve = () => {
  return (
    <ReserveBox>
      <TextBox {...aboutDiary} />
      <Bottom>
        <Routes>
          <Route path="/" element={<ReserveFormBox />} />
          <Route path="/recommend" element={<ReserveRecommend />} />
          <Route path="/reserved" element={<ReserveSuccess />} />
        </Routes>
      </Bottom>
    </ReserveBox>
  );
};

export default Reserve;
