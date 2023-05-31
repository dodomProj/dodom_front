import styled from 'styled-components';
import { SubtitleContainer } from './SubtitleBox';
import { useNavigate } from 'react-router-dom';

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
      <img src="" />
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
