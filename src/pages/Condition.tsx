import styled from 'styled-components';
import TextBox from '../components/TextBox';
import Carousel from '../components/Carousel';
import TestCard from '../components/condition/TestCard';
import { psychologicalTest } from '../data/psychologicalTest';
import { conditionData } from '../data/textBoxData';
import { MainContent, PageBase } from '../styles/basePadding';

const Source = styled.div`
  margin-top: 1.5rem;
`;
const InlineBold = styled.span`
  font-weight: bold;
`;

const Condition = () => {
  const carouselSettings = {
    slidesPerView: 1.2,
    spaceBetween: 35,
    breakpoints: {
      481: {
        slidesPerView: 1.4,
      },
      769: {
        spaceBetween: 70,
        slidesPerView: 1.9,
      },
      1057: {
        slidesPerView: 2.4,
      },
      1345: {
        slidesPerView: 2.9,
      },
    },
  };
  return (
    <PageBase>
      <TextBox {...conditionData} />
      <MainContent>
        <Carousel
          settings={carouselSettings}
          dataArr={psychologicalTest.map((test) => {
            return { id: test.id, title: test.title, ...test.info };
          })}
          Card={TestCard}
        />
        <Source>
          <InlineBold>출처</InlineBold>
          <span> 한국가이던스 무료 심리검사</span>
        </Source>
      </MainContent>
    </PageBase>
  );
};

export default Condition;
