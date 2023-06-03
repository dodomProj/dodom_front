import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { basePadding } from '../styles/basePadding';

export const SubtitleContainer = styled.div`
  ${basePadding}
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: var(--primary);

  > img {
    flex: 0.5;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
    padding: 3rem;
  }
`;
const Container = styled(SubtitleContainer)`
  cursor: pointer;
`;
const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-bottom: 2.5rem;
  }
`;

const ToDiary = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/diary')}>
      <img src="/assets/chat.png" alt="" />
      <Text>
        <h1>솔직한 내 마음 일기, 작성해보기!</h1>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Diam eleifend purus enim diam faucibus.</p>
        </div>
      </Text>
    </Container>
  );
};

export default ToDiary;
