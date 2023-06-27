import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import CategoryBox from '../CategoryBox';
import Carousel from '../Carousel';
import CounselorDetail from './CounselorDetail';
import CounselorCard from './CounselorCard';
import { selectedCounselorsState } from '../../recoil/counsel';
import { CategoryDataProps } from '../../data/categoryBoxData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

interface ContainerProps {
  categoryText?: CategoryDataProps;
  carouselData: any;
}
const CounselorContainer = ({ categoryText, carouselData }: ContainerProps) => {
  const [selected, setSelected] = useState(-1);
  const setSelectedCounselors = useSetRecoilState(selectedCounselorsState);

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

  const cardClick = (id: number) => {
    if (selected === id) {
      setSelected(-1);
      setSelectedCounselors((counselors) => {
        const copied = counselors.slice();
        copied.splice(counselors.indexOf(id), 1);
        return copied;
      });
    } else {
      setSelected(id);
      setSelectedCounselors((counselors) => [...counselors, id]);
    }
  };

  return (
    <Container>
      <CategoryBox title={carouselData.title} text={carouselData.text} />
      <Carousel
        settings={carouselSettings}
        dataArr={carouselData.counselors}
        Card={CounselorCard}
        cardClick={cardClick}
        selectedCard={selected}
      />
      {selected !== -1 && (
        <CounselorDetail
          {...carouselData.counselors.find(
            (data: any) => data.counselorId === selected
          )}
        />
      )}
    </Container>
  );
};

export default CounselorContainer;
