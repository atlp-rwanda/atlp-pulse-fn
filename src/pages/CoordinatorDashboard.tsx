/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-useless-path-segments
// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { use } from 'i18next';
import { UserContext } from '../hook/useAuth';
// import AdminTraineeDashboard from './AdminTraineeDashboard';
import CoordinatorTraineeDashboard from './coordinatorTraineDashboard';
import { FETCH_ALL_RATINGS } from '../queries/ratings.queries';
import InvitationCardSkeleton from '../Skeletons/InvitationCardSkeleton';

interface Trainee {
  id: string;
  total: number;
  count: number;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
    id: string;
    profileImage: string;
  };
  [key: string]: any; // for additional properties from rating.user
}

function CoordinatorDashboard() {
  const organizationToken = localStorage.getItem('orgToken');

  const { user } = useContext(UserContext);
  const { t }: any = useTranslation();

  const { loading, error, data } = useQuery(FETCH_ALL_RATINGS, {
    variables: { orgToken: organizationToken },
    skip: !organizationToken,
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center w-[80%] mx-auto mdl:w-[100%] mdl:justify-between gap-5 xmd:flex-row xmd:flex-wrap bg-light-bg dark:bg-dark-frame-bg py-4 font-serif">
        <InvitationCardSkeleton />
        <InvitationCardSkeleton />
        <InvitationCardSkeleton />
      </div>
    );
  }
  if (error) {
    return <p>Error loading data</p>;
  }

  const traineeAverages = data?.fetchAllRatings.reduce(
    (acc: Record<string, Trainee>, rating: any) => {
      const { id } = rating.user;
      if (!acc[id]) acc[id] = { ...rating.user, total: 0, count: 0 };
      acc[id].total += parseFloat(rating.average);
      acc[id].count += 1;
      return acc;
    },
    {} as Record<string, Trainee>,
  );

  const trainees = Object.values(traineeAverages).map((trainee) => {
    const typedTrainee = trainee as Trainee; // Cast to Trainee type
    return {
      ...typedTrainee,
      average: typedTrainee.total / typedTrainee.count,
    };
  });

  const sortedTrainees = trainees.sort((a, b) => b.average - a.average);
  const topThree = sortedTrainees.slice(0, 3);
  const lastThree = sortedTrainees.slice(-3);

  const ratings = data?.fetchAllRatings || [];

  const cohorts = ratings.reduce((acc: any, rating: any) => {
    const cohortName = rating.cohort.name;
    const averageRating = parseFloat(rating.average);

    if (!acc[cohortName]) {
      acc[cohortName] = {
        totalRating: 0,
        traineeCount: 0,
        coordinator: rating.coordinator,
      };
    }
    acc[cohortName].totalRating += averageRating;
    acc[cohortName].traineeCount += 1;

    return acc;
  }, {});

  const cohortPerformances = Object.keys(cohorts).map((cohortName) => ({
    cohortName,
    averageRating:
      cohorts[cohortName].totalRating / cohorts[cohortName].traineeCount,
    coordinator: cohorts[cohortName].coordinator,
  }));

  const topCohorts = cohortPerformances
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 3);

  return (
    <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg">
      <div className="flex flex-row">
        <div className="flex flex-col items-center w-[80%] mx-auto mdl:w-[100%] mdl:justify-between gap-5 xmd:flex-row xmd:flex-wrap bg-light-bg dark:bg-dark-frame-bg py-4 font-serif">
          <div className="w-[20rem] p-4 bg-indigo-100 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4 h-8">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Top Performing Cohorts
              </h5>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y h-[12.5rem] divide-gray-200 dark:divide-gray-700"
              >
                {topCohorts.map((cohort) => (
                  <li
                    key={cohort.cohortName}
                    className="py-3 sm:py-4 border-t border-t-black dark:border-t-gray-200"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                          {cohort.cohortName.charAt(0).toUpperCase()}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {cohort.cohortName}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Average Rating: {cohort.averageRating.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-[20rem]  p-4 bg-indigo-100 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4 h-8">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Top Performing Trainees
              </h5>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y h-[12.5rem] divide-gray-200 dark:divide-gray-700"
              >
                {topThree.map((trainee) => (
                  <li
                    key={trainee.id}
                    className="py-3 sm:py-4 border-t border-t-black dark:border-t-gray-200"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                          {trainee.profile?.firstName?.charAt(0).toUpperCase()}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {trainee.profile?.firstName}{' '}
                          {trainee.profile?.lastName}
                        </p>
                        {/* <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Average Rating: {trainee.average.toFixed(2)}
                        </p> */}
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {trainee.email}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-[20rem] p-4 bg-indigo-100 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4 h-8">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Last Performing Trainees
              </h5>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y h-[12.5rem] divide-gray-200 dark:divide-gray-700"
              >
                {lastThree.map((trainee) => (
                  <li
                    key={trainee.id}
                    className="py-3 sm:py-4 border-t border-t-black dark:border-t-gray-200"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                        {trainee.profile?.firstName?.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {trainee.profile?.firstName}{' '}
                          {trainee.profile?.lastName}
                        </p>
                        {/* <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Average Rating: {trainee.average.toFixed(2)}
                        </p> */}
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {trainee.email}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" fex-row justify-ceter w-[100%] pb8">
        <CoordinatorTraineeDashboard />
      </div>
    </div>
  );
}

export default CoordinatorDashboard;
