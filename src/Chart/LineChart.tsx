import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import GET_ROLE_QUERY from '../containers/admin-dashBoard/GetRolesQuery';

dayjs.extend(isoWeek);

function UserGrowth() {
  const [orgToken, setOrgToken] = useState<string | null>(null);
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [selectedYear, setSelectedYear] = useState<string>(
    dayjs().year().toString(),
  );

  useEffect(() => {
    const token = localStorage.getItem('orgToken');
    setOrgToken(token);
  }, []);

  const { data, loading, error } = useQuery(GET_ROLE_QUERY, {
    variables: { orgToken },
    skip: !orgToken,
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const users = data?.getAllUsers || [];

  const userGrowth = (users: any[]) => {
    const growthData: { [key: string]: number } = {};

    users.forEach((user: any) => {
      const timestamp = user.createdAt || user.updatedAt;
      if (timestamp) {
        const date = dayjs(parseInt(timestamp, 10));
        const year = date.year().toString();

        if (year === selectedYear) {
          let periodKey = '';
          if (period === 'daily') {
            periodKey = date.format('YYYY-MM-DD');
          } else if (period === 'weekly') {
            periodKey = `${date.year()}-W${date.isoWeek()}`;
          } else if (period === 'monthly') {
            periodKey = date.format('YYYY-MM');
          }

          growthData[periodKey] = (growthData[periodKey] || 0) + 1;
        }
      }
    });

    const allMonths = Array.from({ length: 12 }, (_, i) =>
      dayjs().month(i).format('YYYY-MM'),
    );
    allMonths.forEach((month) => {
      if (!growthData[month]) {
        growthData[month] = 0;
      }
    });

    return Object.entries(growthData).map(([date, count]) => ({ date, count }));
  };

  const growthData = userGrowth(users);

  return (
    <div className="px-9 py-10 bg-tertiary dark:bg-dark-bg">
      <h3 className="text-3xl text-center text-grey-600 font-bold">
        User Growth
      </h3>

      <div className="flex flex-wrap flex-row justify-between">
        <div>
          <label
            htmlFor="year"
            style={{ color: '#bdbdbd', marginRight: '10px' }}
          >
            Year:
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            style={{
              padding: '5px 10px',
              borderColor: '#ccc',
              borderRadius: '4px',
              color: '#bdbdbd',
            }}
          >
            {Array.from({ length: 5 }).map((_, index) => {
              const year = dayjs().year() - index;
              return (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label
            htmlFor="period"
            style={{ color: '#bdbdbd', marginRight: '10px' }}
          >
            Period:
          </label>
          <select
            id="period"
            value={period}
            onChange={(e) =>
              setPeriod(e.target.value as 'daily' | 'weekly' | 'monthly')
            }
            style={{
              padding: '5px 10px',
              borderColor: '#ccc',
              borderRadius: '4px',
              color: '#bdbdbd',
            }}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      {growthData.length === 0 ? (
        <p>No data available</p>
      ) : (
        <div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={growthData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(str) => {
                  if (period === 'daily') {
                    return dayjs(str).format('MMM DD');
                  }
                  if (period === 'weekly') {
                    return str.split('-')[1];
                  }
                  if (period === 'monthly') {
                    return dayjs(str).format('MMM YYYY');
                  }
                  return str;
                }}
              />
              <YAxis
                label={{
                  value: 'USERS',
                  angle: -90,
                  position: 'insideLeft',
                  style: { fontSize: 14, fill: '#bdbdbd' },
                }}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                name="User(s)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default UserGrowth;
