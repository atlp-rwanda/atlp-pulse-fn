import { PencilAltIcon, PencilIcon } from '@heroicons/react/solid';
import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { ClipLoader, PulseLoader } from 'react-spinners';
import {
  gql,
  useApolloClient,
  useLazyQuery,
  useMutation,
} from '@apollo/client';

import { CameraIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from './Buttons';
import { GET_PROFILE } from '../Mutations/User';
import Avatar from '../assets/avatar.png';
import Spinner from '../components/ButtonLoading';
import { UserContext } from '../hook/useAuth';

export default function ProfileCoverpage({
  currentPage,
  data,
}: {
  currentPage: string;
  data: any;
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const UPDATE_AVATAR = gql`
    mutation UpdateAvatar($avatar: String) {
      updateAvatar(avatar: $avatar) {
        avatar
      }
    }
  `;
  const UPDATE_COVER = gql`
    mutation UpdateCover($cover: String) {
      updateCoverImage(cover: $cover) {
        cover
      }
    }
  `;

  const client = useApolloClient();
  const [UpdateAvatar, { loading }] = useMutation(UPDATE_AVATAR);
  const [UpdateCover, { loading: loading2 }] = useMutation(UPDATE_COVER);
  const [profileData, setProfileData] = useState<any>();
  const [getProfile, { refetch }] = useLazyQuery(GET_PROFILE);
  const [spinner, setSpinner] = useState(false);
  const { setProfileImage } = useContext(UserContext);
  const [spinnerCover, setSpinnerCover] = useState(false);
  const [status, setStatus] = useState({
    isUploaded: false,
  });

  const uploadImage = async (files: any) => {
    try {
      const formData = new FormData();
      formData.append('file', files[0]);
      formData.append('upload_preset', 'my_upload');

      const avatar = await axios.post(
        `${process.env.COVER_IMAGE_URL}`,
        formData,
      );
      /* istanbul ignore next */
      const updated = await UpdateAvatar({
        variables: { avatar: avatar?.data?.secure_url },
      });
      /* istanbul ignore next */
      setSpinner(true);
      /* istanbul ignore if */
      /* istanbul ignore next */
      if (updated) {
        setSpinner(false);
        setProfileImage(updated?.data?.updateAvatar?.avatar);
        toast.success('updated');
      }
      /* istanbul ignore next */
      if (updated?.data?.updateAvatar?.avatar) {
        /* istanbul ignore next */
        setStatus({
          isUploaded: true,
        });
      }
      /* istanbul ignore next */
      await client.resetStore();
    } catch (error) {}
  };

  const uploadCover = async (files: any) => {
    try {
      const formData = new FormData();
      formData.append('file', files[0]);
      formData.append('upload_preset', 'my_upload');

      const cover = await axios.post(
        `${process.env.COVER_IMAGE_URL}`,
        formData,
      );
      /* istanbul ignore next */
      const updated = await UpdateCover({
        variables: { cover: cover?.data?.secure_url },
      });
      /* istanbul ignore next */
      setSpinnerCover(true);
      if (updated) {
        setSpinnerCover(false);
        toast.success('updated');
      }
      /* istanbul ignore next */
      if (updated?.data?.updateCoverImage?.cover) {
        /* istanbul ignore next */
        setStatus({
          isUploaded: true,
        });
      }
      /* istanbul ignore next */
      await client.resetStore();
    } catch (error) {}
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProfile();
        /* istanbul ignore next */
        setProfileData(data);
      } catch (error: any) {
        /* istanbul ignore next */
        toast.error(error?.message || 'Something went wrong');
      }
    };
    fetchData();
  }, [status.isUploaded]);

  const handleEdit = () => {
    /* istanbul ignore next */
    navigate('edit', {
      state: {
        profile: data,
      },
    });
  };

  return (
    <div
      style={{
        backgroundImage: profileData?.getProfile?.cover
          ? `url(${profileData?.getProfile?.cover})`
          : `url(${'https://images.unsplash.com/photo-1483168527879-c66136b56105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3016&q=80'})`,
      }}
      className="font-serif bg-cover bg-no-repeat bg-defaultCover bg-center bg-fixed h-[28vh] md:h-[26vh] flex flex-row text-center  align-center items-center"
    >
      <div className="relative">
        <img
          src={
            profileData?.getProfile?.avatar
              ? profileData?.getProfile?.avatar
              : Avatar
          }
          className="relative w-24 h-24 m-4 ml-6 rounded-full md:w-28 md:h-28 md:ml-20 mt-32 md:mt-12 object-cover"
          alt="profile-avatar"
        />

        <div
          className={`${
            currentPage !== 'editProfile'
              ? '-right-3 md:-right-4'
              : '-right-12 md:-right-16'
          } absolute bottom-7 md:bottom-8`}
          role="button"
        >
          <label className="flex items-center md:gap-x-1 px-2 py-[3px] md:py-1 cursor-pointer rounded-[3px] bg-primary text-white hover:bg-[#7a5edc] overflow-hidden">
            {/* Conditionally render based on the spinner state */}
            {spinner ? (
              <PulseLoader color="#ffffff" size={6} className="my-1" />
            ) : (
              <>
                <PencilAltIcon className="w-[14px] md:w-[15px] dark:text-dark-text-fill" />
                <span className="text-[.73rem] font-semibold md:text-sm dark:text-dark-text-fill">
                  <span>{t('Edit')}</span>
                </span>
              </>
            )}
            <input
              type="file"
              className="hidden"
              data-testid="upload-image"
              onChange={(event) => {
                uploadImage(event.target.files);
                setSpinner(true);
              }}
            />
          </label>
        </div>
      </div>
      {currentPage !== 'editProfile' ? (
        <Button
          /* istanbul ignore next */
          onClick={() => handleEdit()}
          variant="default"
          size="md"
          style="flex items-center gap-x-1 ml-auto mr-4 mt-[10.5rem] md:mt-24 rounded-[3px] bg-primary text-white hover:bg-[#7a5edc] focus:outline-none p-1 md:py-[6px] md:px-3 "
        >
          <PencilIcon className="w-[18px] dark:text-dark-text-fill " />
          <span className="text-[.9rem] hidden md:block">
            {' '}
            {t('Edit Profile')}{' '}
          </span>
        </Button>
      ) : (
        <div className="flex items-center justify-center w-full h-screen mt-24 ml-auto bg-grey-lighter">
          <label className="flex items-center ml-auto mr-4 rounded-md bg-primary text-white hover:bg-[#7a5edc] p-[6px]  cursor-pointer">
            {spinnerCover ? (
              <ClipLoader size={14} color="#ffffff" className='m-1'/>
            ) : (
              <CameraIcon className="w-5 dark:text-dark-text-fill" />
            )}
            <input
              type="file"
              className="hidden"
              data-testid="upload-cover"
              onChange={(event) => {
                uploadCover(event.target.files);
                setSpinnerCover(true);
              }}
            />
          </label>
        </div>
      )}
    </div>
  );
}
/* istanbul ignore next */
function setData(data: any) {
  /* istanbul ignore next */
  throw new Error('Function not implemented.');
}
