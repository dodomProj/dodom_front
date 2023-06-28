import { useEffect, useState } from 'react';
import { notionAPI } from '.';

const useNotionAPI = (id: string) => {
  const [policyData, setPolicyData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const req = async () => {
    try {
      const response = await notionAPI(`/${id}`);
      const data: any = Object.values(response.data).find(
        (obj: any) => obj.collection
      );
      setPolicyData(data.collection.data);
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
