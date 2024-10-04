import React, { useEffect, useState, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { UserContext } from '../hook/useAuth';
import ProfileCoverPage from '../components/ProfileCoverpage';
import ProfileTabs from '../components/ProfileTabs';
import { COUNTRIES } from '../constants/countries';
import useDocumentTitle from '../hook/useDocumentTitle';
import { GET_PROFILE } from '../queries/user.queries';
import Square from '../Skeletons/Square';

export function CountryComponent({ country }: any) {
  /* istanbul ignore next */
  const userCountry: any = COUNTRIES.filter((c) => c.value === country)[0];
  return (
    <span
      className="truncate flex items-center font-serif"
      data-testid="country-selector-title"
    >
      <img
        alt={userCountry?.value}
        data-testid="country-selector-flag"
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${userCountry?.value}.svg`}
        className="inline mx-2 h-4 rounded-sm "
      />{' '}
      {userCountry?.title}
    </span>
  );
}

export default function Profile() {
  const { setName, setProfileImage } = useContext(UserContext);
  useDocumentTitle('Profile');
  const [data, setData] = useState<any>();
  const [getProfile, { refetch }] = useLazyQuery(GET_PROFILE);
  useEffect(() => {
    const fetchData = async () => {
      /* istanbul ignore next */
      try {
        const { data } = await getProfile();
        setData(data);
        setName(data.getProfile?.name);
        setProfileImage(data.getProfile?.avatar);
      } catch (error: any) {
        toast.error(error?.message || 'Something went wrong');
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg font-serif">
      {data ? (
        <>
          <ProfileCoverPage data={data?.getProfile} currentPage="viewProfile" />
          <div className="mt-1 p-2 md:p-4 h-full">
            <ProfileTabs data={data?.getProfile || {}} />
          </div>
        </>
      ) : (
        // <Square />
        <></>
      )}
    </div>
  );
}
