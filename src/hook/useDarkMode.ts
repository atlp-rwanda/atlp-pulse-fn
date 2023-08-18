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
<<<<<<< HEAD
  const [colorTheme, changeTheme] = useState<ThemeType>(getInitialTheme());
  setThemeHeader(colorTheme);
=======
  const [theme, setTheme] = useState(getInitialState);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    root.setAttribute('data-theme', theme);
  }, [theme]);
>>>>>>> f2b9701 (github activity (#244))

  return [colorTheme, changeTheme] as const;
};

export default useDarkMode;
