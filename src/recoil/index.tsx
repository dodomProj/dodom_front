import { atom, SetterOrUpdater } from 'recoil';

export const headerThemeState = atom<string>({
  key: 'headerTheme',
  default: 'dark',
});

export const diaryTextState = atom<string>({
  key: 'diaryText',
  default: '',
});

export type PageProps = {
  themeSetter: SetterOrUpdater<string>;
};
