import React, { useContext, useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import {
  ChartPieIcon,
  UsersIcon,
  GlobeAltIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  FolderIcon,
  SupportIcon,
  LogoutIcon,
  BellIcon,
  HomeIcon,
  TrendingUpIcon,
  ClipboardListIcon,
  KeyIcon,
  TemplateIcon,
  RefreshIcon,
  UserGroupIcon,
  MoonIcon,
  MailIcon,
  BriefcaseIcon,
} from '@heroicons/react/solid';
import {
  AcademicCapIcon,
  BookOpenIcon,
  CogIcon,
} from '@heroicons/react/outline';

import ProgramIcon from './ProgramIcon';
import Tooltip from './ToolTip';
import { UserContext } from '../hook/useAuth';
import CheckRole from '../utils/CheckRoles';
import SideNavLink from './SideNavLink';

function Sidebar({ style, toggle }: { style: string; toggle: () => void }) {
  const { logout } = useContext(UserContext);
  const [togglei, setTogglei] = useState(false);
  useEffect(() => {}, [togglei]);
  return (
    <div
      className={`${style} flex-col fixed h-[100%] pt-[3vh] lg:pt-[11vh] bg-white dark:bg-dark-bg border-r p-2 z-10 `}
    >
      <div className="pr-8 list-none">
        <SideNavLink onClick={toggle} name="Dashboard" to="/dashboard">
          <ChartPieIcon className="w-5 mr-2 " />
        </SideNavLink>
        <SideNavLink onClick={toggle} name="Tickets" to="/tickets">
          <MailIcon className="w-5 mr-2 " />
        </SideNavLink>

        {/* FOR SUPER ADMINS */}
        <CheckRole roles={['superAdmin']}>
          <SideNavLink
            onClick={toggle}
            name="Organizations"
            to="/organizations"
          >
            <HomeIcon className="w-5 mr-2 " />
          </SideNavLink>

          <SideNavLink
            onClick={toggle}
            name="Admins"
            data-testid="keppi"
            to="/admins"
          >
            <UsersIcon className="w-5 mr-2 " />
          </SideNavLink>
          <SideNavLink onClick={toggle} name="Domains" to="/domains">
            <GlobeAltIcon className="w-5 mr-2 " />
          </SideNavLink>
          {/* <SideNavLink onClick={toggle} name="Docs" to="/coordinatorDocs">
             <FolderIcon className="w-5 mr-2" />
          </SideNavLink> */}
        </CheckRole>

        {/* FOR ADMINS & COORDINATORS */}
        <CheckRole roles={['admin', 'coordinator']}>
          <SideNavLink onClick={toggle} to="/trainees" name="Trainees">
            <UserGroupIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
        </CheckRole>

        {/* FOR ADMINS */}
        <CheckRole roles={['admin']}>
          <SideNavLink onClick={toggle} to="/coordinators" name="Coordinators">
            <UsersIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} to="/teams" name="Teams">
            <UserGroupIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} to="/cohorts" name="Cohorts">
            <AcademicCapIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} to="/phases" name="Phases">
            <MoonIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} to="/programs" name="Programs">
            <ProgramIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} to="/admin/ratings" name="Ratings">
            <ClipboardListIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink
            onClick={toggle}
            to="/updated-ratings"
            name="Updated Ratings"
          >
            <RefreshIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} to="/grading" name="Grading System">
            <TemplateIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} to="/manage" name="Roles & Access">
            <KeyIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} name="Docs" to="/docs/admin">
            <FolderIcon className="w-5 mr-2 " />
          </SideNavLink>
        </CheckRole>

        {/* FOR COORDINATORS */}
        <CheckRole roles={['coordinator']}>
          {/* team cards */}
          <SideNavLink onClick={toggle} name="Teams" to="/cards">
            <UserGroupIcon className="w-5 mr-2 dark:text-dark-text-fill " />
          </SideNavLink>

          <SideNavLink onClick={toggle} to="/sessions" name="Sessions">
            <BookOpenIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} to="/ratings" name="Ratings">
            <ClipboardListIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink
            onClick={toggle}
            name="Attendance"
            to="/attendance-rating"
          >
            <ClipboardCheckIcon className="w-5 mr-2 " />
          </SideNavLink>

          <SideNavLink onClick={toggle} name="Docs" to="/docs">
            <FolderIcon className="w-5 mr-2" />
          </SideNavLink>
        </CheckRole>

        {/* manger role */}
        <CheckRole roles={['manager']}>
          <SideNavLink onClick={toggle} name="Teams" to="/team-cards">
            <UserGroupIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
        </CheckRole>

        {/* manger role */}
        <CheckRole roles={['manager']}>
          <SideNavLink onClick={toggle} name="Teams" to="/dashboard/team-cards">
            <UserGroupIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
        </CheckRole>

        {/* FOR TRAINEES */}
        <CheckRole roles={['trainee']}>
          <SideNavLink onClick={toggle} name="Attendance" to="">
            <ClipboardCheckIcon className="w-5 mr-2 " />
          </SideNavLink>
          <SideNavLink
            onClick={() => {
              toggle();
              setTogglei(true);
            }}
            name="Performance"
            to="/performance"
          >
            <TrendingUpIcon className="w-5 mr-2 " />
          </SideNavLink>

          <SideNavLink onClick={toggle} name="Docs" to="/docs/trainee">
            <FolderIcon className="w-5 mr-2 " />
          </SideNavLink>
        </CheckRole>

        <SideNavLink onClick={toggle} name="Calendar" to="/calendar">
          <CalendarIcon className="w-5 mr-2" />
        </SideNavLink>

        <CheckRole
          roles={['trainee', 'admin', 'coordinator', 'manager', 'user']}
        >
          <SideNavLink onClick={toggle} name="Help" to="/support">
            <SupportIcon className="w-5 mr-2 " />
          </SideNavLink>
        </CheckRole>

        {/* <SideNavLink onClick={toggle} name="Docs" to="/docs">
          <FolderIcon className="w-5 mr-2 " />
        </SideNavLink>

        <CheckRole
          roles={['trainee', 'admin', 'coordinator', 'manager', 'user']}
        >
          <SideNavLink onClick={toggle} name="Help" to="/support">
            <SupportIcon className="w-5 mr-2 " />
          </SideNavLink>
        </CheckRole>
        {/* Add icons */}
        <div className="flex flex-row mt-auto ml-10 list-none">
          <li className="px-2">
            <NavLink to="#link">
              <Tooltip message="Logout">
                <LogoutIcon
                  onClick={logout}
                  className="w-5 text-red-700 dark:text-red-600 hover:text-red-900"
                />
              </Tooltip>
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              to="/settings"
              className={(navData) => {
                if (navData.isActive) {
                  return 'flex flex-row font-bold text-primary dark:text-primary';
                }
                return 'flex flex-row dark:text-dark-text-fill';
              }}
            >
              <Tooltip message="Settings">
                <CogIcon className="w-5 hover:text-primary " onClick={toggle} />
              </Tooltip>
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;