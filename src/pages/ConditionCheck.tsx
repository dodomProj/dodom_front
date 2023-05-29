import styled from 'styled-components';
import TestCard from '../components/TestCard';
import { psychologicalTest } from '../data/psychologicalTest';
import TextBox from '../components/TextBox';
import { conditionCheckData } from '../data/textBoxData';
import { basePadding } from '../styles/basePadding';

const Main = styled.main`
  ${basePadding}
  padding-top: 5rem;

  > div {
    align-self: self-end;
    text-align: end;
  }
`;
const CardBox = styled.ul`
  display: flex;
  list-style: none;
  overflow: auto;
  gap: 30px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const InlineBold = styled.span`
  font-weight: bold;
`;

const ConditionCheck = () => {
  return (
    <div>
      <TextBox {...conditionCheckData} />
      <Main>
        <CardBox>
          {psychologicalTest.map((test) => (
            <TestCard key={test.title} test={test} />
          ))}
        </CardBox>
        <div>
          <InlineBold>출처</InlineBold> 한국가이던스 무료 심리검사
        </div>
      </Main>
    </div>
  );
};

export default ConditionCheck;
