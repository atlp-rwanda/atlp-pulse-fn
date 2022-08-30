import React from 'react';
import { useTranslation } from 'react-i18next';
import { PencilIcon, PencilAltIcon } from '@heroicons/react/solid';

import { CameraIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Avatar from '../assets/avatar.png';
import Button from './Buttons';

export default function ProfileCoverpage({
  currentPage,
}: {
  currentPage: string;
}) {
  const { t } = useTranslation();
  return (
    <div className=" mt-[4.4rem] bg-[url('https://images.unsplash.com/photo-1483168527879-c66136b56105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3016&q=80')] bg-cover bg-no-repeat bg-center bg-fixed h-[28vh] md:h-[26vh] lg:ml-48 flex flex-row text-center  align-center items-center">
      <img
        src={Avatar}
        className="w-20 md:w-28 h-20 md:h-28 m-4 relative ml-6 md:ml-20 mt-36 md:mt-12"
        alt="profile-avatar"
      />
      <div className="flex h-full items-center justify-center bg-grey-lighter  -ml-10 md:-ml-12 mt-36 md:mt-20 z-0 mr-auto">
        <label className="flex flex-row text-center ml-auto mr-4 rounded-lg bg-primary text-white hover:bg-[#1eaad6] focus:outline-none p-1">
          <PencilAltIcon className="w-5 md:w-3 mr-1 mt-0 dark:text-dark-text-fill" />
          <span className="text-lg md:text-sm dark:text-dark-text-fill">
            <span className="hidden md:block">{t('Edit')} </span>
          </span>
          <input type="file" className="hidden" />
        </label>
      </div>
      {currentPage !== 'editProfile' ? (
        <Button
          variant="default"
          size="md"
          style="text-center ml-auto mr-4 mt-40 md:mt-24  rounded-lg bg-primary text-white hover:bg-[#1eaad6] focus:outline-none p-1 md:p-2"
        >
          <Link to="edit" className="flex flex-row">
            <PencilIcon className="w-6 mr-1 md:mr-2 dark:text-dark-text-fill " />
            <span className="hidden md:block"> {t('Edit Profile')} </span>
          </Link>
        </Button>
      ) : (
        <div className="flex w-full h-screen items-center justify-center bg-grey-lighter  ml-auto  mt-24">
          <label className="flex flex-row text-center ml-auto mr-4 rounded-lg bg-primary text-white hover:bg-[#1eaad6] focus:outline-none p-2">
            <CameraIcon className="w-6 mr-1 mt-0  dark:text-dark-text-fill" />
            <span className=" dark:text-dark-text-fill">
              <span className="hidden md:block">{t('Change Picture')} </span>
            </span>
            <input type="file" className="hidden" />
          </label>
        </div>
      )}
    </div>
  );
}
