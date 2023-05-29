import { atom, SetterOrUpdater } from 'recoil';

export const headerThemeState = atom<string>({
  key: 'headerTheme',
  default: 'dark',
});

export type PageProps = {
  themeSetter: SetterOrUpdater<string>;
};
