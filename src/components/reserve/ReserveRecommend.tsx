import styled from 'styled-components';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { Box } from '../diary/DiaryEditBox';
import CounselorCard from '../counsel/CounselorCard';
import MoreInfoArrow from '../MoreInfoArrow';
import ReserveButtonBox from './ReserveButtonBox';
import {
  RecommendedsData,
  formDataState,
  recommendedsState,
} from '../../recoil/reserve';

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

const ReserveRecommend = () => {
  const [formData, setFormData] = useRecoilState(formDataState);
  const { state, contents: recommendeds } =
    useRecoilValueLoadable(recommendedsState);

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
        toUri="/reserve/counsel"
        onClick={() => setFormData({ ...formData, counselorId: -1 })}
        infoText="더보기"
      />
      <CardBox>
        {state === 'hasValue' &&
          recommendeds.map((recommended: RecommendedsData) => (
            <CounselorCard
              {...recommended}
              key={recommended.counselorId}
              onClick={() =>
                formData.counselorId === recommended.counselorId
                  ? setFormData({ ...formData, counselorId: -1 })
                  : setFormData({
                      ...formData,
                      counselorId: recommended.counselorId,
                    })
              }
              grayscale={
                formData.counselorId !== -1 &&
                formData.counselorId !== recommended.counselorId
              }
              selectedCard={formData.counselorId}
            />
          ))}
      </CardBox>
      <ReserveButtonBox />
    </RecommendBox>
  );
};

export default ReserveRecommend;
