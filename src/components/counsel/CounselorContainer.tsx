import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import CategoryBox from '../CategoryBox';
import Carousel from '../Carousel';
import CounselorDetail from './CounselorDetail';
import CounselorCard from './CounselorCard';
import { selectedCounselorsState } from '../../recoil/counsel';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface ContainerProps {
  counselorsData: any;
}
const CounselorContainer = ({ counselorsData }: ContainerProps) => {
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
      <Content>
        <CategoryBox title={counselorsData.title} text={counselorsData.text} />
        <Carousel
          settings={carouselSettings}
          dataArr={counselorsData.counselors}
          Card={CounselorCard}
          cardClick={cardClick}
          selectedCard={selected}
        />
      </Content>
      {selected !== -1 && (
        <CounselorDetail
          {...counselorsData.counselors.find(
            (data: any) => data.counselorId === selected
          )}
        />
      )}
    </Container>
  );
};

export default CounselorContainer;
