import styled from 'styled-components';
import { basePadding } from '../styles/basePadding';
import Loading from './Loading';

const Container = styled.main`
  ${basePadding}
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
const ConditionLoading = () => {
  return (
    <Container>
      <Loading />
      <h2>검사가 완료되었습니다 :)</h2>
      <p>검사 결과를 로딩중이니 잠시만 기다려주세요!</p>
    </Container>
  );
};

export default ConditionLoading;
