import { atom } from 'recoil';

export const counselCallCheck = atom<boolean>({
  key: 'counselCall',
  default: false,
});

export const counselMessageCheck = atom<boolean>({
  key: 'counselMessage',
  default: false,
});
