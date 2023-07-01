import styled from 'styled-components';
import { MainContent } from '../../styles/basePadding';
import Loading from './Loading';

interface LoadingProps {
  title: string;
  text: string;
}

const Container = styled(MainContent)`
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    padding-top: 4rem;
  }
  > p {
    font-size: 1.5rem;
    padding-top: 1rem;
  }
`;
const LoadingBox = ({ title, text }: LoadingProps) => {
  return (
    <Container>
      <Loading />
      <h2>{title}</h2>
      <p>{text}</p>
    </Container>
  );
};

export default LoadingBox;
