import styled from 'styled-components';
import ToDiary from '../components/common/ToDiary';
import LoadingBox from '../components/common/LoadingBox';
import SubtitleBox from '../components/common/SubtitleBox';
import PolicyCard from '../components/policy/PolicyCard';
import { policyBoxData } from '../data/subtitleBoxData';
import { MainContent, PageBase } from '../styles/basePadding';
import useNotionAPI from '../api/useNotionAPI';
import CategoryBox from '../components/common/CategoryBox';
import { errorData, policySubData } from '../data/categoryBoxData';

const CardBox = styled.div`
  margin-top: 3rem;
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

  const reduceText = (textArr: string[]) => {
    const string = textArr.reduce((a: string, c: string) => a + c[0]);
    return `${string}`.replace(/b$|,b$/, '');
  };

  return (
    <PageBase>
      <SubtitleBox {...policyBoxData} theme="dark" />
      <MainContent>
        <CategoryBox {...policySubData} />
        {isLoading ? (
          <LoadingBox title="정보를 불러오고 있습니다" text="" />
        ) : isError ? (
          <CategoryBox {...errorData} />
        ) : (
          <CardBox>
            {Array.isArray(policyData) &&
              policyData.map((policy: any) => (
                <PolicyCard
                  key={policy.id}
                  img={policy.img && policy.img[0][0]}
                  title={reduceText(policy.이름)}
                  text={reduceText(policy.설명)}
                  url={policy.id}
                />
              ))}
          </CardBox>
        )}
      </MainContent>
      <ToDiary />
    </PageBase>
  );
};

export default Policy;
