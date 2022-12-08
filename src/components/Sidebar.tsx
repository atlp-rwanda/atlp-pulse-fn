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
  MoonIcon
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
      className={`${style} flex-col fixed h-[100%] pt-[3vh] lg:pt-[11vh] bg-white dark:bg-dark-bg border-r p-2`}
    >
      <div className="list-none pr-8">
        <SideNavLink onClick={toggle} name="Dashboard" to="/dashboard/">
          <ChartPieIcon className="w-5 mr-2 " />
        </SideNavLink>

        {/* FOR SUPER ADMINS */}
        <CheckRole roles={['superAdmin']}>
          <SideNavLink
            onClick={toggle}
            name="Organizations"
            to="/dashboard/organizations"
          >
            <HomeIcon className="w-5 mr-2 " />
          </SideNavLink>

          <SideNavLink onClick={toggle} name="Admins" data-testid="keppi" to="/dashboard/admins">
            <UsersIcon className="w-5 mr-2 " />
          </SideNavLink>
          <SideNavLink onClick={toggle} name="Domains" to="/dashboard/domains">
            <GlobeAltIcon className="w-5 mr-2 " />
          </SideNavLink>
        </CheckRole>

        {/* FOR ADMINS & COORDINATORS */}
        <CheckRole roles={['admin', 'coordinator']}>
          <SideNavLink
            onClick={toggle}
            to="/dashboard/trainees"
            name="Trainees"
          >
            <UserGroupIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
        </CheckRole>

        {/* FOR ADMINS */}
        <CheckRole roles={['admin']}>
          <SideNavLink
            onClick={toggle}
            to="/dashboard/coordinators"
            name="Coordinators"
          >
            <UsersIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} to="/dashboard/teams" name="Teams">
            <UserGroupIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} to="/dashboard/cohorts" name="Cohorts">
            <AcademicCapIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} to="/dashboard/phases" name="Phases">
            <MoonIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink
            onClick={toggle}
            to="/dashboard/programs"
            name="Programs"
          >
            <ProgramIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink
            onClick={toggle}
            to="/dashboard/admin/ratings"
            name="Ratings"
          >
            <ClipboardListIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink
            onClick={toggle}
            to="/dashboard/updated-ratings"
            name="Updated Ratings"
          >
            <RefreshIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink
            onClick={toggle}
            to="/dashboard/grading"
            name="Grading System"
          >
            <TemplateIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink
            onClick={toggle}
            to="/dashboard/manage"
            name="Roles & Access"
          >
            <KeyIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
        </CheckRole>

        {/* FOR COORDINATORS */}
        <CheckRole roles={['coordinator']}>
          <SideNavLink
            onClick={toggle}
            to="/dashboard/sessions"
            name="Sessions"
          >
            <BookOpenIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink onClick={toggle} to="/dashboard/ratings" name="Ratings">
            <ClipboardListIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink
            onClick={toggle}
            name="Attendance"
            to="/dashboard/attendance-rating"
          >
            <ClipboardCheckIcon className="w-5 mr-2 " />
          </SideNavLink>
        </CheckRole>

        {/* FOR TRAINEES */}
        <CheckRole roles={['trainee']}>
          <SideNavLink
            onClick={toggle}
            name="Attendance"
            to="/dashboard/attendance"
          >
            <ClipboardCheckIcon className="w-5 mr-2 " />
          </SideNavLink>
          <SideNavLink
            onClick={() => {
              toggle();
              setTogglei(true);
            }}
            name="Performance"
            to="/dashboard/performance"
          >
            <TrendingUpIcon className="w-5 mr-2 " />
          </SideNavLink>
        </CheckRole>
        <SideNavLink onClick={toggle} name="Calendar" to="/dashboard/calendar">
          <CalendarIcon className="w-5 mr-2" />
        </SideNavLink>
        <SideNavLink onClick={toggle} name="Docs" to="/dashboard/docs">
          <FolderIcon className="w-5 mr-2 " />
        </SideNavLink>
        <SideNavLink onClick={toggle} name="Help" to="/dashboard/support">
          <SupportIcon className="w-5 mr-2 " />
        </SideNavLink>
        {/* Add icons */}
        <div className="flex flex-row ml-10 mt-auto list-none">
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
              to="/dashboard/settings"
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
