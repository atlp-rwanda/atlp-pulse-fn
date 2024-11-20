import React, { useEffect, useState } from 'react';
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
import { useLazyQuery, gql } from '@apollo/client';
import { UserInterface } from '../pages/TraineeAttendanceTracker';
import { Organization } from '../components/Organizations';

export function UserChart() {
  const GET_ALL_ORG_USERS = gql`
    query GetAllOrgUsers {
      getAllOrgUsers {
        totalUsers
        organizations {
          organization {
            id
            name
            description
            admin {
              id
              email
              profile {
                name
                phoneNumber
              }
            }
            status
          }
          members {
            email
            profile {
              name
            }
          }
          monthPercentage
          loginsCount
          recentLocation
        }
      }
    }
  `;

  const GET_REGISTRATION_STATS = gql`
    query GetRegistrationStats {
      getRegistrationStats {
        year
        stats {
          month
          users
          organizations
        }
      }
    }
  `;

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

  const [selectedRegistrationData, setSelectedRegistrationData] =
    useState<RegistrationDataStatsInterface[]>();
  const [allOrgsUsers, setAllOrgsUsers] = useState<AllOrgUsersInterface>({
    totalUsers: 0,
    organizations: [],
  });
  const [registrationData, setRegistrationData] =
    useState<RegistrationDataInterface[]>();
  const [selectedYear, setSelectedYear] = useState<number>();
  const [registrationYears, setRegistrationYears] = useState<number[]>();

  const [getAllOrgUsers, { loading: getAllOrgUsersLoading }] =
    useLazyQuery(GET_ALL_ORG_USERS);
  const [getRegistrationStats, { loading: getRegistrationStatsLoading }] =
    useLazyQuery(GET_REGISTRATION_STATS);

  useEffect(() => {
    getAllOrgUsers({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setAllOrgsUsers(data.getAllOrgUsers);
      },
    });

    getRegistrationStats({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setRegistrationData(data.getRegistrationStats);
      },
    });
  }, [getAllOrgUsers, getRegistrationStats]);

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
    setRegistrationYears(sanitizedYears);
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
  }, [selectedYear, registrationData]);

  if (getAllOrgUsersLoading || getRegistrationStatsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between w-full items-center">
        <h2 className="font-semibold">User growth Over Time</h2>
        <div className="flex md:hidden items-center grouped-input border rounded border-primary/80 overflow-hidden pr-2 dark:bg-dark-tertiary">
          <select
            value={selectedYear}
            onChange={(event) => setSelectedYear(Number(event.target.value))}
            className="w-full px-2 py-[6px] text-xs text-black dark:text-white outline-none bg-inherit"
          >
            {registrationYears?.map((year) => (
              <option
                key={year}
                value={year}
                onClick={() => setSelectedYear(year)}
                className={`${
                  selectedYear === year ? 'bg-primary' : 'hover:bg-primary/50'
                } cursor-pointer px-3 py-2 rounded-[4px] leading-3`}
              >
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ResponsiveContainer
        className="-ml-6 xmd:-ml-4 text-[.82rem] xmd:text-[.88rem] md:text-[.95rem] capitalize"
        width="100%"
        height={
          // eslint-disable-next-line no-nested-ternary
          window.innerWidth > 700 ? 350 : window.innerWidth > 500 ? 300 : 250
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
          <Line type="monotone" dataKey="organizations" stroke="#8667f0" />
        </LineChart>
      </ResponsiveContainer>
      <div className="hidden md:flex flex-col items-center gap-y-4 ml-6 lg:ml-16 lg:mr-12 text-[.9rem]">
        {registrationYears?.map((year) => (
          <button
            key={year}
            type="button"
            onClick={() => setSelectedYear(year)}
            className={`${
              selectedYear === year ? 'bg-primary' : 'hover:bg-primary/50'
            } cursor-pointer px-3 py-2 rounded-[4px] leading-3`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}
