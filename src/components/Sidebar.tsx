import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import {
  ChartPieIcon,
  UserGroupIcon,
  UsersIcon,
  GlobeAltIcon,
  InboxInIcon,
  CalendarIcon,
  FolderIcon,
  AdjustmentsIcon,
  SupportIcon,
} from '@heroicons/react/solid';
import { CogIcon } from '@heroicons/react/outline';

const Sidebar = ({ style }: { style: string }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`${style} flex-col fixed h-[100%] lg:w-[30vh] pt-[3vh] lg:pt-[11vh] bg-white dark:bg-dark-bg border-r py-4 pl-4`}
    >
      <div className="list-none pr-8">
        <li className="mb-4 hover:text-primary">
          <NavLink to={'#link'} className="flex flex-row">
            <ChartPieIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">
              {t('Dashboard')}
            </span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to={'#link'} className="flex flex-row">
            <UserGroupIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">
              {t('Organizations')}
            </span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to={'#link'} className="flex flex-row">
            <UsersIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">
              {t('Admins')}
            </span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to={'#link'} className="flex flex-row">
            <GlobeAltIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">
              {'Domains'}
            </span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to={'#link'} className="flex flex-row">
            <InboxInIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">
              {t('Notifications')}
            </span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to={'#link'} className="flex flex-row">
            <CalendarIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">
              {t('Calendar')}
            </span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to={'#link'} className="flex flex-row">
            <FolderIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">
              {t('Docs')}
            </span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to={'#link'} className="flex flex-row">
            <SupportIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">
              {t('Help')}
            </span>
          </NavLink>
        </li>
      </div>
      <div className="flex flex-row ml-10 mt-auto list-none">
        <li>
          <NavLink to={'#link'}>
            <AdjustmentsIcon className="w-5 mr-2 hover:text-primary dark:text-dark-text-fill" />
          </NavLink>
        </li>
        <li>
          <NavLink to="settings">
            <CogIcon className="w-5 hover:text-primary dark:text-dark-text-fill" />
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
