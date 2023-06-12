import { atom, SetterOrUpdater } from 'recoil';

export const headerThemeState = atom<string>({
  key: 'headerTheme',
  default: 'dark',
});

export type PageProps = {
  themeSetter: SetterOrUpdater<string>;
};

export const answersState = atom<number[]>({
  key: 'answersState',
  default: [],
});

export const answerScoreState = atom<number[]>({
  key: 'answerScoreState',
  default: [],
});
