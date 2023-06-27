import styled from 'styled-components';
import { useRecoilValueLoadable } from 'recoil';
import { useLocation } from 'react-router-dom';
import ToDiary from '../components/ToDiary';
import CategoryBox from '../components/CategoryBox';
import SubtitleBox from '../components/SubtitleBox';
import ReserveButtonBox from '../components/reserve/ReserveButtonBox';
import CounselorContainer from '../components/counsel/CounselorContainer';
import { MainContent, PageBase } from '../styles/basePadding';
import { recommendedsState } from '../recoil/reserve';
import { counselorTags } from '../data/counselors';
import { counselBoxData } from './../data/subtitleBoxData';
import { recommended } from '../data/categoryBoxData';

const CounselBox = styled(PageBase)`
  display: flex;
  flex-direction: column;
`;
const Mid = styled(MainContent)`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
  width: 100%;
`;
const ReviewBox = styled.aside`
  background-color: var(--third);
`;

const Counsel = () => {
  const { pathname } = useLocation();
  const { state, contents: recommendeds } =
    useRecoilValueLoadable(recommendedsState);

  return (
    <CounselBox>
      <SubtitleBox {...counselBoxData} />
      <Mid>
        {pathname.includes('reserve') && (
          <CounselorContainer
            categoryText={recommended}
            carouselData={state === 'hasValue' ? recommendeds : []}
          />
        )}
        {counselorTags.map((tag) => (
          <CounselorContainer key={tag.tagId} carouselData={tag} />
        ))}
      </Mid>
      {pathname.includes('reserve') ? (
        <ReserveButtonBox />
      ) : (
        <>
          <ReviewBox>
            <Mid>
              <CategoryBox
                title="DODOM 상담 후기"
                text="DODOM의 상담사와 함께한 실제 후기에요.
도돔을 이용한 청년들의 후기가 최신순으로 업데이트 되고 있습니다."
              />
              <div>후기 1</div>
              <div>후기 2</div>
              <div>후기 3</div>
            </Mid>
          </ReviewBox>
          <ToDiary />
        </>
      )}
    </CounselBox>
  );
};

export default Counsel;
