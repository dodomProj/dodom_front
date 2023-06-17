import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ToDiary from '../components/ToDiary';
import { MainContent, PageBase } from '../styles/basePadding';
import PolicyCard from '../components/policy/PolicyCard';
import PolicySubtitle from '../components/policy/PolicySubtitle';
import postData from '../api/postData';
import LoadingBox from '../components/LoadingBox';

const CardBox = styled(MainContent)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 2.5rem;
`;

const Policy = () => {
  const [policyData, setPolicyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    postData(
      `/api/v1/databases/${process.env.REACT_APP_NOTION_DATABASE_ID}/query`,
      '',
      {
        Authorization: `Bearer ${process.env.REACT_APP_NOTION_KEY}`,
        'Notion-Version': '2022-06-28',
      }
    ).then((res) => {
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
      <PolicySubtitle />
      {isLoading ? (
        <LoadingBox title="" text="" />
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
