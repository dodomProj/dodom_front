import styled from 'styled-components';
import { MainContent, PageBase } from '../styles/basePadding';

import SubtitleBox from '../components/SubtitleBox';
import { counselBoxData } from './../data/subtitleBoxData';

import CategoryBox from '../components/CategoryBox';
import { depressed, healthy } from '../data/categoryBoxData';
import Carousel from '../components/Carousel';
import { tmpCounselor } from '../data/tmpCounselor';
import CounselorCard from '../components/reserve/CounselorCard';

const CounselBox = styled(PageBase)`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  margin-bottom: 100px;
  > div {
    height: 32rem;
    h1 {
      margin-bottom: 1rem;
    }
    p {
      font-size: 24px;
    }
  }
`;
const Mid = styled(MainContent)`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div``;
const Counsel = () => {
  const carouselSettings = {
    // 캐러셀 세팅
    slidesPerView: 1, // 한 번에 보일 요소 개수
    spaceBetween: 12, // 요소 사이 갭 px
    breakpoints: {
      // 반응형
      480: {
        // 480px 이상일 때
        spaceBetween: 24,
        slidesPerView: 1.5,
      },
      768: {
        spaceBetween: 36,
        slidesPerView: 2.5,
      },
    },
  };
  return (
    <CounselBox>
      {/* <Top> */}
      <SubtitleBox {...counselBoxData} />
      {/* </Top> */}
      <Mid>
        <Container>
          <CategoryBox {...depressed} />
          <Carousel
            settings={carouselSettings}
            dataArr={tmpCounselor}
            Card={CounselorCard}
          />
        </Container>
        <Container>
          <CategoryBox {...healthy} />
        </Container>
      </Mid>
    </CounselBox>
  );
};

export default Counsel;
