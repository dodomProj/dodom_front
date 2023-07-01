import styled from 'styled-components';
import CategoryBox from '../common/CategoryBox';
import { errorData, reviewSubData } from '../../data/categoryBoxData';
import { basePadding } from '../../styles/basePadding';
import ReviewEl from './ReviewEl';
import useGet from '../../api/useGet';
import LoadingBox from '../common/LoadingBox';

const Box = styled.aside`
  background-color: var(--third);

  > div {
    ${basePadding}
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    gap: 5.5rem;
  }
`;
const ContentBox = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const reviewsOrder = [
  { img: '/assets/review_img_0.png', firstEl: 'img' },
  { img: '/assets/review_img_1.png', firstEl: 'review' },
  { img: '/assets/review_img_2.png', firstEl: 'info' },
];

interface Review {
  name: string;
  appointmentAt: string;
  review: string;
}

const ReviewBox = () => {
  const [reviewsData, isLoading, isError] = useGet('/reviews');

  return (
    <Box>
      <div>
        <CategoryBox {...reviewSubData} />
        {isLoading ? (
          <LoadingBox
            title="리뷰를 불러오고 있습니다"
            text="잠시만 기다려주세요!"
          />
        ) : isError ? (
          <CategoryBox {...errorData} />
        ) : (
          Array.isArray(reviewsData) && (
            <ContentBox>
              {reviewsData.slice(0, 3).map((review: Review, idx: number) => (
                <ReviewEl
                  key={review.appointmentAt}
                  {...reviewsOrder[idx]}
                  {...review}
                />
              ))}
            </ContentBox>
          )
        )}
      </div>
    </Box>
  );
};

export default ReviewBox;
