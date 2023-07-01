import { useRecoilValue } from 'recoil';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import TextBox from '../components/common/TextBox';
import SubtitleBox from '../components/common/SubtitleBox';
import ReserveSuccess from '../components/reserve/ReserveSuccess';
import ReserveFormBox from './../components/reserve/ReserveFormBox';
import ReserveRecommend from '../components/reserve/ReserveRecommend';
import { PageBase, basePadding } from '../styles/basePadding';
import { reserveCardInfo } from '../recoil/reserve';

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
  const info = useRecoilValue(reserveCardInfo);

  return (
    <ReserveBox>
      {info.title !== '솔직한 내 마음 일기' ? (
        <SubtitleBox {...info} />
      ) : (
        <TextBox {...info} />
      )}
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
