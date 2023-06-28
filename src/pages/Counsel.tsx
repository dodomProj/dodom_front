import { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import ToDiary from '../components/ToDiary';
import ReviewBox from '../components/counsel/ReviewBox';
import LoadingBox from '../components/LoadingBox';
import CategoryBox from '../components/CategoryBox';
import SubtitleBox from '../components/SubtitleBox';
import ReserveButtonBox from '../components/reserve/ReserveButtonBox';
import CounselorContainer from '../components/counsel/CounselorContainer';
import { MainContent, PageBase } from '../styles/basePadding';
import { counselorTags } from '../data/counselors';
import { counselBoxData } from './../data/subtitleBoxData';
import { errorData } from '../data/categoryBoxData';
import { formDataState, recommendedsState } from '../recoil/reserve';
import useAllCounselors from '../api/useAllCounselors';

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

const Counsel = () => {
  const { pathname } = useLocation();
  const { state, contents: recommendeds } =
    useRecoilValueLoadable(recommendedsState);
  const [counselorTagsData, isLoading, isError] =
    useAllCounselors(counselorTags);
  const formData = useRecoilValue(formDataState);
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/reserve/counsel') {
      if (formData.name) {
        !Object.values(formData).every((value) => value) &&
          navigate('/counsel');
      } else navigate('/counsel');
    }
  }, [formData, pathname]);

  return (
    <CounselBox>
      <SubtitleBox {...counselBoxData} />
      <Mid>
        {pathname.includes('reserve') && state === 'hasValue' && (
          <CounselorContainer counselorsData={recommendeds} />
        )}
        {isLoading ? (
          <LoadingBox
            title="상담사 정보를 불러오고 있습니다"
            text="잠시만 기다려주세요!"
          />
        ) : isError ? (
          <CategoryBox {...errorData} />
        ) : (
          counselorTagsData.map((tag) => (
            <CounselorContainer key={tag.tagId} counselorsData={tag} />
          ))
        )}
      </Mid>
      {pathname.includes('reserve') ? (
        <ReserveButtonBox />
      ) : (
        <>
          <ReviewBox />
          <ToDiary />
        </>
      )}
    </CounselBox>
  );
};

export default Counsel;
