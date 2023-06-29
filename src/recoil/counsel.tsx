import { atom } from 'recoil';

export const selectedCounselorsState = atom<number[]>({
  key: 'selectedCounselors',
  default: [],
});
