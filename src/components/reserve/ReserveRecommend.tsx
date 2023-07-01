import styled from 'styled-components';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { Box } from '../diary/DiaryEditBox';
import Carousel from '../common/Carousel';
import MoreInfoArrow from '../common/MoreInfoArrow';
import ReserveButtonBox from './ReserveButtonBox';
import CounselorCard from '../counsel/CounselorCard';
import { formDataState, recommendedsState } from '../../recoil/reserve';

const RecommendBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const TitleBox = styled.div`
  display: flex;
  gap: 1.2rem;

  > img {
    max-width: 7.5rem;
    margin-top: auto;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  margin-top: 4rem;
  margin-bottom: 2rem;
`;
const carouselSettings = {
  slidesPerView: 1,
  spaceBetween: 34,
  breakpoints: {
    481: {
      slidesPerView: 1.15,
    },
    769: {
      slidesPerView: 2.1,
    },
    1057: {
      slidesPerView: 3,
    },
  },
};

const ReserveRecommend = () => {
  const [formData, setFormData] = useRecoilState(formDataState);
  const { state, contents: recommendeds } =
    useRecoilValueLoadable(recommendedsState);

  return (
    <RecommendBox>
      <TitleBox>
        <img src={'/assets/counselorpic.svg'} alt="" />
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
        {state === 'hasValue' && (
          <Carousel
            spread={false}
            settings={carouselSettings}
            dataArr={recommendeds.counselors}
            Card={CounselorCard}
            cardClick={(id: number) =>
              formData.counselorId === id
                ? setFormData({ ...formData, counselorId: -1 })
                : setFormData({
                    ...formData,
                    counselorId: id,
                  })
            }
            selectedCard={formData.counselorId}
            grayscale={true}
          />
        )}
      </CardBox>
      <ReserveButtonBox />
    </RecommendBox>
  );
};

export default ReserveRecommend;
