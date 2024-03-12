import React, { ReactNode, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { MenuContext } from '../hook/menuProvider';

interface Props {
  to: string;
  name?: string;
  children: ReactNode;
  onClick: () => void;
  className?: string;
  // any other props that come into the component
}

export default function SideNavLink({
  to,
  name,
  onClick,
  children,
  className = '',
  ...props
}: Props) {
  const { t } = useTranslation();
  const { minimized } = useContext(MenuContext);
  return (
    <li className={`${className}`} {...props}>
      <NavLink
        onClick={onClick}
        to={to}
        className={(navData) =>
          `py-2 mb-1 pl-4 pr-5 transition-all group-hover:transition-all hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-30 flex flex-row gap-4 ${
            navData.isActive ? 'font-bold text-primary' : ''
          }`
        }
      >
        {children}
        {name && (
          <span className={`text-base ${minimized ? 'lg:hidden' : ''}`}>
            {t(name)}
          </span>
        )}
      </NavLink>
    </li>
  );
}
