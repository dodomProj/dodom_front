import { atom, selector } from 'recoil';
import { dodomAPI } from '../api';
import { CounselorProps, TagsProps, counselorTags } from '../data/counselors';

export const reserveCallCheck = atom<boolean>({
  key: 'reserveCall',
  default: false,
});

export const reserveMessageCheck = atom<boolean>({
  key: 'reserveMessage',
  default: false,
});

// interface Todo {
//   id: number;
//   content: string;
//   completed: boolean;
// }

export interface TimeData {
  date: string;
  time: string;
  id: number;
}

export interface FormData {
  name: string;
  contact: string;
  result: string;
  email: string;
  inquiry: string;
  method: string;
  counselorId: number;
}

export const formDataState = atom<FormData>({
  key: 'formData',
  default: {
    name: '',
    contact: '',
    result: '',
    email: '',
    inquiry: '',
    method: '',
    counselorId: -1,
  },
});

export const formTimeState = atom<TimeData[]>({
  key: 'formTime',
  default: [{ date: '', time: '', id: 0 }],
});

export interface ResCounselorData {
  counselorId: number;
  career: number;
  introduce: string;
  score: number;
}

export interface RecommendedsData extends CounselorProps, ResCounselorData {}

export const counselKeywordState = atom<string>({
  key: 'counselorKeyword',
  default: '',
});

export const recommendedsState = selector<RecommendedsData[]>({
  key: 'recommendeds',
  get: async ({ get }) => {
    const keyword = get(counselKeywordState);
    if (!keyword) return [];
    const tagData: TagsProps | undefined = counselorTags.find(
      (tag) => tag.name === (keyword === 'depression' ? keyword : 'health')
    );
    if (!tagData) return [];

    const res = await dodomAPI(`counselors?tagId=${tagData.tagId}`);
    const data = res.data
      .sort((a: ResCounselorData, b: ResCounselorData) => b.score - a.score)
      .slice(0, 3);

    return data.map((one: ResCounselorData) => {
      return {
        ...one,
        ...tagData.counselors.find(
          (counselor) => counselor.counselorId === one.counselorId
        ),
      };
    });
  },
});
