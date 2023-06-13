import styled from 'styled-components';
import CategoryBox from '../CategoryBox';
import useTestResult from '../../util/useTestResult';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, BarElement, LinearScale);

const labels = [
  '문제 중심적',
  '정서 중심적',
  '사회적 지지 추구',
  '소망 추구적',
];

const ChartResultBox = styled.div`
  display: flex;

  > canvas {
    padding-right: 2rem;
    max-width: 50%;
    height: 20rem;
  }
`;

const Text = styled.div`
  font-size: 1.2rem;
  padding-bottom: 2rem;
  align-self: end;

  > p:first-child {
    font-weight: bold;
  }
`;

const StressManageResult = () => {
  const { scoreArr, common, type } = useTestResult();
  if (!scoreArr || !common?.total || !type) return null;

  const data = {
    labels: labels.map((label, i) => (type.level === i ? '' : label)),
    datasets: [
      {
        data: scoreArr,
        backgroundColor: labels.map((_, i) =>
          type.level === i ? 'rgba(255, 194, 36, 1)' : 'rgba(255, 194, 36, 0.6)'
        ),
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end',
        color: 'var(--black)',
        font: {
          size: 24,
          weight: 'bold',
          family: 'Pretendard-medium',
        },
        formatter: function (_: any, context: any) {
          return type.level === context.dataIndex ? labels[type.level] : '';
        },
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: 'var(--black)',
          font: {
            size: 16,
            weight: 'bold',
            family: 'Pretendard-medium',
          },
        },
      },
      y: {
        max: common.total * 1.15,
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  } as const;

  return (
    <>
      <CategoryBox
        title={type.title}
        text={type.subTitle}
        textsize="1.5rem"
        marginbottom="10rem"
      />
      <ChartResultBox>
        <Bar options={options} data={data} plugins={[ChartDataLabels]} />
        <Text>
          {common.text.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </Text>
      </ChartResultBox>
    </>
  );
};

export default StressManageResult;
