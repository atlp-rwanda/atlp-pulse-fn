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
      console.log('Error retrieving login activities:', error);
    }
  }, [error]);
  /* istanbul ignore next */
  useEffect(() => {
    if (data) {
      const profile = data.getProfile;
      if (profile && profile.activity) {
        // Create a copy of the profile.activity array before sorting it
        const sortedActivities = [...profile.activity].sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );

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

        setLoginActivities(uniqueActivities.reverse()); // Reversing the array to show most recent first
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

  // Calculate the start and end index for the current page
  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalActivities);

  // Get the activities to display on the current page
  const displayActivities = loginActivities.slice(startIndex, endIndex);

  if (loading && page === 1) {
    return <div>Loading login activities...</div>;
  }
  /* istanbul ignore next */
  if (error) {
    return <div>Error retrieving login activities.</div>;
  }
  /* istanbul ignore next */
 /* istanbul ignore next */
  if (displayActivities.length === 0) {
    return <div>No login activities yet.</div>;
  }
  /* istanbul ignore next */
  return (
    <div className="flex flex-col items-center mt-4">
      <table className="flex flex-col flex-wrap w-full pt-[6em] justify-end pl-0 lg:pl-[10em] ">
        {/* Render login activities from the loginActivities state */}
        <thead className="flex flex-wrap w-full justify-evenly ">
          <tr className="flex w-full text-[#148fb6]">
            <th className="w-[25%]">Date</th>
            <th className="w-[18%]">Country Name</th>
            <th className="w-[15%]">City</th>
            <th className="w-[10%]">State</th>
            <th className="w-[20%]">IPv4</th>
            <th className="w-[15%]">Attempt</th>
          </tr>
        </thead>
         
         <tbody className="flex flex-col flex-wrap my-2">
  {displayActivities.map((activity) => (
     /* istanbul ignore next */
    <tr className="w-full flex flex-wrap lg:pl-[3em] pt-2" key={activity.country_name}>
     
      <td className="md:w-[25%] border-r border-[#148fb6]">
        {new Date(activity.date).toLocaleString()} {/* Convert UTC date to local time */}
      </td>
      <td className="md:w-[15%] border-r border-[#148fb6]">
        {activity.country_name}
      </td>

      <td className="md:w-[15%] border-r border-[#148fb6]">
        {activity.city || 'N/A'}
      </td>
      <td className="md:w-[15%] border-r border-[#148fb6]">
        {activity.state || 'N/A'}
      </td>
      <td className="md:w-[20%] border-r border-[#148fb6]">
        {activity.IPv4}
      </td>
      <td className="md:w-[10%] ">{activity.failed > 0 ? "Failed" : "Success"}</td>
    </tr>
  ))}
</tbody>


        <tbody className="flex flex-col flex-wrap my-2">
          {displayActivities.map((activity) => (
            <tr
              className="w-full flex flex-wrap lg:pl-[3em] pt-2"
              key={activity.country_name}
            >
              <td className="md:w-[25%] border-r border-[#148fb6]">
                {new Date(activity.date).toLocaleString()}{' '}
                {/* Convert UTC date to local time */}
              </td>
              <td className="md:w-[15%] border-r border-[#148fb6]">
                {activity.country_name}
              </td>

              <td className="md:w-[15%] border-r border-[#148fb6]">
                {activity.city || 'N/A'}
              </td>
              <td className="md:w-[15%] border-r border-[#148fb6]">
                {activity.state || 'N/A'}
              </td>
              <td className="md:w-[20%] border-r border-[#148fb6]">
                {activity.IPv4}
              </td>
              <td className="md:w-[10%] ">
                {activity.failed > 0 ? 'Failed' : 'Success'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination at the bottom of the page */}
      <div className="flex justify-center mb-20">
        <span className="mr-2 text-gray-600">
          Page {page} of {totalPages}
        </span>
        {page > 1 && (
          <button
            className="px-4 py-2 mr-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
            onClick={handleGoBack}
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 "
            onClick={handleLoadMore}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginActivitiesTable;
