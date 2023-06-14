import { atom } from 'recoil';

export const reserveCallCheck = atom<boolean>({
  key: 'reserveCall',
  default: false,
});

export const reserveMessageCheck = atom<boolean>({
  key: 'reserveMessage',
  default: false,
});
