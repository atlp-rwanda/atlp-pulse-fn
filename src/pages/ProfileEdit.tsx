/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { gql, useApolloClient, useMutation } from '@apollo/client';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import React, { useState, useContext, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import { UserContext } from '../hook/useAuth';
import CountrySelector from '../components/CountrySelector';
import Input from '../components/Input';
import ProfileCoverpage from '../components/ProfileCoverpage';
import useDocumentTitle from '../hook/useDocumentTitle';
import Resume from '../components/Resume';

import Button from '../components/Buttons';
import { COUNTRIES, SelectMenuOption } from '../constants/countries';
import profileFields from '../constants/formFields';

type fields = {
  [key: string]: string | number;
};
const fieldState: fields = {};

profileFields.forEach((field) => {
  fieldState[field.id as keyof typeof fieldState] = '';
});

const UPDATE_PROFILE = gql`
  mutation UpdateProfile(
    $lastName: String
    $firstName: String
    $address: String
    $city: String
    $country: String
    $phoneNumber: String
    $biography: String
    $fileName: String
    $cover: String
    $githubUsername: String
  ) {
    updateProfile(
      lastName: $lastName
      firstName: $firstName
      address: $address
      city: $city
      country: $country
      phoneNumber: $phoneNumber
      biography: $biography
      fileName: $fileName
      cover: $cover
      githubUsername: $githubUsername
    ) {
      id
      lastName
      firstName
      biography
      phoneNumber
      address
      city
      country
    }
  }
`;

function EditProfile() {
  // eslint-disable-next-line  operator-linebreak
  const { setName } = useContext(UserContext);
  const [profileFieldState, setProfileFieldState] =
    useState<fields>(fieldState);

  const myRef = React.createRef<HTMLDivElement>();

  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(0);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const { profile }: any = location.state;
  // eslint-disable-next-line no-underscore-dangle

  useDocumentTitle('Edit Profile');
  const {
    control,
    register,
    handleSubmit,

    formState: { errors },
  }: any = useForm({ mode: 'all', defaultValues: profile });
  const client = useApolloClient();
  const [UpdateProfile, { loading }] = useMutation(UPDATE_PROFILE);
  const onSubmit = async (data: any) => {
    /* istanbul ignore next */
    try {
      await UpdateProfile({
        variables: { ...data },
      });
      await client.resetStore();
      /* istanbul ignore next */
      toast.success('Profile has been updated');
      navigate('/profile');
    } catch (error) {}
  };

  return (
    <div className="h-full mx-auto bg-light-bg dark:bg-dark-frame-bg font-serif">
      <ProfileCoverpage data={profile} currentPage="editProfile" />
      <div className="flex flex-wrap mt-6 md:mt-5">
        <ul
          className="flex flex-row flex-wrap pt-3 pb-2 mb-0 text-black list-none dark:text-dark-text-fill text-[.8rem] md:text-[.93rem]"
          role="tablist"
        >
          <li
            role="button"
            onClick={() => setTab(0)}
            className="flex-auto mr-2 -mb-px text-center last:mr-0"
          >
            <span
              className={`block px-3 md:px-5 py-[6px] md:py-3 font-bold leading-normal uppercase border-b-2 md:border-b-4 rounded shadow-sm  ${
                tab === 0 && 'border-b-primary'
              }  `}
            >
              {t('Editing Profile')}
            </span>
          </li>

          <li
            role="button"
            onClick={() => setTab(1)}
            className="flex-auto mr-2 -mb-px text-center last:mr-0"
          >
            <span
              className={`block px-3 md:px-5 py-[6px] md:py-3 font-bold leading-normal uppercase border-b-2 md:border-b-4 rounded shadow-sm  ${
                tab === 1 && 'border-b-primary'
              }  `}
            >
              {t('Upload Resume')}
            </span>
          </li>
        </ul>
      </div>

      {tab === 0 && (
        <div className="border bg-indigo-100 dark:border-dark-bg  dark:bg-dark-bg dark:text-white w-full my-1 md:my-4 p-4 md:p-7 rounded-lg">
          <Button
            variant="default"
            size="md"
            style="rounded-[3px] bg-primary text-[.78rem] md:text-[.85rem] text-white focus:outline-none px-2 md:px-3 py-[4px] md:py-[6px] m-0 mb-6"
          >
            {' '}
            <Link to="/profile" className="flex items-center gap-x-1">
              <ArrowLeftIcon className="w-4 dark:text-dark-text-fill" />
              <span>{t('Back to profile')}</span>
            </Link>
          </Button>
          <form
            className="flex flex-col gap-y-4 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col xmd:flex-row gap-6 lg:gap-10 w-full">
              <div className="flex flex-col gap-y-3 basis-1/2">
                {profileFields.map((field) => {
                  if (
                    !['address', 'city'].includes(field.labelText.toLowerCase())
                  ) {
                    return (
                      <Input
                        key={field.id}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        register={register}
                        errors={errors}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={t(`${field.placeholder}`)}
                        customClass="dark:bg-black/45"
                        /* istanbul ignore next */
                        handleChange={(
                          e: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                          setProfileFieldState({
                            ...profileFieldState,
                            [field.id]: e.target.value,
                          });
                        }}
                      />
                    );
                  }
                  return null;
                })}
                <div className="flex gap-x-4 w-full">
                  {profileFields.map((field) => {
                    if (
                      ['address', 'city'].includes(
                        field.labelText.toLowerCase(),
                      )
                    ) {
                      return (
                        <Input
                          key={field.id}
                          labelText={field.labelText}
                          labelFor={field.labelFor}
                          id={field.id}
                          register={register}
                          errors={errors}
                          name={field.name}
                          type={field.type}
                          isRequired={field.isRequired}
                          placeholder={t(`${field.placeholder}`)}
                          customClass="dark:bg-black/45"
                          /* istanbul ignore next */
                          handleChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                          ) => {
                            setProfileFieldState({
                              ...profileFieldState,
                              [field.id]: e.target.value,
                            });
                          }}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-y-3 basis-1/2">
                <div className="flex flex-col items-start justify-start mt-auto font-serif">
                  <label
                    htmlFor="Country"
                    className="mb-[2px] font-semibold text-[.84rem] md:text-[.87rem]"
                  >
                    {t('Country')}
                  </label>
                  <Controller
                    control={control}
                    name="country"
                    render={({ field: { onChange, value, ref } }) => (
                      <CountrySelector
                        id="countries"
                        ref={myRef}
                        open={isOpen}
                        onToggle={() => setIsOpen(!isOpen)}
                        onChange={(val) => {
                          onChange(val);
                        }}
                        selectedValue={
                          COUNTRIES.find(
                            (option) => option.value === value,
                          ) as SelectMenuOption
                        }
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col items-start justify-start md:col-span-2 h-full">
                  <label
                    htmlFor="Biography"
                    className="mb-[2px] font-semibold text-[.84rem] md:text-[.87rem]"
                  >
                    {t('Biography')}
                    <span className='font-light text-[.7rem] ml-2'>*Max(400 chars)</span>
                  </label>
                  <textarea
                    name="bio"
                    id=""
                    cols={20}
                    rows={5}
                    maxLength={400}
                    {...register('biography')}
                    placeholder="Add your biography here"
                    className="w-full custom-scrollbar resize-none h-full px-4 py-3 text-[.8rem] md:text-[.84rem] text-justify border rounded-[3px] dark:bg-black/45 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 dark:text-dark-text-fill dark:border-neutral-700"
                  />
                </div>
              </div>
            </div>
            <button
              type={loading ? 'button' : 'submit'}
              className="w-full xmd:w-[7.7rem] h-8 flex flex-row items-center justify-center my-3 text-[.81rem] md:text-sm font-semibold rounded-[3px]  text-white bg-primary  dark:focus:ring-secondary m-0"
            >~
              {loading && <PulseLoader color="#ffffff" size={9} />}
              {!loading && t('Update Profile')}
            </button>
          </form>
        </div>
      )}

      {tab === 1 && (
        <div className="font-serif lg:px-4 border bg-white dark:border-dark-bg  dark:bg-dark-bg dark:text-white w-full h-fit my-6 rounded-lg">
          <div>
            <Resume />
          </div>
        </div>
      )}
    </div>
  );
}

export default EditProfile;
