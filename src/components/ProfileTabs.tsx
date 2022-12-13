
import { HomeIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Logo from '../assets/logo.svg';
import Button from '../components/Buttons';
import Input from '../components/Input';
import { passwordFields } from '../constants/formFields';
import { UserContext } from '../hook/useAuth';
import { CountryComponent } from '../pages/Profile';
import { toast } from 'react-toastify';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import {GET_ALL_TRAINEES} from "../Mutations/Ratings"

import { useLazyQuery } from '@apollo/client';
import {useEffect} from 'react';

const organizationToken = localStorage.getItem('orgToken');

 
export function EditPassword() {
  type fields = {
    [key: string]: string | number;
  };
  const fieldState: fields = {};

  passwordFields.forEach((field) => {
    fieldState[field.id as keyof typeof fieldState] = '';
  });
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  }: any = useForm();
  /* istanbul ignore next */
  const onSubmit = () => {
    reset()
  };

  const [passwordFieldState, setPasswordField] = useState<fields>(fieldState);
  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen lg:px-8">
      <div className="border bg-white dark:border-dark-bg  dark:bg-dark-bg dark:text-white w-[90vw] md:w-[92vw] lg:w-[75%] h-[56vh] md:h-[52vh] lg:h-[52vh] mx-0  mr-24  md:mr-0 md:mx-4  mb-6 lg:-ml-8 rounded-lg">
        <div className="px-4">
          <form
            className="mt-12 grid grid-cols-1 gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {passwordFields.map((field) => (
              <Input
                key={field.id}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={t(`${field.placeholder}`)}
                customClass="dark:bg-dark-bg"
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  /* istanbul ignore next */
                  setPasswordField({
                    ...passwordFieldState,
                    [field.id]: e.target.value,
                  });
                }}
                register={register}
                errors={errors}
              />
            ))}

            <Button
              variant="default"
              size="md"
              style="group relative md:w-2/3 sm:w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#1280a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-secondary sm:mx-0"
              /* istanbul ignore next */
              onClick={() => {}}
              data-testid="change_password"
            >
              {t('Change Password')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ProfileTabs({ data }: any) {
  const [openTab, setOpenTab] = React.useState('About');
  const { t } = useTranslation();
  const tabs: Array<string> = ['About', 'Organizations', 'Account'];
  const { user, setName } = useContext(UserContext);
  const [traineeData, setTraineeData] = useState<any>([]);
  const [singleUser, setSingleUser]=useState<any>([]);
 
 /* istanbul ignore next */
  const [fetchData2] = useLazyQuery(GET_ALL_TRAINEES, {});


 
    useEffect(() => {



    fetchData2({
      
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setTraineeData(data.getAllUsers);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

},[]);

 useEffect(() => {
let singleTrainne=traineeData.filter((item:any) =>item.email=== user.email)
  setSingleUser(singleTrainne[0]) //returns an object with single trainnee data that can be accessed singleUser.email
  console.log(singleTrainne)

 },[traineeData])
  

  return (
    
    <div className="flex flex-wrap lg:ml-60 lg:mr-8">
      <>
        <div className="lg:w-[40vw]">
          {/* Profile tabs option start */}
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row text-black dark:text-dark-text-fill"
            role="tablist"
          >
            {tabs.map((tab) => (
              <li
                key={tab}
                className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              >
                <a
                  className={`text-xs font-bold uppercase px-3 md:px-5 py-3 shadow-sm rounded block leading-normal ${
                    openTab === `${tab}`
                      ? 'bg-white dark:bg-dark-bg border-b-4 border-b-primary '
                      : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(`${tab}`);

                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                  data-testid="tab-link"
                >
                  {t(tab)}
                </a>
              </li>
            ))}
          </ul>
          {/* Profile tabs option end */}
        </div>
        <div className="relative flex flex-col min-w-0 break-words text-light-text dark:text-dark-text-fill  w-full rounded">
          <div className="py-2 flex-auto">
            <div className="tab-content tab-space">
              {/* About section start */}
              <div
                className={openTab === 'About' ? 'block' : 'hidden'}
                id="link1"
              >
                <div className="grid md:grid-cols-5 gap-4 md:gap-6 ">
                  <div className="p-2 flex flex-col md:col-span-2 justify-start items-start bg-white  dark:bg-dark-bg shadow ">
                    <h3 className="text-2xl font-bold m-2  mb-4">
                      {data?.name}{' '}
                    </h3>
                    <div className="py-4 flex  justify-center">
                      <MailIcon className="w-6 mr-2 dark:text-dark-text-fill" />
                      {user?.email}
                    </div>
                    <div className="flex">
                      <PhoneIcon className="w-6 mr-2 dark:text-dark-text-fill" />
                      {data?.phoneNumber}
                    </div>
                    <div className="py-4 flex ">
                      <HomeIcon className="w-6 mr-2 dark:text-dark-text-fill" />
                      {data?.city},
                      {data?.country && (
                        <CountryComponent country={data.country} />
                      )}
                    </div>
                  </div>
                  <div className="p-2 md:col-span-3 bg-white  dark:bg-dark-bg shadow">
                    <h2 className="text-xl font-bold m-2  mb-4">
                      Biography 
                       {t('Biography')}
                      </h2>
                    <p>{data?.biography || 'Add biography'}</p>
                  </div>
                </div>
                <div className="grid m-1 p-2 -ml-2 -mr-2 relative">
                  <div className="bg-primary p-2 flex md:col-span-2 justify-start items-start shadow rounded-t-2xl">
                    <img
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full cursor-pointer mt-6 ml-8 bg-white dark:bg-dark-bg absolute border border-primary"
                      src={Logo}
                      alt="logo"
                    />
                    <div className="flex flex-col justify-start items-start ml-36">
                      <h2 className="font-bold text-dark-text-fill text-center text-2xl md:text-3xl">
                         {singleUser && singleUser.cohort
                        ? singleUser.cohort.program.organization.name
                        : 'Un availabe'}
                      </h2>
                      <h3 className="font-bold text-dark-text-fill text-center text-sm md:text-lg ">
                        https://andela.pulse.com/
                      </h3>
                    </div>
                  </div>
                  <div className="p-2 m-2 mt-9 flex flex-col justify-start items-start  bg-white  dark:bg-dark-bg shadow ">
                    <h3 className="text-2xl font-bold m-2  mb-4">
                      {/* You in the organization */}
                      {t('You in the organization')}
                    </h3>
                    <div className="py-4 flex  justify-center">
                      <h4 className="font-bold text-base mr-4">
                        {t('Joined')}:
                      </h4>
                       {singleUser && singleUser.cohort
                      ? singleUser.cohort.startDate.split("T")[0]
                      : 'Un availabe'}
                    </div>
                    <div className="flex">
                      <h4 className="font-bold text-base mr-4">{t('role')}:</h4>
                      {user?.role}
                    </div>
                    <div className="py-4 flex ">
                      <h4 className="font-bold text-base mr-4">{t('Team')}:</h4>
                       {singleUser && singleUser.cohort
                        ? singleUser.team.name
                        : 'Un availabe'} 
                    </div>
                  </div>
                  <div className="p-2 m-2 mt-0 md:mt-9 flex flex-col justify-start items-start  bg-white  dark:bg-dark-bg shadow ">
                    <h3 className="text-2xl font-bold m-2  mb-4">
                      {t('Management')}
                    </h3>
                    <div className="py-4 flex  justify-center">
                      <h4 className="font-bold text-base mr-4">
                        {t('program')}:
                      </h4>
                      {singleUser && singleUser.cohort
                        ? singleUser.cohort.program.name
                        : 'Un availabe'}
                    </div>
                    <div className="flex">
                      <h4 className="font-bold text-base mr-4">
                        {t('Stage(current)')}:  
                      {singleUser && singleUser.cohort
                        ? singleUser.cohort.phase.name
                        : 'Un availabe'}
                      </h4>
                    </div>
                    <div className="py-4 flex ">
                      <h4 className="font-bold text-base mr-4">
                        {t('Manager')}:
                      </h4>
                     
                      {singleUser && singleUser.cohort
                        ? singleUser.cohort.program.manager.profile.name
                        : 'Un availabe'}

                    </div>
                  </div>
                </div>
              </div>
              {/* About section end */}
              <div
                className={openTab === 'Organizations' ? 'block' : 'hidden'}
                id="link3"
              >
                <div className="grid m-1 p-2 -ml-2 -mr-2 relative">
                  <div className="bg-primary p-1 flex md:col-span-2 justify-start items-start shadow rounded-t-2xl">
                    <img
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full cursor-pointer mt-6 ml-8 bg-white dark:bg-dark-bg absolute border border-primary"
                      src={Logo}
                      alt="logo"
                    />
                    <div className="flex flex-col justify-start items-start ml-36">
                      <h2 className="font-bold text-dark-text-fill text-center text-lg md:text-xl">
                       {singleUser && singleUser.cohort
                        ? singleUser.cohort.program.organization.name
                        : 'Un availabe'}
                      </h2>
                      <h3 className="font-bold text-dark-text-fill text-center text-sm md:text-lg ">
                        https://andela.pusle.com
                      </h3>
                    </div>
              
                  </div>
                  <div className="p-2 m-2 mt-6 flex flex-col justify-start items-start  bg-white  dark:bg-dark-bg shadow ">
                    <h3 className="text-2xl font-bold m-2  mb-4">
                      {t('You in the organization')}
                    </h3>
                    <div className="py-4 flex  justify-center">
                      <h4 className="font-bold text-base mr-4">
                        {t('Joined')}:
                      </h4>
                     {singleUser && singleUser.cohort
                      ? singleUser.cohort.startDate.split("T")[0]
                      : 'Un availabe'}
                    </div>
                    <div className="flex">
                      <h4 className="font-bold text-base mr-4">{t('Role')}:</h4>
                      {t('Trainee')}
                    </div>
                    <div className="py-4 flex ">
                      <h4 className="font-bold text-base mr-4">{t('Team')}:</h4>
                     {singleUser && singleUser.cohort
                        ? singleUser.cohort.program.team
                        : 'Un availabe'}
                    </div>
                  </div>
                  <div className="p-2 m-2 mt-2  md:mt-6 flex flex-col justify-start items-start  bg-white  dark:bg-dark-bg shadow ">
                    <h3 className="text-2xl font-bold m-2  mb-4">
                      {t('Management')}
                    </h3>
                    <div className="py-4 flex  justify-center">
                      <h4 className="font-bold text-base mr-4">
                        {t('Program')}:
                      </h4>
                     
                      {singleUser && singleUser.cohort
                        ? singleUser.cohort.program.name
                        : 'Un availabe'}
                    </div>
                    <div className="flex">
                      <h4 className="font-bold text-base mr-4">
                        {t('Stage(current)')}: 
                          {singleUser && singleUser.cohort
                        ? singleUser.cohort.phase.name
                        : 'Un availabe'}
                      </h4>
                    </div>
                    <div className="py-4 flex ">
                      <h4 className="font-bold text-base mr-4">
                        {t('Manager')}:
                      </h4>
                      {singleUser && singleUser.cohort
                        ? singleUser.cohort.program.manager.profile.name
                        : 'Un availabe'}
                    </div>
                  </div>
                </div>
              </div>
              {/* Change password  start */}
              <div
                className={openTab === 'Account' ? 'block' : 'hidden'}
                id="link2"
              >
                <EditPassword />
              </div>
              {/* Change password  end */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
