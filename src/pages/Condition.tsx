import styled from 'styled-components';
import TextBox from '../components/TextBox';
import Carousel from '../components/Carousel';
import TestCard from '../components/TestCard';
import { psychologicalTest } from '../data/psychologicalTest';
import { conditionData } from '../data/textBoxData';
import { PageBase, basePadding } from '../styles/basePadding';

const Main = styled.main`
  ${basePadding}
  padding-top: 5rem;

  > div:last-child {
    text-align: end;
  }
`;
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
      <Main>
        <Carousel settings={carouselSettings} gap="3rem">
          {psychologicalTest.map((test) => (
            <TestCard key={test.title} test={test} />
          ))}
        </Carousel>
        <div>
          <InlineBold>출처</InlineBold> 한국가이던스 무료 심리검사
        </div>
      </Main>
    </PageBase>
  );
};

export default Condition;
