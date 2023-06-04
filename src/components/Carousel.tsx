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
    display: flex;
    align-items: stretch;
    gap: ${(props) => props.gap};

    > div:last-child {
      margin-right: calc(-${(props) => props.gap} + 10px);
    }

    div {
      height: 100%;
    }
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
