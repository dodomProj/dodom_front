import { atom } from 'recoil';

export const diaryTextState = atom<string>({
  key: 'diaryText',
  default: '',
});

export const tipHoverState = atom<boolean>({
  key: 'tipHover',
  default: false,
});

export const diarySubmitState = atom<boolean>({
  key: 'diarySubmit',
  default: false,
});
