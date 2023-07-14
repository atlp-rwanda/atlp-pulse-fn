/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */

import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOGIN_ACTIVITIES } from '../Mutations/manageStudentMutations';

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
  latitude: string;
  longitude: string;
  country_code: string;
  postal: string;
  failed: String;
}

const LoginActivitiesTable: React.FC = () => {
  const [page, setPage] = useState(1);
  const [loginActivities, setLoginActivities] = useState<LoginActivity[]>([]);

  const { loading, data, error } = useQuery<Response>(GET_LOGIN_ACTIVITIES, {
    variables: { page },
  });

  useEffect(() => {
    if (error) {
      console.log('Error retrieving login activities:', error);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setLoginActivities((prevLoginActivities) => [
        ...prevLoginActivities,
        ...(data.getProfile.activity || []),
      ]);
    }
  }, [data]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleGoBack = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (loading && page === 1) {
    return <div>Loading login activities...</div>;
  }

  if (error) {
    return <div>Error retrieving login activities.</div>;
  }

  const startIndex = (page - 1) * 10;
  const endIndex = page * 10;
  const displayActivities = loginActivities
    .slice(startIndex, endIndex)
    .reverse();

  return (
    <div>
      <table className="flex flex-col flex-wrap w-full pt-[6em] justify-end pl-0 lg:pl-[10em]">
        {/* Render login activities from the loginActivities state */}
        <thead className="flex w-full justify-evenly flex-wrap ">
          <tr className="flex w-full text-[#148fb6]">
            <th className="w-[15%]">Country Name</th>
            <th className="w-[25%]">Date</th>
            <th className="w-[15%]">City</th>
            <th className="w-[15%]">State</th>
            <th className="w-[15%]">IPv4</th>
            <th className="w-[15%]">Failed</th>
          </tr>
        </thead>

        <tbody className="flex flex-col flex-wrap my-2 ">
          {displayActivities.map((activity) => (
            <tr
              className="w-full flex flex-wrap lg:pl-[3em] pt-2"
              key={activity.country_name}
            >
              <td className="md:w-[15%] border-r border-[#148fb6]">
                {activity.country_name}
              </td>
              <td className="md:w-[25%] border-r border-[#148fb6]">
                {activity.date}
              </td>
              <td className="md:w-[15%] border-r border-[#148fb6]">
                {activity.city}
              </td>
              <td className="md:w-[15%] border-r border-[#148fb6]">
                {activity.state}
              </td>
              <td className="md:w-[20%] border-r border-[#148fb6]">
                {activity.IPv4}
              </td>
              <td className="md:w-[3%] ">{activity.failed}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLoadMore}
        >
          Load More
        </button>
        {page > 1 && (
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginActivitiesTable;


