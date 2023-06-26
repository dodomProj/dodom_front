import styled from 'styled-components';
import Carousel from '../components/Carousel';
import CategoryBox from '../components/CategoryBox';
import SubtitleBox from '../components/SubtitleBox';
import CounselorCard from '../components/counsel/CounselorCard';
import { MainContent, PageBase } from '../styles/basePadding';
import { tmpCounselor } from '../data/tmpCounselor';
import { counselBoxData } from './../data/subtitleBoxData';
import { depressed, healthy } from '../data/categoryBoxData';
import ToDiary from '../components/ToDiary';
import CounselorDetail from '../components/counsel/CounselorDetail';

const CounselBox = styled(PageBase)`
  display: flex;
  flex-direction: column;
`;
const Mid = styled(MainContent)`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;
const ReviewBox = styled.aside`
  background-color: var(--third);
`;

const Counsel = () => {
  const carouselSettings = {
    slidesPerView: 1.3,
    spaceBetween: 34,
    breakpoints: {
      481: {
        slidesPerView: 1.7,
      },
      769: {
        slidesPerView: 2.6,
      },
      1057: {
        slidesPerView: 3.7,
      },
      1345: {
        slidesPerView: 4.2,
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
          <CounselorDetail {...tmpCounselor[0]} />
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
      <ReviewBox>
        <Mid>
          <CategoryBox
            title="DODOM 상담 후기"
            text="DODOM의 상담사와 함께한 실제 후기에요.
도돔을 이용한 청년들의 후기가 최신순으로 업데이트 되고 있습니다."
          />
          <div>후기 1</div>
          <div>후기 2</div>
          <div>후기 3</div>
        </Mid>
      </ReviewBox>
      <ToDiary />
    </CounselBox>
  );
};

export default Counsel;
