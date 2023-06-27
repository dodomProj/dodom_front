import { useEffect, useState } from 'react';
import { TagsProps } from '../data/counselors';
import { dodomAPI } from '.';
import { ResCounselorData } from '../recoil/reserve';

const useAllCounselors = (
  tagData: TagsProps[]
): [TagsProps[], boolean, boolean] => {
  const [data, setdata] = useState(tagData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const parallelReqs = async () => {
    const requests = data.map((el) =>
      dodomAPI.get(`/counselors?tagId=${el.tagId}`)
    );
    try {
      const responses = await Promise.all(requests);
      const newOne = [...data];
      responses.forEach((response, i) => {
        newOne[i].counselors = response.data.map((one: ResCounselorData) => {
          return {
            ...one,
            ...newOne[i].counselors.find(
              (counselor) => counselor.counselorId === one.counselorId
            ),
          };
        });
      });
      setdata(newOne);
      setIsLoading(false);
    } catch (error: any) {
      setIsError(true);
      setIsLoading(false);
      return error.response;
    }
  };

  useEffect(() => {
    if (tagData) {
      setIsLoading(true);
      setIsError(false);
      parallelReqs();
    }
  }, [tagData]);

  return [data, isLoading, isError];
};

export default useAllCounselors;
