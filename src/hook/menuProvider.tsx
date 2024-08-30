/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, ReactNode, useMemo, useState } from 'react';

interface Props {
  children?: ReactNode;
}

export const MenuContext = createContext<any>({
  minimized: false,
  showNav: true,
});

/* istanbul ignore next */
export function ThemeProvider({ children }: Props) {
  const [minimized, setMinimized] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const toggleMinMenu = () => setMinimized((p) => !p);

  const toggleNav = () => setShowNav((p) => !p);

  const contextValue = useMemo(
    () => ({
      minimized,
      setMinimized,
      toggleMinMenu,
      showNav,
      setShowNav,
      toggleNav,
    }),
    [minimized, setMinimized, toggleMinMenu, showNav, setShowNav, toggleNav],
  );
  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
}

export default ThemeProvider;
