import { FC } from 'react';
import { TestInfo } from '../data/psychologicalTest';
import styled from 'styled-components';

interface TestCardInfo {
  test: TestInfo;
}

const Card = styled.li`
  min-width: 35%;
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
  return (
    <Card>
      <img src={test.img} />
      <h3>{test.title}</h3>
      <div>{test.desc}</div>
    </Card>
  );
};

export default TestCard;
