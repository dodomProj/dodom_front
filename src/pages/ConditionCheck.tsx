import styled from 'styled-components';
import TextBox from '../components/TextBox';
import Carousel from '../components/Carousel';
import TestCard from '../components/TestCard';
import { psychologicalTest } from '../data/psychologicalTest';
import { conditionCheckData } from '../data/textBoxData';
import { PageBase, basePadding } from '../styles/basePadding';

const Div = styled(PageBase)``;
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

const ConditionCheck = () => {
  const carouselSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    swipeToSlide: true,
  };
  return (
    <Div>
      <TextBox {...conditionCheckData} />
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
    </Div>
  );
};

export default ConditionCheck;
