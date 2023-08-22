import { useState } from 'react';

export type ThemeType = 'dark' | 'light';

export const getInitialTheme = (): ThemeType | any => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (storedPrefs) return storedPrefs;
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) return 'dark';
    return 'light';
  }
  return 'light';
};

export const setThemeHeader = (newTheme: ThemeType, oldTheme?: ThemeType) => {
  const root = window.document.documentElement;
  localStorage.setItem('color-theme', newTheme);
  if (oldTheme) root.classList.remove(oldTheme);
  root.classList.add(newTheme);
  root.setAttribute('data-theme', newTheme);
};

const useDarkMode = () => {
  const [colorTheme, changeTheme] = useState<ThemeType>(getInitialTheme());
  setThemeHeader(colorTheme);

  return [colorTheme, changeTheme] as const;
};

export default useDarkMode;
