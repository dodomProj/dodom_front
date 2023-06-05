import styled from 'styled-components';
import TextBox from '../components/TextBox';
import Carousel from '../components/Carousel';
import TestCard from '../components/TestCard';
import { psychologicalTest } from '../data/psychologicalTest';
import { conditionData } from '../data/textBoxData';
import { MainContent, PageBase } from '../styles/basePadding';

const InlineBold = styled.span`
  font-weight: bold;
`;

const Condition = () => {
  const carouselSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    swipeToSlide: true,
  };
  return (
    <PageBase>
      <TextBox {...conditionData} />
      <MainContent>
        <Carousel settings={carouselSettings} gap="3rem">
          {psychologicalTest.map((test) => (
            <TestCard key={test.key} test={test} />
          ))}
        </Carousel>
        <div>
          <InlineBold>출처</InlineBold> 한국가이던스 무료 심리검사
        </div>
      </MainContent>
    </PageBase>
  );
};

export default Condition;
