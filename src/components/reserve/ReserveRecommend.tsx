import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import Button from '../Button';
import CounselorCard from '../counsel/CounselorCard';
import { Box } from '../diary/DiaryEditBox';
import MoreInfoArrow from '../MoreInfoArrow';
import { formDataState } from '../../recoil/reserve';
import { tmpCounselor } from '../../data/tmpCounselor';
import postData from '../../api/postData';

const RecommendBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const TitleBox = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  > p {
    font-size: 1.5rem;
  }
`;
const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  margin-bottom: 5rem;
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 100%;

  button {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const ReserveRecommend = () => {
  const [formData, setFormData] = useRecoilState(formDataState);
  const SubmitReserveForm = () => {
    console.log(formData);
    // postData('/appointments', formData);
  };
  return (
    <RecommendBox>
      <TitleBox>
        <img src={process.env.PUBLIC_URL + '/assets/counselorpic.svg'} />
        <TextBox>
          <h2>추천 상담사</h2>
          <p>적합한 상담사를 추천해드려요!</p>
        </TextBox>
      </TitleBox>
      <MoreInfoArrow
        toUri="/counsel"
        onClick={() => setFormData({ ...formData, counselorId: 0 })}
        infoText="더보기"
      />
      <CardBox>
        {tmpCounselor.slice(0, 3).map((el) => (
          <CounselorCard
            {...el}
            key={el.counselorId}
            onClick={() =>
              formData.counselorId === el.counselorId
                ? setFormData({ ...formData, counselorId: 0 })
                : setFormData({ ...formData, counselorId: el.counselorId })
            }
            grayscale={
              !!formData.counselorId && formData.counselorId !== el.counselorId
            }
            emphatic={formData.counselorId === el.counselorId}
          />
        ))}
      </CardBox>
      <ButtonBox>
        <Button
          white={true}
          text="랜덤 배정받기"
          onClick={() => (
            setFormData({
              ...formData,
              counselorId: tmpCounselor[0].counselorId,
            }),
            SubmitReserveForm()
          )}
        />
        <Button text="상담 예약하기" onClick={SubmitReserveForm} />
      </ButtonBox>
    </RecommendBox>
  );
};

export default ReserveRecommend;
