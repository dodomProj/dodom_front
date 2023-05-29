import { atom } from 'recoil';

export const diaryTextState = atom<string>({
  key: 'diaryText',
  default: '',
});

export const diaryTipState = atom<boolean>({
  key: 'diaryTip',
  default: false,
});
