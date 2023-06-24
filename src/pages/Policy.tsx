import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ToDiary from '../components/ToDiary';
import LoadingBox from '../components/LoadingBox';
import SubtitleBox from '../components/SubtitleBox';
import PolicyCard from '../components/policy/PolicyCard';
import { policyBoxData } from '../data/subtitleBoxData';
import { MainContent, PageBase } from '../styles/basePadding';
import { notionAPI } from '../api';

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
  const [policyData, setPolicyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    notionAPI
      .post(
        `/api/v1/databases/${process.env.REACT_APP_NOTION_DATABASE_ID}/query`,
        ''
      )
      .then((res) => {
        if (res.status === 200) {
          setPolicyData(res.data.results);
        } else {
          setIsError(true);
        }
        setIsLoading(false);
      });
  }, []);
  return (
    <PageBase>
      <SubtitleBox {...policyBoxData} theme="dark" />
      {isLoading ? (
        <LoadingBox title="정보를 불러오고 있습니다" text="" />
      ) : isError ? (
        <p>에러입니다</p>
      ) : (
        <CardBox>
          {policyData.map((policy: any) => (
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
