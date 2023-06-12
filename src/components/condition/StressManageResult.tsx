import styled from 'styled-components';
import useTestResult from '../../util/useTestResult';
import CategoryBox from '../CategoryBox';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { inherits } from 'util';

ChartJS.register(CategoryScale, BarElement, LinearScale);

const labels = [
  '문제 중심적',
  '정서 중심적',
  '사회적 지지 추구',
  '소망 추구적',
];

const Text = styled.div`
  font-size: 1.2rem;

  > p:first-child {
    font-weight: bold;
  }
`;

const StressManageResult = () => {
  // const { scoreArr, common, type } = useTestResult();
  // if (!scoreArr || !common?.total || !type) return null;
  const scoreArr = [13, 18, 15, 15];
  const common = {
    text: [
      '스트레스 대처방식은 좋고/나쁨, 옳고/그름이 없습니다.',
      '각자의 스트레스 유형에 맞는 대처방식을 취하는 것이 좋습니다. 예를 들어, 스트레스 원인이…레스를 받는 것보다 정서 중심적 대처나 소망 추구적 대처를 취하는 것이 유용할 것입니다.',
    ],
    total: 24,
  };
  const type = {
    level: 1,
    score: [5, 6, 15, 16, 23, 24],
    subTitle:
      '사회적 지지 추구란 스트레스가 유발되는 문제나 상황에 직접적으로 대응하기 위하여 주변 사람들이나 문제를 해결할 수 있는 사람들과 이야기를 주고받으면서 문제를 해결하려는 것을 말합니다.',
    title: '당신은 사회적 지지 추구형 입니다!',
  };

  // TODO: 객체 밖으로 빼고 안에서는 값추가만 하기
  // TODO: label position 변경 필요
  // TODO: 공통 설명 내용 잘림
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: scoreArr,
        backgroundColor: labels.map((_, i) =>
          type.level === i ? 'rgba(255, 194, 36, 1)' : 'rgba(255, 194, 36, 0.6)'
        ),
      },
    ],
  };
  const options = {
    responsive: true,
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
        // position: 'top',
      },
      y: {
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
        marginbottom="12.5rem"
      />
      <div>
        <Bar options={options} data={data} />
        <Text>
          {common.text.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </Text>
      </div>
    </>
  );
};

export default StressManageResult;
