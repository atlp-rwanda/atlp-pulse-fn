/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */

import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOGIN_ACTIVITIES } from '../queries/manageStudent.queries';
import LoginActivitiesSkeleton from '../Skeletons/loginActivities.skeleton';

interface LoginActivitiesData {
  loginActivities: LoginActivity[];
}

interface Profile {
  __typename: string;
  activity: any[];
}

interface Response {
  getProfile: Profile;
}

interface LoginActivity {
  date: string;
  country_name: string;
  city: string;
  state: string;
  IPv4: string;
  latitude: number;
  longitude: number;
  country_code: string;
  postal: string;
  failed: number;
}

/* istanbul ignore next */
const LoginActivitiesTable: React.FC = () => {
  const [page, setPage] = useState(1);
  const [loginActivities, setLoginActivities] = useState<LoginActivity[]>([]);

  const { loading, data, error } = useQuery<Response>(GET_LOGIN_ACTIVITIES);

  /* istanbul ignore next */
  useEffect(() => {
    if (error) {
      setLoginActivities([]);
    }
  }, [error]);

  /* istanbul ignore next */
  useEffect(() => {
    if (data) {
      const profile = data.getProfile;
      if (profile && profile.activity) {
        console.log('profile activity', profile.activity);

        // Create a copy of the profile.activity array before sorting it
        const sortedActivities = [...profile.activity]
          .filter((activity) => activity && activity.date)
          .sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date)));

        // Use reduce to filter out duplicates based on the date property
        const uniqueActivities = sortedActivities.reduce(
          (acc: LoginActivity[], activity: LoginActivity) => {
            if (!acc.some((a) => a.date === activity.date)) {
              acc.push(activity);
            }
            return acc;
          },
          [],
        );

        setLoginActivities(uniqueActivities.reverse());
      } else {
        setLoginActivities([]);
      }
    }
  }, [data]);

  /* istanbul ignore next */
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  /* istanbul ignore next */
  const handleGoBack = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const pageSize = 10;
  const totalActivities = loginActivities.length;
  const totalPages = Math.ceil(totalActivities / pageSize);

  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalActivities);

  const displayActivities = loginActivities.slice(startIndex, endIndex);
  console.log('displayActivities', displayActivities);

  /* istanbul ignore next */
  return (
    <div className="flex flex-col items-center mt-4 font-serif">
      <h1 className="text-3xl font-bold font-lexend pb-3">Login Activities</h1>

      {/* eslint-disable-next-line no-nested-ternary */}
      {loading && page === 1 ? (
        <div className="my-2 items-center">
          <LoginActivitiesSkeleton />
        </div>
      ) : /* eslint-disable-next-line no-nested-ternary */
      error ? (
        <div>Error retrieving login activities.</div>
      ) : displayActivities.length === 0 ? (
        <div>No login activities yet.</div>
      ) : (
        <>
          <div className="w-full overflow-x-auto">
            <table className="w-full border border-gray-300 min-w-[800px]">
              <thead className="bg-[#163274a3] text-white">
                <tr>
                  <th className="py-2 px-4 border">Date</th>
                  <th className="py-2 px-4 border">Country Name</th>
                  <th className="py-2 px-4 border">City</th>
                  <th className="py-2 px-4 border">State</th>
                  <th className="py-2 px-4 border">IPv4</th>
                  <th className="py-2 px-4 border">Attempt</th>
                </tr>
              </thead>
              <tbody>
                {displayActivities.map((activity, index) => (
                  <tr
                    key={`${activity.date || index}-${activity.IPv4 || index}`}
                    className="transition-colors duration-200"
                  >
                    <td className="py-2 px-4 border">
                      {new Date(Number(activity.date)).toLocaleString()}
                    </td>
                    <td className="py-2 px-4 border">
                      {activity.country_name || 'N/A'}
                    </td>
                    <td className="py-2 px-4 border">
                      {activity.city || 'N/A'}
                    </td>
                    <td className="py-2 px-4 border">
                      {activity.state || 'N/A'}
                    </td>
                    <td className="py-2 px-4 border">
                      {activity.IPv4 || 'N/A'}
                    </td>
                    <td className="py-2 px-4 border">
                      {activity.failed > 0 ? 'Failed' : 'Success'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mb-20 mt-4">
            <span className="mr-2 text-gray-600">
              Page {page} of {totalPages}
            </span>
            {page > 1 && (
              <button
                className="px-4 py-2 mr-2 font-bold text-white bg-gray-500 rounded"
                onClick={handleGoBack}
              >
                Previous
              </button>
            )}
            {page < totalPages && (
              <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={handleLoadMore}
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default LoginActivitiesTable;
