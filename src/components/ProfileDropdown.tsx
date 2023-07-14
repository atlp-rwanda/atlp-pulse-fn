/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-console */
import { LogoutIcon } from '@heroicons/react/solid';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink,from, useQuery, gql } from '@apollo/client';
import {onError} from '@apollo/client/link/error'
import { UserContext } from '../hook/useAuth';
import { GET_LOGIN_ACTIVITIES } from '../Mutations/manageStudentMutations';


const errorLink=onError(({graphQLErrors, networkError})=>{
  if(graphQLErrors){
    graphQLErrors.map(({message,path})=>{
      alert(`Graphql error ${message}`);
    });
  }
});

// const link =from([
//   errorLink,
//   new HttpLink({uri:"http://localhost:4000/"})
// ])


// Create the Apollo Client instance

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link
// });

function ProfileDropdown({
  handleShowProfileDropdown,
}: {
  handleShowProfileDropdown: any;
}) {
  const { logout, user } = useContext(UserContext);
  const { t } = useTranslation();

  return (
      <div className="w-screen h-screen fixed top-0 left-0 z-50 px-4">
      <div
        className="bg-dark-20 w-full h-full absolute top-0 left-0 z-1"
        role="button"
        aria-label="background"
        tabIndex={0}
        onClick={handleShowProfileDropdown}
        onKeyDown={handleShowProfileDropdown}
        data-testid="keyClick"
      />
      <div className="absolute top-[60px] right-0 left-0 ml-auto px-2 md:mx-0 md:left-auto md:right-[10px] z-2  w-full max-w-[220px] h-[calc(100%-70px)]">
        <div className="flex flex-col flex-nowrap w-full h-max max-h-full bg-white shadow-xl border  dark:border-0 dark:bg-dark-tertiary rounded-[20px]">
          <div className="flex flex-col w-full p-3 border-border-dark dark:border-white border-b-[0.5px]">
            <p className="font-bold dark:text-white">{user?.name}</p>
            <p className="font-bold text-sm text-gray-700 dark:text-gray-300">
              {user?.email}
            </p>
            <p className="font-bold text-sm text-gray-700 dark:text-gray-300">
              {user?.role}
            </p>
          </div>
          <div
            className="flex flex-col w-full overflow-auto"
            data-testid="notificationsContainer"
          >
            <div className="w-full border-border-dark dark:border-white border-b-[0.5px]">
              <div className="flex flex-row justify-between align-center gap-x-[20px] ">
                <div className="flex flex-col w-full gap-[5px] cursor-pointer">
                  <Link
                    onClick={handleShowProfileDropdown}
                    to="/dashboard/profile"
                    className="font-semibold text-gray-600 dark:text-white px-4 py-2 hover:bg-gray-600 hover:text-gray-200 dark:hover:bg-gray-300 dark:hover:text-gray-900"
                  >
                    {t('Profile')}
                  </Link>
                  <Link
                    onClick={handleShowProfileDropdown}
                    to="settings"
                    className="font-semibold text-gray-600 dark:text-white px-4 py-2 pb-4 hover:bg-gray-600 hover:text-gray-200 dark:hover:bg-gray-300 dark:hover:text-gray-900"
                  >
                    {t('Preferences')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full p-3 flex flex-row align-center justify-start text-gray-900 dark:text-gray-100 dark:hover:bg-gray-300 dark:hover:text-gray-900  hover:bg-gray-600 hover:rounded-b-[20px] hover:text-gray-100 "
            onClick={logout}
          >
            <LogoutIcon className="w-4 h-4 mt-1 cursor-pointer " />
            <p className="font-bold ml-1 cursor-pointer">{t('Sign out')}</p>
          </div>

          <div>
          {/* <ApolloProvider client={client}> */}

            <Link

              to="/dashboard/loginActivities" 
              className="w-full p-3 flex flex-row align-center justify-start text-gray-900 dark:text-gray-100 dark:hover:bg-gray-300 dark:hover:text-gray-900  hover:bg-gray-600 hover:rounded-b-[20px] hover:text-gray-100"
            >
              <p className="font-bold ml-1 cursor-pointer">{t('Login Activities')}</p>
            </Link>
            {/* </ApolloProvider> */}

          </div>
        </div>
      </div>      </div>
  );
}

export default ProfileDropdown;






