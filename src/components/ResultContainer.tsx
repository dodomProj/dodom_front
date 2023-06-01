import styled from 'styled-components';
import ToPolicyCard from './ToPolicyCard';
import ResultBox from './ResultBox';
import { MainContent } from '../styles/basePadding';

const Container = styled(MainContent)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ResultContainer = () => {
  return (
    <Container>
      <ResultBox />
      <ToPolicyCard />
    </Container>
  );
};

export default ResultContainer;
