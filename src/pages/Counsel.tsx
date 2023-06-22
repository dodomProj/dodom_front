import styled from 'styled-components';
import Carousel from '../components/Carousel';
import CategoryBox from '../components/CategoryBox';
import SubtitleBox from '../components/SubtitleBox';
import CounselorCard from '../components/reserve/CounselorCard';
import { MainContent, PageBase } from '../styles/basePadding';
import { tmpCounselor } from '../data/tmpCounselor';
import { counselBoxData } from './../data/subtitleBoxData';
import { depressed, healthy } from '../data/categoryBoxData';

const CounselBox = styled(PageBase)`
  display: flex;
  flex-direction: column;
`;
const Mid = styled(MainContent)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;
const Counsel = () => {
  const carouselSettings = {
    slidesPerView: 1.3,
    spaceBetween: 9,
    breakpoints: {
      481: {
        spaceBetween: 17,
        slidesPerView: 1.6,
      },
      769: {
        spaceBetween: 17,
        slidesPerView: 2.6,
      },
      1100: {
        spaceBetween: 34,
        slidesPerView: 3.7,
      },
    },
  };

  return (
    <CounselBox>
      <SubtitleBox {...counselBoxData} />
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
          <Carousel
            settings={carouselSettings}
            dataArr={tmpCounselor}
            Card={CounselorCard}
          />
        </Container>
      </Mid>
    </CounselBox>
  );
};

export default Counsel;
