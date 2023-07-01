import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { basePadding } from '../../styles/basePadding';

export const SubtitleContainer = styled.div`
  background-color: var(--primary);

  > div {
    ${basePadding}
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 4rem;

    > img {
      flex: 1;
      max-width: 33%;
      max-height: 100%;
      object-fit: contain;
    }

    > div {
      flex: 2;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }
    @media screen and (max-width: 480px) {
      > img {
        width: 50%;
        height: 50%;
        max-width: 50% !important;
        max-height: 50%;
      }
    }
  }
`;
const Container = styled(SubtitleContainer)`
  > div {
    cursor: pointer;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 4rem;

    > img {
      max-width: 25%;
    }
  }
`;
const Text = styled.div`
  text-align: center;

  > h1 {
    margin-bottom: 1rem;
  }
  > p {
    font-size: 1.5rem;
  }
`;

const ToDiary = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/diary')}>
      <div>
        <img src="/assets/chat.png" alt="" />
        <Text>
          <h1>솔직한 내 마음 일기, 작성해보기!</h1>
          <p>아무도 모르는 내 마음, 편하게 써봐요.</p>
        </Text>
      </div>
    </Container>
  );
};

export default ToDiary;
