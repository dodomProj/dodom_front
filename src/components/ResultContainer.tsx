import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ToPolicyCard from './ToPolicyCard';
import DiaryResultBox from './DiaryResultBox';
import ConditionResultBox from './ConditionResultBox';
import { MainContent } from '../styles/basePadding';

const Container = styled(MainContent)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ResultContainer = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      {pathname.includes('diary') ? <DiaryResultBox /> : <ConditionResultBox />}

      <ToPolicyCard />
    </Container>
  );
};

export default ResultContainer;
