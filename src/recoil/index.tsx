import { atom } from 'recoil';

export const answersState = atom<number[]>({
  key: 'answersState',
  default: [],
});

export const answerScoreState = atom<number[]>({
  key: 'answerScoreState',
  default: [],
});
