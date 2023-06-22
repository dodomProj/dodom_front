import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { TestInfo } from '../../data/psychologicalTest';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: var(--secondary);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 2.5rem;
  cursor: pointer;

  > img {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  > h3 {
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0.5rem 0;
  }
`;
const MoreInfo = styled.p`
  font-size: 0.75rem;
  text-align: end;
`;

const TestCard = ({ id, img, title, text, time }: TestInfo) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/condition/${id}`)}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      {text.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
      <MoreInfo>예상시간 {time}분</MoreInfo>
    </Card>
  );
};

export default TestCard;
