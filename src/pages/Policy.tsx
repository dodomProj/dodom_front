import styled from 'styled-components';
import ToDiary from '../components/ToDiary';
import LoadingBox from '../components/LoadingBox';
import SubtitleBox from '../components/SubtitleBox';
import PolicyCard from '../components/policy/PolicyCard';
import { policyBoxData } from '../data/subtitleBoxData';
import { MainContent, PageBase } from '../styles/basePadding';
import useNotionAPI from '../api/useNotionAPI';

const CardBox = styled(MainContent)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Policy = () => {
  const [policyData, isLoading, isError] = useNotionAPI(
    process.env.REACT_APP_NOTION_DATABASE_ID || ''
  );

  return (
    <PageBase>
      <SubtitleBox {...policyBoxData} theme="dark" />
      {isLoading ? (
        <LoadingBox title="정보를 불러오고 있습니다" text="" />
      ) : isError ? (
        <p>에러입니다</p>
      ) : (
        <CardBox>
          {Array.isArray(policyData) &&
            policyData.map((policy: any) => (
              <PolicyCard
                key={policy.id}
                img={policy.cover?.file.url}
                policyInfo={policy.properties}
                url={policy.public_url}
              />
            ))}
        </CardBox>
      )}
      <ToDiary />
    </PageBase>
  );
};

export default Policy;
