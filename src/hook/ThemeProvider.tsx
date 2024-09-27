/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, ReactNode, useState } from 'react';
import useDarkMode, {
  getInitialTheme,
  setThemeHeader,
  ThemeType,
} from './useDarkMode';

interface Props {
  children?: ReactNode;
}

export const ThemeContext = createContext<any>(getInitialTheme);

/* istanbul ignore next */
export function ThemeProvider({ children }: Props) {
  const [colorTheme, changeTheme] = useDarkMode();

  const setTheme = (val: ThemeType) => {
    changeTheme((prev) => {
      setThemeHeader(val, prev);
      return val;
    });
  };

  return (
    <ThemeContext.Provider value={{ colorTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
