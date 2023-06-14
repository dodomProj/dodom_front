import styled from 'styled-components';
import { Box } from '../diary/DiaryEditBox';
import Button from '../Button';
import ToPolicyCard from '../ToPolicyCard';
import { useNavigate } from 'react-router';

const ReservedBox = styled(Box)`
  padding-bottom: 6.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const Image = styled.div``;

const Text = styled.div`
  text-align: center;
  p {
    font-size: 24px;
    margin-top: 1rem;
  }
`;

const CounselReserved = () => {
  const navigate = useNavigate();
  return (
    <>
      <ReservedBox>
        <Image>
          <img src={process.env.PUBLIC_URL + '/assets/reserved.svg'} />
        </Image>
        <Text>
          <h2>상담 예약이 완료 되었습니다:)</h2>
          <p>자세한 사항은 문자 메세지를 확인해주세요.</p>
        </Text>
        <Button text="메인으로" onClick={() => navigate('/')} />
      </ReservedBox>
      <ToPolicyCard />
    </>
  );
};

export default CounselReserved;
