import { ComponentType } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface CarouselProps {
  settings: {};
  dataArr: {}[];
  Card: ComponentType<any>;
}

const Box = styled(Swiper)`
  .swiper-slide {
    padding-right: 4px;
    padding-bottom: 4px;
    height: auto;
  }
`;

const Carousel = ({ settings, Card, dataArr }: CarouselProps) => {
  return (
    <Box {...settings}>
      {dataArr.map((el, i) => (
        <SwiperSlide key={i}>
          <Card test={el} />
        </SwiperSlide>
      ))}
    </Box>
  );
};
export default Carousel;
