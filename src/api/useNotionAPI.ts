import { useEffect, useState } from 'react';
import axios from 'axios';

const useNotionAPI = (id: string) => {
  const [policyData, setPolicyData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const req = async () => {
    try {
      const response = await axios.post(`/v1/databases/${id}/query`, '', {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_NOTION_KEY}`,
          'Notion-Version': '2022-06-28',
        },
      });
      setPolicyData(response.data.results);
      setIsLoading(false);
      return response;
    } catch (error: any) {
      setIsError(true);
      setIsLoading(false);
      return error.response;
    }
  };

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      setIsError(false);
      req();
    }
  }, [id]);

  return [policyData, isLoading, isError];
};

export default useNotionAPI;
