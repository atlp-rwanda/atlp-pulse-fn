import React, { useEffect, useState } from 'react';

import { useLazyQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import ProfileCoverPage from '../components/ProfileCoverpage';
import ProfileTabs from '../components/ProfileTabs';
import { COUNTRIES } from '../constants/countries';
import useDocumentTitle from '../hook/useDocumentTitle';
import { GET_PROFILE } from '../Mutations/User';
import Square from '../Skeletons/Square';

export function CountryComponent({ country }: any) {
  const userCountry: any = COUNTRIES.filter((c) => c.value === country)[0];
  return (
    <span
      className="truncate flex items-center"
      data-testid="country-selector-title"
    >
      <img
        alt={`${userCountry?.value}`}
        data-testid="country-selector-flag"
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${userCountry?.value}.svg`}
        className="inline mx-2 h-4 rounded-sm "
      />
      {' '}
      {userCountry?.title}
    </span>
  );
}

export default function Profile() {
  useDocumentTitle('Profile');
  const [data, setData] = useState<any>();
  const [getProfile, { refetch }] = useLazyQuery(GET_PROFILE);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProfile();
        setData(data);
      } catch (error: any) {
        toast.error(error?.message || 'Something went wrong');
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen">
      {data ? (
        <>
          <ProfileCoverPage data={data?.getProfile} currentPage="viewProfile" />
          <div className="mt-2 p-6">
            <ProfileTabs data={data?.getProfile} />
          </div>
        </>
      ) : (
        <Square />
      )}
    </div>
  );
}
