import { FC } from 'react';
import { TestInfo } from '../data/psychologicalTest';
import styled from 'styled-components';

interface TestCardInfo {
  test: TestInfo;
}

const Card = styled.article`
  height: 600px;
  background: var(--secondary);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;

  > h3 {
    font-size: 24px;
    font-weight: normal;
    margin: 0.5rem 0;
  }
`;

const TestCard: FC<TestCardInfo> = ({ test }) => {
  const { img, title, text } = test;
  return (
    <Card className="slider-item">
      <img src={img} />
      <h3>{title}</h3>
      {text.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </Card>
  );
};

export default TestCard;
