import { ComponentType, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const RightSpread = styled.div<{ marginRight: number }>`
  min-width: 320px;
  margin-right: calc((${(props) => props.marginRight}px - 100%) * -1 / 2);
`;
const Box = styled(Swiper)`
  width: inherit;
  .swiper-slide {
    padding-right: 4px;
    padding-bottom: 4px;
    height: auto;
  }
`;

interface CarouselProps {
  settings: {};
  dataArr: {}[];
  Card: ComponentType<any>;
  cardClick?: (i: number) => void;
  selectedCard?: number;
}

const Carousel = ({
  settings,
  Card,
  dataArr,
  cardClick,
  selectedCard,
}: CarouselProps) => {
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);

  let timer: ReturnType<typeof setTimeout>;
  const handleResize = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setClientWidth(document.body.clientWidth);
    }, 300);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <RightSpread marginRight={clientWidth}>
      <Box {...settings}>
        {dataArr.map((data, i) => (
          <SwiperSlide key={i}>
            <Card
              {...data}
              onClick={cardClick && (() => cardClick(i))}
              emphatic={selectedCard === i}
            />
          </SwiperSlide>
        ))}
      </Box>
    </RightSpread>
  );
};
export default Carousel;
