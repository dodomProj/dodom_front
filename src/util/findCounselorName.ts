import { counselorTags } from '../data/counselors';

export const findCounselorName = (id: number) => {
  const counselors = counselorTags.map((tag) => tag.counselors).flat();
  return (
    counselors.find((counselor) => counselor.counselorId === id)?.name || ''
  );
};
