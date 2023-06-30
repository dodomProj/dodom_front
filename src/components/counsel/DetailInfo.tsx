import styled from 'styled-components';

const DetailInfoBox = styled.div`
  p:first-child {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }
`;

interface DetailProps {
  title: string;
  text?: string;
}

const DetailInfo = ({ title, text = '업데이트 예정입니다' }: DetailProps) => {
  return (
    <DetailInfoBox>
      <p>{title}</p>
      <p>{text}</p>
    </DetailInfoBox>
  );
};

export default DetailInfo;
