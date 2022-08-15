import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { ArrowLeftIcon } from '@heroicons/react/solid';

import Input from '../components/Input';
import ProfileCoverpage from '../components/ProfileCoverpage';
import CountrySelector from '../components/CountrySelector';

import profileFields from '../constants/formFields';
import { COUNTRIES, SelectMenuOption } from '../constants/countries';
import Button from '../components/Buttons';

type fields = {
  [key: string]: string | number;
};
const fieldState: fields = {};

profileFields.forEach((field) => {
  fieldState[field.id as keyof typeof fieldState] = '';
});

function EditProfile() {
  // eslint-disable-next-line  operator-linebreak
  const [profileFieldState, setProfileFieldState] =
    useState<fields>(fieldState);

  const myRef = React.createRef<HTMLDivElement>();

  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState('RW');

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  }: any = useForm();

  const onSubmit = () => {
    reset();
  };

  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen">
      <ProfileCoverpage currentPage="editProfile" />
      <div className="flex flex-wrap ml-4 lg:ml-64">
        <div className="lg:w-[25vw] mt-3">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row text-black dark:text-dark-text-fill"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <span className="text-xs font-bold uppercase px-5 py-3 shadow-sm rounded block leading-normal border-b-4 border-b-primary ">
                {t('Editing Profile')}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className=" lg:px-4 border bg-white dark:border-dark-bg  dark:bg-dark-bg dark:text-white w-[94vw] md:w-[96vw] lg:w-[75%] h-fit mx-4 lg:ml-72 my-6 rounded-lg">
        <div className="px-4">
          <Button
            variant="default"
            size="md"
            style="text-center mb-4 rounded-lg bg-primary text-white hover:bg-[#1eaad6] focus:outline-none p-1 mt-4"
          >
            {' '}
            <Link to="/dashboard/profile" className="flex flex-row">
              <ArrowLeftIcon className="w-6 mr-1 md:mr-2 dark:text-dark-text-fill p-1" />
              {t('Back to Profile')}
            </Link>
          </Button>
          <form
            className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {profileFields.map((field) => (
              <Input
                key={field.id}
                value={profileFieldState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                register={register}
                errors={errors}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={t(`${field.placeholder}`)}
                customClass="dark:bg-dark-bg"
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setProfileFieldState({
                    ...profileFieldState,
                    [field.id]: e.target.value,
                  });
                }}
              />
            ))}
            <div className="flex flex-col justify-start items-start mt-auto">
              <label htmlFor="Country" className="font-semibold mb-2">
                {t('Country')}
              </label>
              <div className="w-full">
                <CountrySelector
                  id="countries"
                  ref={myRef}
                  open={isOpen}
                  onToggle={() => setIsOpen(!isOpen)}
                  onChange={(val) => setCountry(val)}
                  selectedValue={
                    COUNTRIES.find(
                      (option) => option.value === country,
                    ) as SelectMenuOption
                  }
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start md:col-span-2">
              <label htmlFor="Biography" className="font-semibold mb-2">
                {t('Biography')}
              </label>
              <textarea
                name="bio"
                id=""
                cols={20}
                rows={5}
                className="rounded-md w-full border p-2 dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white"
              >
                Lorem ipsum dollores is here ro staye Lorem ipsum dollores is
                here ro staye Lorem ipsum dollores is here ro staye Lorem
              </textarea>
            </div>
            <button
              type="submit"
              className="group relative my-4 md:w-2/3 sm:w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#1280a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-secondary sm:mx-0"
              onSubmit={() => {}}
            >
              {t('Update Profile')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
