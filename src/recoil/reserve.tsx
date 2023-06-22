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
  tel: string;
  email: string;
  etc: string;
  call: boolean;
  message: boolean;
}

export const formDataState = atom<FormData>({
  key: 'formData',
  default: {
    name: '',
    tel: '',
    email: '',
    etc: '',
    call: false,
    message: false,
  },
});

export const formTimeState = atom<TimeData[]>({
  key: 'formTime',
  default: [{ date: '', time: '', id: 0 }],
});
