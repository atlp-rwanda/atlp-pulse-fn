import React, { useContext, useState, useEffect } from 'react';
import {
  ChartPieIcon,
  UsersIcon,
  GlobeAltIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  FolderIcon,
  SupportIcon,
  LogoutIcon,
  HomeIcon,
  TrendingUpIcon,
  ClipboardListIcon,
  KeyIcon,
  TemplateIcon,
  RefreshIcon,
  UserGroupIcon,
  MoonIcon,
  MailIcon,
} from '@heroicons/react/solid';
import { FaEnvelopeOpenText } from 'react-icons/fa6';
import {
  AcademicCapIcon,
  BookOpenIcon,
  CogIcon,
} from '@heroicons/react/outline';
import { useTranslation } from 'react-i18next';
import ProgramIcon from './ProgramIcon';
import { UserContext } from '../hook/useAuth';
import CheckRole from '../utils/CheckRoles';
import SideNavLink from './SideNavLink';
import { MenuContext } from '../hook/menuProvider';

function Sidebar({ style, toggle }: { style: string; toggle: () => void }) {
  const { minimized, showNav } = useContext(MenuContext);
  const { t } = useTranslation();
  const { logout } = useContext(UserContext);
  return (
    <div
      className={`${
        showNav ? 'block' : 'hidden'
      } lg:block page-sideNav fixed lg:static top-16 bottom-0 font-serif`}
    >
      <div
        className={`${style} overflow-auto flex-col h-[100%] pt-2 bg-indigo-100 dark:bg-dark-bg shadow-lg lg:shadow-none dark:shadow-border-dark`}
      >
        <div className="list-none">
          <SideNavLink onClick={toggle} name="Dashboard" to="/dashboard">
            <ChartPieIcon className="w-5" />
          </SideNavLink>
          <SideNavLink onClick={toggle} name="Tickets" to="/tickets">
            <MailIcon className="w-5 " />
          </SideNavLink>

          {/* FOR SUPER ADMINS */}
          <CheckRole roles={['superAdmin']}>
            <SideNavLink
              onClick={toggle}
              name="Organizations"
              to="/organizations"
            >
              <HomeIcon className="w-5 " />
            </SideNavLink>

            <SideNavLink
              onClick={toggle}
              name="Admins"
              data-testid="keppi"
              to="/admins"
            >
              <UsersIcon className="w-5 " />
            </SideNavLink>
            <SideNavLink onClick={toggle} name="Domains" to="/domains">
              <GlobeAltIcon className="w-5 " />
            </SideNavLink>
          </CheckRole>

          {/* FOR ADMINS & COORDINATORS */}
          <CheckRole roles={['admin', 'coordinator']}>
            <SideNavLink onClick={toggle} to="/trainees" name="Trainees">
              <UserGroupIcon className="w-5" />
            </SideNavLink>
          </CheckRole>
          {/* INVITATION */}
          <CheckRole roles={['admin']}>
            <SideNavLink onClick={toggle} to="/invitation" name="Invitation">
              <FaEnvelopeOpenText className="w-5" />
            </SideNavLink>
          </CheckRole>

          {/* FOR ADMINS */}
          <CheckRole roles={['admin']}>
            <SideNavLink
              onClick={toggle}
              to="/coordinators"
              name="Coordinators"
            >
              <UsersIcon className="w-5" />
            </SideNavLink>
            <SideNavLink onClick={toggle} to="/teams" name="Teams">
              <UserGroupIcon className="w-5" />
            </SideNavLink>
            <SideNavLink onClick={toggle} to="/ttls" name="TTLs">
              <UsersIcon className="w-5" />
            </SideNavLink>
            <SideNavLink onClick={toggle} to="/cohorts" name="Cohorts">
              <AcademicCapIcon className="w-5" />
            </SideNavLink>
            <SideNavLink onClick={toggle} to="/phases" name="Phases">
              <MoonIcon className="w-5" />
            </SideNavLink>
            <SideNavLink onClick={toggle} to="/programs" name="Programs">
              <ProgramIcon className="w-5" />
            </SideNavLink>
            <SideNavLink
              onClick={toggle}
              to="/updated-ratings"
              name="Updated Ratings"
            >
              <RefreshIcon className="w-5" />
            </SideNavLink>
            <SideNavLink onClick={toggle} to="/grading" name="Grading System">
              <TemplateIcon className="w-5" />
            </SideNavLink>
            <SideNavLink onClick={toggle} to="/manage" name="Roles & Access">
              <KeyIcon className="w-5" />
            </SideNavLink>
            <SideNavLink onClick={toggle} name="Docs" to="/adminDocs">
              <FolderIcon className="w-5 " />
            </SideNavLink>
          </CheckRole>

          {/* FOR COORDINATORS */}
          <CheckRole roles={['coordinator']}>
            {/* team cards */}
            <SideNavLink onClick={toggle} name="Teams" to="/cards">
              <UserGroupIcon className="w-5 " />
            </SideNavLink>

            <SideNavLink onClick={toggle} to="/sessions" name="Sessions">
              <BookOpenIcon className="w-5" />
            </SideNavLink>
            <SideNavLink onClick={toggle} name="Attendance" to="/attendance">
              <ClipboardCheckIcon className="w-5 " />
            </SideNavLink>

            <SideNavLink onClick={toggle} name="Docs" to="/coordinatorDocs">
              <FolderIcon className="w-5" />
            </SideNavLink>
          </CheckRole>

          {/* manger role */}
          <CheckRole roles={['manager']}>
            <SideNavLink onClick={toggle} name="Teams" to="/team-cards">
              <UserGroupIcon className="w-5" />
            </SideNavLink>
          </CheckRole>
          {/* TTL role */}
          <CheckRole roles={['ttl']}>
            <SideNavLink onClick={toggle} to="/ttl-trainees" name="Trainees">
              <UserGroupIcon className="w-5" />
            </SideNavLink>
          </CheckRole>
          {/* FOR TRAINEES */}
          <CheckRole roles={['trainee']}>
            <SideNavLink onClick={toggle} name="Attendance" to="/attendance">
              <ClipboardCheckIcon className="w-5 " />
            </SideNavLink>
            <SideNavLink onClick={toggle} name="Performance" to="/performance">
              <TrendingUpIcon className="w-5" />
            </SideNavLink>

            <SideNavLink onClick={toggle} name="Docs" to="/traineeDocs">
              <FolderIcon className="w-5" />
            </SideNavLink>
          </CheckRole>

          <SideNavLink onClick={toggle} name="Calendar" to="/calendar">
            <CalendarIcon className="w-5" />
          </SideNavLink>

          <SideNavLink onClick={toggle} name="Help" to="/support">
            <SupportIcon className="w-5 text-red-700 dark:text-red-600 hover:text-red-900" />
          </SideNavLink>
          <SideNavLink onClick={logout} to="#link">
            <LogoutIcon className="w-5 text-red-700 dark:text-red-600 hover:text-red-900" />
            {!minimized && (
              <span className="text-base text-red-700 dark:text-red-600 hover:text-red-900 ">
                {t('Logout')}
              </span>
            )}
          </SideNavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
