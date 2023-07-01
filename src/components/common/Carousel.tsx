import { ComponentType, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const RightSpread = styled.div<{ marginRight: number; spread: boolean }>`
  margin-right: calc((${(props) => props.marginRight}px - 100%) * -1 / 2);
  margin-right: ${(props) => !props.spread && 0};
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
  spread?: boolean;
  settings: {};
  dataArr: {}[];
  Card: ComponentType<any>;
  cardClick?: (id: number) => void;
  selectedCard?: number;
  grayscale?: boolean;
}

const Carousel = ({
  spread = true,
  settings,
  Card,
  dataArr,
  cardClick,
  selectedCard,
  grayscale,
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
    if (spread) {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <RightSpread marginRight={clientWidth} spread={spread}>
      <Box {...settings}>
        {dataArr.map((data, i) => (
          <SwiperSlide key={i}>
            <Card
              {...data}
              onClick={cardClick}
              selectedCard={selectedCard}
              grayscale={grayscale}
            />
          </SwiperSlide>
        ))}
      </Box>
    </RightSpread>
  );
};
export default Carousel;
