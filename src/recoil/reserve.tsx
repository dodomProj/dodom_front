import { atom } from 'recoil';

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
    counselorId: 0,
  },
});

export const formTimeState = atom<TimeData[]>({
  key: 'formTime',
  default: [{ date: '', time: '', id: 0 }],
});
