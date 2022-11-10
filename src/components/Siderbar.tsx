import React from 'react';
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

function Sidebar({ style }: { style: string }) {
  return (
    <div
      className={`${style} flex-col fixed h-[100%] pt-16 bg-white dark:bg-dark-bg border-r p-4`}
    >
      <div className="list-none pr-8">
        <li className="mb-4 hover:text-primary">
          <NavLink to="to" className="flex flex-row">
            <ChartPieIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">
              Dashboard
            </span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to="to" className="flex flex-row">
            <UserGroupIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">
              Organizations
            </span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to="to" className="flex flex-row">
            <UsersIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">Admins</span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to="to" className="flex flex-row">
            <GlobeAltIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">Domains</span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to="to" className="flex flex-row">
            <CalendarIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">Calendar</span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to="to" className="flex flex-row">
            <FolderIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">Docs</span>
          </NavLink>
        </li>
        <li className="mb-4 hover:text-primary">
          <NavLink to="to" className="flex flex-row">
            <SupportIcon className="w-5 mr-2 dark:text-dark-text-fill" />
            <span className="text-base dark:text-dark-text-fill">Help</span>
          </NavLink>
        </li>
      </div>
      <div className="flex flex-row ml-10 mt-auto list-none">
        <li>
          <NavLink to="to">
            <AdjustmentsIcon className="w-5 mr-2 hover:text-primary dark:text-dark-text-fill" />
          </NavLink>
        </li>
        <li>
          <NavLink to="to">
            <CogIcon className="w-5 hover:text-primary dark:text-dark-text-fill" />
          </NavLink>
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
