/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeAltIcon, HomeIcon, UsersIcon } from '@heroicons/react/solid';
import { BiCalendarStar } from 'react-icons/bi';
import { AtSign, MapPin } from 'lucide-react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GoOrganization } from 'react-icons/go';
import { GrGroup } from 'react-icons/gr';
import { RiAdminLine } from 'react-icons/ri';
import { useLazyQuery, useQuery } from '@apollo/client';
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineMail } from 'react-icons/md';
import { ThemeContext } from '../hook/ThemeProvider';
import useDocumentTitle from '../hook/useDocumentTitle';
import OrgStatusSymbol from '../components/OrgStatusSymbol';
import MultipleLogins from '../components/icons/MultipleLogins';
import { Organization } from '../components/Organizations';
import {
  GET_ORGANIZATIONS,
  GET_ALL_ORG_USERS,
  GET_REGISTRATION_STATS,
} from '../queries/organization.queries';
import { GET_EVENTS } from '../queries/event.queries';
import { UserInterface } from './TraineeAttendanceTracker';
import NoEvents from '../assets/no-event.png';

interface EventsInterface {
  id: string;
  title: string;
  start: string;
  end: string;
  timeToStart: string;
  timeToEnd: string;
  hostName: string;
}

interface AllOrgUsersInterface {
  totalUsers: number;
  organizations: {
    organization: Organization;
    members: UserInterface[];
    loginsCount: number;
    monthPercentage: number;
    recentLocation: string | null;
  }[];
}

interface RegistrationDataStatsInterface {
  month:
    | 'jan'
    | 'feb'
    | 'mar'
    | 'apr'
    | 'may'
    | 'jun'
    | 'jul'
    | 'aug'
    | 'sep'
    | 'oct'
    | 'nov'
    | 'dec'
    | null;
  users: number | null;
  organizations: number | null;
}
interface RegistrationDataInterface {
  year: number;
  stats: RegistrationDataStatsInterface[];
}

function SuperAdminDashboard() {
  useDocumentTitle('Dashboard');
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { colorTheme } = useContext(ThemeContext);
  const [allOrganizationData, setAllOrganizationData] = useState<
    Organization[]
  >([]);
  const [upcomingEvents, setUpcomingEvents] = useState<EventsInterface[]>([]);
  const [allOrgsUsers, setAllOrgsUsers] = useState<AllOrgUsersInterface>({
    totalUsers: 0,
    organizations: [],
  });

  const [registrationData, setRegistrationData] =
    useState<RegistrationDataInterface[]>();

  const [selectedRegistrationData, setSelectedRegistrationData] =
    useState<RegistrationDataStatsInterface[]>();

  const [selectedYear, setSelectedYear] = useState<number>();
  const [registrationYears, setRegistrationYears] = useState<number[]>();

  const {
    data: organizationsData,
    loading: getOrganizationsDataLoading,
    error: getOrganizationsDataError,
    refetch: getOrganizationsDataRefetch,
  }: {
    data?: {
      getOrganizations: Organization[];
    };
    loading: boolean;
    error?: any;
    refetch: Function;
  } = useQuery(GET_ORGANIZATIONS);

  const [getEvents, { loading: getEventsDataLoading }] =
    useLazyQuery(GET_EVENTS);

  const [getAllOrgUsers, { loading: getAllOrgUsersLoading }] =
    useLazyQuery(GET_ALL_ORG_USERS);

  const [getRegistrationStats, { loading: getRegistrationStatsLoading }] =
    useLazyQuery(GET_REGISTRATION_STATS);

  useEffect(() => {
    if (organizationsData) {
      setAllOrganizationData(organizationsData.getOrganizations);
    }
  }, [organizationsData]);

  useEffect(() => {
    getEvents({
      variables: {
        authToken: localStorage.getItem('auth_token'),
      },
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setUpcomingEvents((prevData) => {
          const events: EventsInterface[] = data.getEvents;
          return events
            .filter((event) => new Date(event.start).getTime() >= Date.now())
            .sort(
              (a, b) =>
                new Date(a.start).getTime() - new Date(b.start).getTime(),
            )
            .slice(0, 3);
        });
      },
    });
  }, []);
  useEffect(() => {
    getAllOrgUsers({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setAllOrgsUsers(data.getAllOrgUsers);
      },
    });
  }, []);
  useEffect(() => {
    getRegistrationStats({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setRegistrationData(data.getRegistrationStats);
      },
    });
  }, []);

  useEffect(() => {
    const years = [new Date().getFullYear()];
    if (registrationData) {
      years.push(...registrationData.map((data) => data.year));
      const sanitizedYears = [...new Set(years)].sort((a, b) => b - a);
      setRegistrationYears(sanitizedYears);
      setSelectedYear(sanitizedYears[0]);
      return;
    }

    const sanitizedYears = [...new Set(years)].sort((a, b) => b - a);

    setRegistrationYears(years);
  }, [registrationData]);

  useEffect(() => {
    const months = [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec',
    ];
    let data: RegistrationDataStatsInterface[] = [
      {
        month: null,
        users: 0,
        organizations: 0,
      },
      ...months.map((month) => ({
        month: month as RegistrationDataStatsInterface['month'],
        users: null,
        organizations: null,
      })),
    ];
    if (registrationData) {
      const tempData = registrationData.find(
        (data) => data.year === selectedYear,
      );
      if (tempData && tempData.stats.length) data = tempData.stats;
    }
    setSelectedRegistrationData(data);
  }, [selectedYear]);

  const statsSkeleton = (
    <div className="w-full">
      <Skeleton
        baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
        highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
        width="1.25rem"
        className="h-5 mb-2 mr-5"
        circle
        inline
      />
      <Skeleton
        baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
        highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
        width="calc(100% - 2.6rem)"
        className="h-5 mb-2"
        inline
      />
      <Skeleton
        baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
        highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
        className="h-12 mt-2"
      />
    </div>
  );

  return (
    <div className="flex flex-col gap-5 lg:gap-8 text-[.92rem] xmd:text-[.95rem]">
      <div className="flex flex-wrap justify-center gap-7 items-center  bg-tertiary dark:bg-dark-bg rounded-md px-9 py-10">
        <div className="h-[7rem] xmd:h-[7.6rem] w-[15rem] md:w-[17rem] lg:w-[18rem] flex flex-col items-center gap-2 bg-tertiary dark:bg-[#262627] py-4 xmd:py-4 px-6 shadow-[1px_4px_8px_-1px_rgba(0,0,0,0.4)] rounded-sm">
          {!getOrganizationsDataLoading && !getAllOrgUsersLoading && (
            <>
              <div className="flex items-end xmd:items-center gap-1 xmd:gap-2">
                <HomeIcon className="w-5 xmd:w-6 text-primary" />
                <span className="uppercase font-semibold text-[.97rem] xmd:text-lg">
                  Organizations
                </span>
              </div>
              <div className="flex items-center">
                <p className="text-[2.5rem] xmd:text-[2.8rem] md:text-5xl font-bold pr-4 border-r-2 border-black dark:border-white py-1 leading-10">
                  {allOrganizationData.length.toString().padStart(2, '0') ||
                    '00'}
                </p>
                <div className="pl-2 text-[.8rem] font-medium leading-4">
                  <div className="flex items-center gap-1">
                    <div
                    // className="animate-ping-live"
                    >
                      <OrgStatusSymbol type="active" />
                    </div>
                    <span>
                      {allOrganizationData
                        .filter((org) => org.status.toLowerCase() === 'active')
                        .length.toString()
                        .padStart(2, '0') || '00'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                    // className="animate-ping-live"
                    >
                      <OrgStatusSymbol type="pending" />
                    </div>
                    <span>
                      {allOrganizationData
                        .filter((org) => org.status.toLowerCase() === 'pending')
                        .length.toString()
                        .padStart(2, '0') || '00'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                    // className="animate-ping-live"
                    >
                      <OrgStatusSymbol type="rejected" />
                    </div>
                    <span>
                      {allOrganizationData
                        .filter(
                          (org) => org.status.toLowerCase() === 'rejected',
                        )
                        .length.toString()
                        .padStart(2, '0') || '00'}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
          {(getOrganizationsDataLoading || getAllOrgUsersLoading) &&
            statsSkeleton}
        </div>
        <div className="h-[7rem] xmd:h-[7.6rem] w-[15rem] md:w-[17rem] lg:w-[18rem] flex flex-col items-center gap-2 bg-tertiary dark:bg-[#262627] py-4 xmd:py-4 px-6 shadow-[1px_4px_8px_-1px_rgba(0,0,0,0.4)] rounded-sm">
          {!getOrganizationsDataLoading && !getAllOrgUsersLoading && (
            <>
              <div className="flex items-end xmd:items-center gap-1 xmd:gap-2">
                <UsersIcon className="w-6 text-primary" />
                <p className="uppercase font-semibold text-[.97rem] xmd:text-lg">
                  USERS
                </p>
              </div>
              <div>
                <span className="text-[2.5rem] xmd:text-[2.8rem] md:text-5xl font-bold">
                  {allOrgsUsers.totalUsers.toString().padStart(2, '0')}
                </span>
              </div>
            </>
          )}
          {(getOrganizationsDataLoading || getAllOrgUsersLoading) &&
            statsSkeleton}
        </div>
        <div className="h-[7rem] xmd:h-[7.6rem] w-[15rem] md:w-[17rem] lg:w-[18rem] flex flex-col items-center gap-2 bg-tertiary dark:bg-[#262627] py-4 xmd:py-4 px-6 shadow-[1px_4px_8px_-1px_rgba(0,0,0,0.4)] rounded-sm">
          {!getOrganizationsDataLoading && !getAllOrgUsersLoading && (
            <>
              <div className="flex items-end xmd:items-center gap-1 xmd:gap-2">
                <GlobeAltIcon className="w-6 text-primary" />
                <span className="uppercase font-semibold text-[.97rem] xmd:text-lg">
                  Domains
                </span>
              </div>
              <div>
                <span className="text-[2.5rem] xmd:text-[2.8rem] md:text-5xl font-bold">
                  00
                </span>
              </div>
            </>
          )}
          {(getOrganizationsDataLoading || getAllOrgUsersLoading) &&
            statsSkeleton}
        </div>
      </div>
      <div className="flex flex-col min-h-[20rem] gap-y-10 bg-tertiary dark:bg-dark-bg rounded-md p-5 xmd:px-9 xmd:py-10">
        {!getRegistrationStatsLoading && (
          <>
            <div className="flex justify-between w-full items-center">
              <h2 className="font-semibold">Monthly Registrations</h2>
              <div className="flex md:hidden items-center grouped-input border rounded border-primary/80 overflow-hidden pr-2 dark:bg-dark-tertiary">
                <select
                  value={selectedYear}
                  onChange={(event) =>
                    setSelectedYear(Number(event.target.value))
                  }
                  className="w-full px-2 py-[6px] text-xs text-black dark:text-white outline-none bg-inherit"
                >
                  {registrationYears?.map((year) => (
                    <option
                      key={year}
                      value={year}
                      onClick={() => setSelectedYear(year)}
                      className={`${
                        selectedYear === year
                          ? 'bg-primary'
                          : 'hover:bg-primary/50'
                      } cursor-pointer px-3 py-2 rounded-[4px] leading-3`}
                    >
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex">
              <ResponsiveContainer
                className="-ml-6 xmd:-ml-4 text-[.82rem] xmd:text-[.88rem] md:text-[.95rem] capitalize"
                width="100%"
                height={
                  // eslint-disable-next-line no-nested-ternary
                  window.innerWidth > 700
                    ? 350
                    : window.innerWidth > 500
                    ? 300
                    : 250
                }
              >
                <LineChart
                  data={selectedRegistrationData}
                  margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="#5C5656"
                    strokeDasharray="4 4"
                  />
                  <Tooltip
                    wrapperStyle={{
                      padding: 0,
                      margin: 0,
                      fontSize: '.85rem',
                    }}
                    itemStyle={{
                      marginInline: '.2rem', // Remove margin from each item
                      lineHeight: '1', // Control line spacing if needed
                    }}
                    labelStyle={{
                      display: 'none',
                    }}
                  />
                  <Legend
                    wrapperStyle={{
                      paddingTop: '1.5rem',
                    }}
                  />
                  <XAxis dataKey="month" dy={10} />
                  <YAxis dx={-10} />
                  <Line type="monotone" dataKey="users" stroke="#0C7640" />
                  <Line
                    type="monotone"
                    dataKey="organizations"
                    stroke="#8667f0"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="hidden md:flex flex-col items-center gap-y-4 ml-6 lg:ml-16 lg:mr-12 text-[.9rem]">
                {registrationYears?.map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setSelectedYear(year)}
                    className={`${
                      selectedYear === year
                        ? 'bg-primary'
                        : 'hover:bg-primary/50'
                    } cursor-pointer px-3 py-2 rounded-[4px] leading-3`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
        {getRegistrationStatsLoading && (
          <div data-testid="registrationStatsLoading">
            <Skeleton
              baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
              highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
              width="30%"
              className="h-8 mb-4"
            />
            <Skeleton
              baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
              highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
              className="h-[18rem] my-4"
              inline
            />
          </div>
        )}
      </div>
      <div className="flex flex-col min-h-[20rem] md:flex-row justify-between gap-5 lg:gap-8">
        <div className="w-full md:w-[60%] flex flex-col gap-5 bg-tertiary dark:bg-dark-bg rounded-md p-5 xmd:p-6">
          {!getOrganizationsDataLoading && (
            <>
              <div className="flex justify-between w-full">
                <h2 className="font-semibold">Recent Organization Requests</h2>
              </div>
              <div>
                <div className="w-full overflow-auto">
                  <table className="min-w-[25rem] w-full border border-neutral-400 dark:border-neutral-600">
                    <thead className="text-[.88rem] xmd:text-[.95rem]">
                      <tr className="bg-neutral-400/60 dark:bg-neutral-700 h-10">
                        <th className="w-[30%] text-left pl-2 xmd:pl-6 font-semibold">
                          Name
                        </th>
                        <th className="w-[50%] text-left pl-2 xmd:pl-6 font-semibold">
                          Admin-Email
                        </th>
                        <th className="w-[20%] text-left pl-2 xmd:pl-6 font-semibold">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[.83rem] xmd:text-[.85rem]">
                      {allOrganizationData
                        .slice(
                          allOrganizationData.length - 5,
                          allOrganizationData.length,
                        )
                        .map((org) => (
                          <tr
                            key={org.id}
                            className="h-10 even:bg-neutral-400/20 dark:even:bg-black/20 hover:bg-[#c9cee0ea] hover:dark:bg-[#19191aea] cursor-pointer"
                            onClick={() => navigate('/organizations')}
                          >
                            <td className="w-[20%] pl-2 xmd:pl-6">
                              {org.name}
                            </td>
                            <td
                              className="w-[50%] px-2 xmd:pl-6 "
                              title={org.admin && org.admin.email}
                            >
                              {
                                // eslint-disable-next-line no-nested-ternary
                                org.admin
                                  ? // eslint-disable-next-line no-nested-ternary
                                    org.admin.email.length > 20
                                    ? window.innerWidth > 530
                                      ? `${org.admin.email.slice(0, 22)}..`
                                      : `${org.admin.email.slice(0, 16)}..`
                                    : org.admin.email
                                  : '-'
                              }
                            </td>
                            <td className="w-[30%] px-2 xmd:pl-4">
                              <OrgStatusSymbol type={org.status} label />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end gap-5 mt-5">
                  <OrgStatusSymbol type="active" label />
                  <OrgStatusSymbol type="pending" label />
                  <OrgStatusSymbol type="rejected" label />
                </div>
              </div>
            </>
          )}
          {getOrganizationsDataLoading && (
            <div>
              <Skeleton
                baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
                highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
                width="40%"
                className="h-8 mb-4"
              />
              <Skeleton
                baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
                highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
                className="h-8 my-4"
              />
              {[...Array(5)].map((_, index) => (
                <Skeleton
                  key={index}
                  baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
                  highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
                  count={3}
                  width="30%"
                  className="h-6 xmd:h-7 mt-3 ml-1 xsm:ml-2 xmd:ml-4 md:ml-3"
                  inline
                />
              ))}
            </div>
          )}
        </div>
        <div className="w-full  md:w-[40%] flex flex-col gap-5 bg-tertiary dark:bg-dark-bg rounded-md p-5 xmd:p-6">
          {!getEventsDataLoading && (
            <>
              <div className="flex justify-between w-full">
                <h2 className="font-semibold">Upcoming Events</h2>
              </div>
              <div
                className={`${
                  upcomingEvents.length ? 'justify-start' : 'justify-center'
                } flex flex-col gap-y-3 items-center  min-h-[18rem]`}
              >
                {upcomingEvents.length ? (
                  upcomingEvents.map((event) => (
                    <Link key={event.id} to="/calendar" className="w-full">
                      <div className="flex items-center gap-1 p-2 lg:p-3 text-[.85rem] lg:text-[.9rem] capitalize bg-tertiary dark:bg-[#262627] hover:bg-[#c9cee0ea] hover:dark:bg-[#19191aea] shadow-[1px_2px_6px_-1px_rgba(0,0,0,0.4)] cursor-pointer ">
                        <BiCalendarStar className="text-[3.9rem]" />
                        <div>
                          <div className="flex flex-wrap items-center gap-1 font-semibold leading-3">
                            <span>{event.title} -</span>
                            <p className="flex items-center">
                              <AtSign size={15} />
                              <span>{event.hostName}</span>
                            </p>
                          </div>
                          <div className="text-[.73rem] md:text-[.78rem] lg:text-[.83rem] leading-4 dark:text-[#B3B3B3] text-[#3c3c3c] mt-1">
                            <p>
                              {event.timeToStart}
                              {event.timeToEnd && ` - ${event.timeToEnd}`}
                            </p>
                            <p className="flex items-center flex-wrap italic leading-3">
                              <span>
                                {format(new Date(event.start), 'dd, MMM yyyy')}
                              </span>
                              <span>&nbsp;-&nbsp;</span>
                              <span>
                                {format(new Date(event.end), 'dd, MMM yyyy')}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="flex flex-col items-center">
                    <img
                      src={NoEvents}
                      alt="NoEventsImage"
                      className="w-[5rem]"
                    />
                    <p className="text-[.83rem] md:text-[.88rem] lg:text-[.92rem] text-center leading-4">
                      Oops! No upcoming events scheduled
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
          {getEventsDataLoading && (
            <div>
              <Skeleton
                baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
                highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
                width="50%"
                className="h-8 mb-4"
              />
              <Skeleton
                baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
                highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
                count={3}
                className="h-[5.3rem] mt-3"
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col min-h-[20rem] md:flex-row justify-between gap-5 lg:gap-8">
        <div className="w-full flex flex-col gap-5 bg-tertiary dark:bg-dark-bg rounded-md p-5 xmd:p-6">
          {!getAllOrgUsersLoading && (
            <>
              <div className="flex justify-between w-full">
                <h2 className="font-semibold">
                  Organization Updates scheduled
                </h2>
              </div>
              <div className="flex flex-col gap-y-4">
                {allOrgsUsers.organizations
                  .slice()
                  .sort((a, b) => b.members.length - a.members.length)
                  .slice(0, 3)
                  .map((org) => (
                    <div
                      key={org.organization.id}
                      className="flex flex-col gap-y-3 py-3 px-5 xsm:px-8 bg-tertiary dark:bg-[#262627] shadow-[1px_2px_6px_-1px_rgba(0,0,0,0.4)]"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-end gap-1 leading-4 font-semibold">
                          <GoOrganization className="text-[1.1rem] xmd:text-[1.2rem]" />
                          <span className="uppercase">
                            {org.organization.name}
                          </span>
                        </div>
                        <span className="italic font-light text-[.83rem] xmd:text-[.9rem]">
                          {format(new Date(), 'MMM, yyyy')}
                        </span>
                      </div>
                      <div className="text-[.85rem] xmd:text-[.9rem] ml-5 pl-2 border-l-2 border-black dark:border-white">
                        <p className="flex items-center gap-x-1">
                          <RiAdminLine />
                          <span className="capitalize">
                            {(org.organization.admin &&
                              org.organization.admin.profile &&
                              org.organization.admin.profile.name) ||
                              '-'}
                          </span>
                        </p>
                        <p className="flex items-center gap-x-1 mb-[2px]">
                          <MdOutlineMail className='text-[.98rem]'/>
                          {org.organization.admin &&
                          org.organization.admin.email ? (
                            <a
                              href={`mailto:${org.organization.admin.email}`}
                              target="_blank"
                              className=" font-light underline leading-3"
                              rel="noreferrer"
                            >
                              {org.organization.admin.email}
                            </a>
                          ) : (
                            <span>-</span>
                          )}
                        </p>
                        <p className="flex items-center gap-x-1">
                          <GrGroup />
                          <span>{org.members.length}</span>
                          <p className="py-[1px] px-[6px] bg-[#0C7609] rounded-[4px] font-semibold text-[.72rem] xmd:text-[.75rem]">
                            {`${org.monthPercentage.toPrecision(2)}%`}
                          </p>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
          {getAllOrgUsersLoading && (
            <div>
              <Skeleton
                baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
                highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
                width="50%"
                className="h-8 mb-4"
              />
              <Skeleton
                baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
                highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
                count={3}
                className="h-24 mt-3"
              />
            </div>
          )}
        </div>
        <div className="w-full flex flex-col gap-5 bg-tertiary dark:bg-dark-bg rounded-md p-5 xmd:p-6">
          {!getAllOrgUsersLoading && (
            <>
              <div className="flex justify-between w-full">
                <h2 className="font-semibold">Today&apos;s Login Overview</h2>
              </div>
              <div className="flex flex-col gap-y-3">
                {allOrgsUsers.organizations
                  .slice()
                  .sort((a, b) => b.loginsCount - a.loginsCount)
                  .slice(0, 4)
                  .map((org) => (
                    <div
                      key={org.organization.id}
                      className="flex flex-col gap-y-2 py-4 px-5 xsm:px-8 bg-tertiary dark:bg-[#262627] shadow-[1px_2px_6px_-1px_rgba(0,0,0,0.4)]"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-end gap-2 leading-4 font-semibold">
                          <MultipleLogins
                            color={colorTheme === 'light' ? 'black' : 'white'}
                          />
                          <div>
                            <p className="uppercase">{org.organization.name}</p>
                            <p className="mt-[3px]">{org.loginsCount}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-[.84rem] xsm:text-[.9rem] ml-10">
                        <div className="flex flex-wrap items-center leading-3">
                          <MapPin size={15} />
                          <span className="capitalize">
                            {org.recentLocation || 'unavailable'}
                          </span>
                          {org.recentLocation && (
                            <p className="ml-1 italic font-light tracking-tight">
                              (Recent login location)
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
          {getAllOrgUsersLoading && (
            <div>
              <Skeleton
                baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
                highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
                width="50%"
                className="h-8 mb-4"
              />
              <Skeleton
                baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
                highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
                count={3}
                className="h-24 mt-3"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SuperAdminDashboard;
