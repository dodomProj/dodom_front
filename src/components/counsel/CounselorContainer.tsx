import styled from 'styled-components';
import CategoryBox from '../CategoryBox';
import Carousel from '../Carousel';
import CounselorDetail from './CounselorDetail';
import CounselorCard from './CounselorCard';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

interface ContainerProps {
  categoryText: any;
  carouselData: any[];
}
const CounselorContainer = ({ categoryText, carouselData }: ContainerProps) => {
  const [selected, setSelected] = useState(-1);

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

  const cardClick = (i: number) => {
    setSelected((prev) => (prev === i ? -1 : i));
  };

  return (
    <Container>
      <CategoryBox {...categoryText} />
      <Carousel
        settings={carouselSettings}
        dataArr={carouselData}
        Card={CounselorCard}
        cardClick={cardClick}
        selectedCard={selected}
      />
      {selected !== -1 && <CounselorDetail {...carouselData[selected]} />}
    </Container>
  );
};

export default CounselorContainer;
