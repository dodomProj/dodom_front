import { useEffect, useState } from 'react';
import { dodomAPI } from '.';

const useGet = (uri: string) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const req = async () => {
    try {
      const response = await dodomAPI(`${uri}`);
      setData(response.data);
      setIsLoading(false);
      return response;
    } catch (error: any) {
      setIsError(true);
      setIsLoading(false);
      return error.response;
    }
  };

  useEffect(() => {
    if (uri) {
      setIsLoading(true);
      setIsError(false);
      req();
    }
  }, [uri]);

  return [data, isLoading, isError];
};

export default useGet;
