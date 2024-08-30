import React, { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { ThemeContext } from '../hook/ThemeProvider';

type props = {
  className?: string;
};

function ToggleThemeButton({ className = '' }: props) {
  const { colorTheme, setTheme } = useContext(ThemeContext);

  /* istanbul ignore next */
  const handleTheme = () => {
    setTheme(colorTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      id="theme-switch"
      className="min-w-fit px-4 cursor-pointer font-serif"
      onClick={() => handleTheme()}
    >
      {colorTheme === 'dark' ? (
        <MoonIcon className={`w-8 ${className}`} />
      ) : (
        <SunIcon className={`w-8 ${className}`} />
      )}
    </button>
  );
}

export default ToggleThemeButton;
