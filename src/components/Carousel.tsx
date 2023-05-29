import { FC, ReactNode } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  settings: {};
  gap: string;
  children: ReactNode;
}

interface SliderGap {
  gap: string;
}

const SliderBox = styled(Slider)<SliderGap>`
  > button {
    display: none !important;
  }
  .slick-track {
    padding-bottom: 10px;
    margin-right: 0;
  }
  .slider-item {
    margin-right: ${(props) => props.gap};
  }
`;
const Carousel: FC<CarouselProps> = ({ settings, gap, children }) => {
  return (
    <SliderBox {...settings} gap={gap}>
      {children}
    </SliderBox>
  );
};
export default Carousel;
