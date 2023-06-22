import { ComponentType, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface CarouselProps {
  settings: {};
  dataArr: {}[];
  Card: ComponentType<any>;
}
const Div = styled.div<{ marginRight: number }>`
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

const Carousel = ({ settings, Card, dataArr }: CarouselProps) => {
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
    <Div marginRight={clientWidth}>
      <Box {...settings}>
        {dataArr.map((data, i) => (
          <SwiperSlide key={i}>
            <Card {...data} />
          </SwiperSlide>
        ))}
      </Box>
    </Div>
  );
};
export default Carousel;
