import React, { useContext } from 'react';
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
} from '@heroicons/react/solid';
import {
  AcademicCapIcon,
  BookOpenIcon,
  CogIcon,
} from '@heroicons/react/outline';
import Tooltip from './ToolTip';
import { UserContext } from '../hook/useAuth';
import CheckRole from '../utils/CheckRoles';
import SideNavLink from './SideNavLink';

function Sidebar({ style }: { style: string }) {
  const { logout } = useContext(UserContext);

  return (
    <div
      className={`${style} flex-col fixed h-[100%] pt-[3vh] lg:pt-[11vh] bg-white dark:bg-dark-bg border-r p-2`}
    >
      <div className="list-none pr-8">
        <SideNavLink name="Dashboard" to="/dashboard/">
          <ChartPieIcon className="w-5 mr-2 " />
        </SideNavLink>

        {/* FOR SUPER ADMINS */}
        <CheckRole roles={['super']}>
          <SideNavLink name="Organizations" to="/dashboard/organizations">
            <HomeIcon className="w-5 mr-2 " />
          </SideNavLink>

          <SideNavLink name="Admins" to="/dashboard/admins">
            <UsersIcon className="w-5 mr-2 " />
          </SideNavLink>
          <SideNavLink name="Domains" to="/dashboard/domains">
            <GlobeAltIcon className="w-5 mr-2 " />
          </SideNavLink>
        </CheckRole>

        {/* FOR ADMINS & COORDINATORS */}
        <CheckRole roles={['admin', 'coordinator']}>
          <SideNavLink to="/dashboard/trainees" name="Trainees">
            <UserGroupIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
        </CheckRole>

        {/* FOR ADMINS */}
        <CheckRole roles={['admin']}>
          <SideNavLink to="/dashboard/coordinators" name="Coordinators">
            <UsersIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink to="/dashboard/cohorts" name="Cohorts">
            <AcademicCapIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink to="/dashboard/updated-ratings" name="Updated Ratings">
            <RefreshIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink to="/dashboard/grading" name="Grading System">
            <TemplateIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink to="/dashboard/manage" name="Roles & Access">
            <KeyIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
        </CheckRole>

        {/* FOR COORDINATORS */}
        <CheckRole roles={['coordinator']}>
          <SideNavLink to="/dashboard/sessions" name="Sessions">
            <BookOpenIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink to="/dashboard/ratings" name="Ratings">
            <ClipboardListIcon className="w-5 mr-2 dark:text-dark-text-fill" />
          </SideNavLink>
          <SideNavLink name="Attendance" to="/dashboard/attendance-rating">
            <ClipboardCheckIcon className="w-5 mr-2 " />
          </SideNavLink>
        </CheckRole>

        {/* FOR TRAINEES */}
        <CheckRole roles={['trainee']}>
          <SideNavLink name="Attendance" to="/dashboard/attendance">
            <ClipboardCheckIcon className="w-5 mr-2 " />
          </SideNavLink>
          <SideNavLink name="Performance" to="/dashboard/performance">
            <TrendingUpIcon className="w-5 mr-2 " />
          </SideNavLink>
        </CheckRole>

        {/* Shared Links */}
        <SideNavLink name="Notifications" to="/dashboard/notifications">
          <BellIcon className="w-5 mr-2" />
        </SideNavLink>
        <SideNavLink name="Calendar" to="/dashboard/calendar">
          <CalendarIcon className="w-5 mr-2" />
        </SideNavLink>
        <SideNavLink name="Docs" to="/dashboard/docs">
          <FolderIcon className="w-5 mr-2 " />
        </SideNavLink>
        <SideNavLink name="Settings" to="/dashboard/settings">
          <CogIcon className="w-5 mr-2 " />
        </SideNavLink>
        <SideNavLink name="Help" to="/dashboard/support">
          <SupportIcon className="w-5 mr-2 " />
        </SideNavLink>
      </div>
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
              <CogIcon className="w-5 hover:text-primary " />
            </Tooltip>
          </NavLink>
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
