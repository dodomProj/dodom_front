import styled from 'styled-components';
import TextBox from '../components/TextBox';
import TestCard from '../components/TestCard';
import { psychologicalTest } from '../data/psychologicalTest';
import { conditionData } from '../data/textBoxData';
import { MainContent, PageBase } from '../styles/basePadding';
import Carousel from '../components/Carousel';

const InlineBold = styled.span`
  font-weight: bold;
`;

const Condition = () => {
  const carouselSettings = {
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
      480: {
        spaceBetween: 24,
        slidesPerView: 1.5,
      },
      768: {
        spaceBetween: 36,
        slidesPerView: 2.5,
      },
    },
  };
  return (
    <PageBase>
      <TextBox {...conditionData} />
      <MainContent>
        <Carousel
          settings={carouselSettings}
          dataArr={psychologicalTest}
          Card={TestCard}
        />
        <div>
          <InlineBold>출처</InlineBold> 한국가이던스 무료 심리검사
        </div>
      </MainContent>
    </PageBase>
  );
};

export default Condition;
