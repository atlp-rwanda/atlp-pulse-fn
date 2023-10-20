/* eslint-disable */
/* istanbul ignore file */

import { HomeIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useLazyQuery,
  useMutation,
} from '@apollo/client';
import Logo from '../assets/logo.svg';
import Button from '../components/Buttons';
import Input from '../components/Input';
import { passwordFields } from '../constants/formFields';
import { UserContext } from '../hook/useAuth';
import { CountryComponent } from '../pages/Profile';

import { GET_ALL_TRAINEES } from '../Mutations/Ratings';
import {
  FaEdit,
  FaEraser,
  FaGithub,
  FaGithubSquare,
  FaPlusSquare,
  FaRemoveFormat,
} from 'react-icons/fa';
import {
  ADD_REPO,
  GET_GITHUB_STATISTICS,
  GET_ORGANISATION,
  REMOVE_REPO,
  UPDATE_ORGANISATION_NAME,
  GET_TRAINEE_PROFILE,
} from '../Mutations/manageStudentMutations';
import Spinner from './Spinner';
import GitHubActivityChart from './chartGitHub';
import BookOpenIcon from '@heroicons/react/outline/BookOpenIcon';

const organizationToken = localStorage.getItem('orgToken');
const token = localStorage.getItem('orgToken');
const orgName = window.localStorage.getItem('orgName');

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
    reset();
  };

  const [passwordFieldState, setPasswordField] = useState<fields>(fieldState);

  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg lg:px-8">
      <div className="border bg-indigo-100 dark:border-dark-bg dark:bg-dark-bg dark:text-white w-[90vw] md:w-[92vw] lg:w-[75%] h-[56vh] md:h-[52vh] lg:h-[52vh] mx-0 mr-24 md:mr-0 md:mx-4 mb-6 lg:-ml-8 rounded-lg">
        <div className="px-4">
          <form
            className="grid grid-cols-1 gap-4 mt-12"
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
              style="group relative md:w-2/3 sm:w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-secondary sm:mx-0"
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

export default function ProfileTabs({ data: profileData }: any) {
  const [openTab, setOpenTab] = React.useState('About');
  const { t } = useTranslation();
  const tabs: Array<string> = ['About', 'Organizations'];
  const { user, setName } = useContext(UserContext);
  const [traineeProfile, setTraineeProfile] = useState<any>({});
  const [traineeData, setTraineeData] = useState<any>([]);
  const [singleUser, setSingleUser] = useState<any>({});
  const [organisation, setOrganisation] = useState<any>({});
  const [repo, setRepo] = useState<any>('');
  const [org, setOrg] = useState<any>('');
  const [orgModel, setOrgModel] = useState<boolean>(false);
  const [repoModel, setRepoModel] = useState<boolean>(false);

  const [buttonLoading, setButtonLoading] = useState(false);
  const [removeRepoModel, setRemoveRepoModel] = useState<boolean>(false);

  const [isLoaded, setIsLoaded] = useState(true);
  const [gitHubStatistics, setGitHubStatistics] = useState<any>(null);

  const [managementData, setManagementData] = useState<any>({
    program: null,
    cohort: null,
    team: null,
    phase: null,
    startDate: null,
  });
  const role: String | undefined = profileData?.user?.role;

  /* istanbul ignore next */
  const [fetchData2] = useLazyQuery(GET_ALL_TRAINEES, {
    variables: {
      orgToken: organizationToken,
    },
  });

  const [fetchOrgData] = useLazyQuery(GET_ORGANISATION, {
    variables: {
      name: orgName?.split('.')[0],
    },
  });
  const [getGitHubStatistics] = useLazyQuery(GET_GITHUB_STATISTICS, {
    variables: {
      organisation: localStorage.getItem('orgName')?.split('.')[0],
      username: profileData.githubUsername
    },
  });

  const [fetchProfile] = useLazyQuery(GET_TRAINEE_PROFILE, {
    variables: {
      orgToken: organizationToken,
    },
  });

  /* istanbul ignore next */
  useEffect(() => {
    switch (role) {
      case 'manager':
        setManagementData((data: any) => ({
          ...data,
          program: profileData.user.program?.name,
        }));
        break;
      case 'coordinator':
        setManagementData((data: any) => ({
          ...data,
          cohort: profileData.user.cohort?.name,
          program: profileData.user.cohort?.program?.name,
        }));
        break;
      case 'trainee':
        // eslint-disable-next-line no-case-declarations
        const { team } = profileData.user;
        team &&
          setManagementData((data: any) => ({
            ...data,
            program: team.cohort?.program?.name,
            cohort: team.cohort?.name,
            team: team.name,
            phase: team.cohort?.phase?.name,
            startDate: team.cohort?.startDate,
          }));
        break;
      default:
    }
  }, [profileData, role]);
  /* istanbul ignore next */
  useEffect(() => {
    fetchData2({
      fetchPolicy: 'no-cache',
      onCompleted: (data) => {
        setTraineeData(data.getAllUsers);
      },
      onError: (error) => {
        // toast.error(error.message);
      },
    });
    getGitHubStatistics({
      fetchPolicy: 'no-cache',
      onCompleted: (data) => {
        setIsLoaded(false);

        setGitHubStatistics(data.gitHubActivity);
      },
      onError: (error) => {
        setIsLoaded(false);
      },
    });
    // fetchOrgData({
    //   fetchPolicy: 'no-cache',
    //   onCompleted: (data) => {
    //     setOrganisation(data.getOrganization);
    //   },
    // });
    fetchOrgData({
      fetchPolicy: 'no-cache',
      onCompleted: (data) => {
        setOrganisation(data);
      },
    });

    fetchProfile({
      fetchPolicy: 'no-cache',
      onCompleted: (data) => {
        setTraineeProfile(data?.getProfile);
      },
    });
  }, []);

  const [addActiveRepostoOrganization] = useMutation(ADD_REPO, {
    variables: {
      name: orgName,
      repoUrl: repo,
    },
    /* istanbul ignore next */
    onCompleted: (data) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.success(' added successfully');
        setRepoModel(false);
      }, 500);
    },
    /* istanbul ignore next */
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
        setRepoModel(false);
      }, 1000);
    },
  });

  const [removeActiveRepostoOrganization] = useMutation(REMOVE_REPO, {
    variables: {
      name: orgName,
      repoUrl: repo,
    },
    /* istanbul ignore next */
    onCompleted: (data) => {
      fetchOrgData({
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
          setOrganisation(data.getOrganization);
          setTimeout(() => {
            setButtonLoading(false);
            toast.success('deleted successfully');
            setRemoveRepoModel(false);
          }, 500);
        },
      });
    },
    /* istanbul ignore next */
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
        setRepoModel(false);
      }, 1000);
    },
  });

  const [updateGithubOrganisation] = useMutation(UPDATE_ORGANISATION_NAME, {
    /* istanbul ignore next */
    onCompleted: (data) => {
      fetchOrgData({
        fetchPolicy: 'network-only',
        onCompleted: (data) => {
          setOrganisation(data.getOrganization);
          setTimeout(() => {
            setButtonLoading(false);
            toast.success('organisation name updated');
            setOrgModel(false);
          }, 500);
        },
      });
    },
    /* istanbul ignore next */
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
        setOrgModel(false);
      }, 1000);
    },
  });

  useEffect(() => {
    const singleTrainne = traineeData.filter(
      (item: any) => item.email === user.email,
    );

    setSingleUser(singleTrainne[0]); // returns an object with single trainnee data that can be accessed singleUser.email
  }, [traineeData]);

  return (
    <div className="flex flex-wrap">
      <>
        <div className="lg:w-[40vw]">
          {/* Profile tabs option start */}
          <ul
            className="flex flex-row flex-wrap pt-3 pb-4 mb-0 text-black list-none dark:text-dark-text-fill"
            role="tablist"
          >
            {tabs
              .filter((tab) => {
                switch (role) {
                  case 'superAdmin':
                    if (tab === 'About') {
                      return true;
                    }
                    return false;
                  default:
                    return true;
                }
              })
              .map((tab) => (
                <li
                  key={tab}
                  className="flex-auto mr-2 -mb-px text-center last:mr-0"
                >
                  <a
                    className={`text-xs font-bold uppercase px-3 md:px-5 py-3 shadow-sm rounded block leading-normal ${
                      openTab === `${tab}`
                        ? 'bg-white dark:bg-dark-bg border-b-4 border-b-primary '
                        : ''
                    }`}
                    /* istanbul ignore next */
                    onClick={(e) => {
                      /* istanbul ignore next */
                      e.preventDefault();
                      /* istanbul ignore next */
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
        <div className="relative flex flex-col w-full min-w-0 break-words rounded text-light-text dark:text-dark-text-fill">
          <div className="flex-auto py-2">
            <div className="tab-content tab-space">
              {/* About section start */}
              <div
                /* istanbul ignore next */
                className={openTab === 'About' ? 'block' : 'hidden'}
                id="link1"
              >
                <div className="grid gap-4 md:grid-cols-6 md:gap-6 ">
                  <div className="flex flex-col items-start justify-start px-4 py-2 bg-indigo-100 shadow md:col-span-3 dark:bg-dark-bg w-100">
                    <h2 className="my-2 text-xl font-bold">
                      {profileData?.name || 'Name not available'}{' '}
                    </h2>
                    <div className="flex justify-center py-4">
                      <MailIcon className="w-6 mr-2 dark:text-dark-text-fill" />
                      {user?.email || 'unavailable'}
                    </div>
                    <div className="flex">
                      <PhoneIcon className="w-6 mr-2 dark:text-dark-text-fill" />
                      {profileData?.phoneNumber || 'unavailable'}
                    </div>
                    <div className="flex py-4 ">
                      <HomeIcon className="w-6 mr-2 dark:text-dark-text-fill" />
                      {profileData?.city}
                      {/* istanbul ignore next */}
                      {profileData?.city &&
                        /* istanbul ignore next */
                        profileData?.country &&
                        ','}
                      {profileData?.country && (
                        /* istanbul ignore next */
                        <CountryComponent country={profileData.country} />
                      )}
                    </div>
                    <div className="flex py-4 ">
                      <FaGithub className="w-6 mr-2 dark:text-dark-text-fill" />
                      {profileData?.githubUsername}
                    </div>
                    <div className="flex py-4">
                      {traineeProfile?.resume ? (
                        <>
                          <BookOpenIcon className="w-6 mr-2 dark:text-dark-text-fill" />
                          <a
                            href={traineeProfile.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Resume
                          </a>
                        </>
                      ) : (
                        <p>No Resume uploaded yet</p>
                      )}
                    </div>
                    {/* Or you can disable the link like below */}
                    {/* <div className="flex py-4">
                      {traineeProfile.resume ? (
                        <>
                          <BookOpenIcon className="w-6 mr-2 dark:text-dark-text-fill" />
                          <a
                            href={traineeProfile.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Resume
                          </a>
                        </>
                      ) : (
                        <div>
                          <BookOpenIcon className="w-6 mr-2 dark:text-dark-text-fill" />
                          <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="disabled-link"
                          >
                            View Resume
                          </a>
                        </div>
                      )}
                    </div> */}
                  </div>
                  <div className="px-4 py-2 bg-indigo-100 shadow md:col-span-3 dark:bg-dark-bg">
                    <h2 className="my-2 text-xl font-bold">{t('Biography')}</h2>
                    <p className="pt-4">
                      {profileData?.biography || 'No biography'}
                    </p>
                  </div>
                </div>
                {/* istanbul ignore next */}
                {role && [].includes(role as never) && (
                  /* istanbul ignore next */
                  <div className="relative grid p-2 m-1 -ml-2 -mr-2">
                    <div className="flex items-start justify-start p-2 shadow bg-primary md:col-span-2 rounded-t-2xl">
                      <img
                        className="absolute w-16 h-16 mt-6 ml-8 bg-white border rounded-full cursor-pointer md:w-20 md:h-20 dark:bg-dark-bg border-primary"
                        src={Logo}
                        alt="logo"
                      />
                      <div className="flex flex-col items-start justify-start ml-36">
                        <h2 className="text-2xl font-bold text-center text-dark-text-fill md:text-3xl">
                          {orgName}
                        </h2>
                        <h3 className="text-sm font-bold text-center text-dark-text-fill md:text-lg ">
                          https://andela.pulse.com/
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-2 m-2 bg-indigo-100 shadow mt-9 dark:bg-dark-bg ">
                      <h3 className="m-2 mb-4 text-2xl font-bold">
                        {/* You in the organization */}
                        {t('You in the organization')}
                      </h3>
                      <div className="flex">
                        <h4 className="mr-4 text-base font-bold">
                          {t('Role')}:
                        </h4>
                        {user?.role}
                      </div>
                      <div className="flex py-4 ">
                        <h4 className="mr-4 text-base font-bold">
                          {t('Team')}:
                        </h4>
                        {singleUser && singleUser.team
                          ? singleUser.team.name
                          : 'Unavailabe'}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-2 m-2 mt-0 bg-indigo-100 shadow md:mt-9 dark:bg-dark-bg ">
                      <h3 className="m-2 mb-4 text-2xl font-bold">
                        {t('Management')}
                      </h3>
                      <div className="flex justify-center py-4">
                        <h4 className="mr-4 text-base font-bold">
                          {t('program')}:
                        </h4>
                        {singleUser && singleUser.team
                          ? singleUser.team.cohort.program.name
                          : 'Unavailabe'}
                      </div>
                      <div className="flex">
                        <h4 className="mr-4 text-base font-bold">
                          {t('Stage(current)')}:
                          {singleUser && singleUser.team
                            ? singleUser.team.cohort.phase.name
                            : 'Unavailabe'}
                        </h4>
                      </div>
                      <div className="flex py-4 ">
                        <h4 className="mr-4 text-base font-bold">
                          {t('Manager')}:
                        </h4>

                        {singleUser && singleUser.team
                          ? singleUser.team.cohort.program.manager.profile.name
                          : 'Unavailabe'}
                      </div>
                    </div>
                  </div>
                )}
                <div
                  className={`text-sm font-sans ${
                    profileData.role != 'test'
                      ? user?.role === 'trainee'
                        ? ''
                        : 'hidden'
                      : ''
                  }`}
                  style={{
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'space-between',
                    paddingBlock: '10px',
                    marginBottom: '20px',
                  }}
                >
                  {isLoaded ? (
                    <div
                      className={`flex justify-center items-center h-48 ${
                        profileData.role != 'test'
                          ? user?.role === 'trainee'
                            ? ''
                            : 'hidden'
                          : ''
                      }`}
                    >
                      <i>Loading gitHub statistics...</i>

                      <Spinner />
                      <div className="spinner" />
                    </div>
                  ) : (
                    <div
                      className={`w-1/2 flex justify-between ${
                        profileData.role != 'test'
                          ? user?.role === 'trainee'
                            ? ''
                            : 'hidden'
                          : ''
                      }`}
                    >
                      <div className="flex flex-col">
                        <i className="text-2xl ">
                          {gitHubStatistics?.totalCommits} total commits
                        </i>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div>
                          {gitHubStatistics ? (
                            <GitHubActivityChart data={gitHubStatistics} />
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`grid md:grid-cols-5 gap-4 md:gap-6 ${
                    profileData.test != 'test'
                      ? user?.role !== 'admin'
                        ? 'hidden'
                        : ''
                      : ''
                  }`}
                >
                  <div className="flex flex-col items-start justify-start p-2 bg-white shadow md:col-span-2 dark:bg-dark-bg ">
                    <h3 className="m-2 mb-4 text-2xl font-bold">
                      Github Organisation
                    </h3>
                    <div className="flex items-center gap-10">
                      <div className="flex justify-center py-4">
                        <FaGithubSquare className="w-6 mr-2 dark:text-dark-text-fill" />
                        {organisation?.gitHubOrganisation}
                      </div>

                      <FaEdit
                        className="w-6 mr-2 dark:text-dark-text-fill"
                        onClick={() => {
                          setOrg(organisation?.gitHubOrganisation);
                          setOrgModel(true);
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-2 bg-white shadow md:col-span-3 dark:bg-dark-bg ">
                    <div className="flex justify-between">
                      <h2 className="m-2 mb-4 text-xl font-bold">Repository</h2>
                      <Button
                        variant="default"
                        size="md"
                        style="group relative md:w-1/3 sm:w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#1280a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-secondary sm:mx-0"
                        /* istanbul ignore next */
                        onClick={() => {
                          setRepoModel(true);
                        }}
                        data-testid="change_password"
                        children="Add New"
                      />
                      {/* <button className='flex items-center justify-center '>
Add New </button> */}
                    </div>
                    <div>
                      {organisation?.activeRepos?.map((repo: any) => (
                        <div className="flex items-start items-center justify-start gap-10 ml-5">
                          <h2 className="font-bold text-center text-dark-text-fill ">
                            {repo}
                          </h2>

                          <FaEraser
                            className="w-6 mr-2 dark:text-dark-text-fill"
                            onClick={() => {
                              setRepo(repo);
                              setRemoveRepoModel(true);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* About section end */}
              <div
                className={openTab === 'Organizations' ? 'block' : 'hidden'}
                id="link3"
              >
                <div className="relative p-2 m-1 -ml-2 -mr-2">
                  <div className="flex items-start justify-start p-1 shadow bg-primary md:col-span-2 rounded-t-2xl">
                    <img
                      className="absolute w-12 h-12 mt-6 ml-8 bg-white border rounded-full cursor-pointer md:w-16 md:h-16 dark:bg-dark-bg border-primary"
                      src={Logo}
                      alt="logo"
                    />
                    <div className="flex flex-col items-start justify-start ml-36">
                      <h2 className="text-lg font-bold text-center text-dark-text-fill md:text-xl">
                        {profileData?.user?.organizations[0] || 'Unavailabe'}
                      </h2>
                      <h3 className="text-sm font-bold text-center text-dark-text-fill md:text-lg ">
                        https://andela.pusle.com
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-col items-start justify-start w-full p-4 m-2 mt-6 bg-indigo-100 shadow dark:bg-dark-bg ">
                      <h3 className="mb-4 text-2xl font-bold">
                        {t('You in the organization')}
                      </h3>
                      <div className="flex pb-2">
                        <h4 className="mr-4 text-base font-bold">
                          {t('Role')}:
                        </h4>
                        {user?.role}
                      </div>
                    </div>
                    {role &&
                      ['manager', 'coordinator', 'trainee'].includes(
                        role as never,
                      ) && (
                        <div className="flex flex-col items-start justify-start w-full p-4 m-2 bg-indigo-100 shadow md:mt-6 dark:bg-dark-bg ">
                          <h3 className="mb-4 text-2xl font-bold">
                            {t('Management')}
                          </h3>
                          {managementData.program && (
                            <div className="flex justify-center pb-2">
                              <h4 className="mr-2 text-base font-bold">
                                {t('Program')}:
                              </h4>
                              {managementData.program}
                            </div>
                          )}
                          {managementData.cohort && (
                            <div className="flex pb-2 ">
                              <h4 className="mr-2 text-base font-bold">
                                {t('Cohort')}:
                              </h4>
                              {managementData.cohort}
                            </div>
                          )}
                          {managementData.team && (
                            <div className="flex pb-2 ">
                              <h4 className="mr-2 text-base font-bold">
                                {t('Team')}:
                              </h4>
                              {managementData.team}
                            </div>
                          )}
                          {managementData.phase && (
                            <div className="flex pb-2 ">
                              <h4 className="mr-2 text-base font-bold">
                                {t('Phase')}:
                              </h4>
                              {managementData.phase}
                            </div>
                          )}
                        </div>
                      )}
                  </div>
                </div>
              </div>
              {/* Change password start */}
              <div
                className={openTab === 'Account' ? 'block' : 'hidden'}
                id="link2"
              >
                <EditPassword />
              </div>
              {/* Change password end */}
            </div>
          </div>
        </div>
      </>{' '}
      {/* =========================== Start:: RemoveTraineeModel =============================== */}
      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 top-0 left-0 bottom-0 ${
          removeRepoModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              {t('Remove Repo')}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3 ">
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                  Are you sure you want to delete this repository,
                </h3>
              </div>

              <div className="flex justify-between w-full">
                <Button
                  data-testid="removeModel2"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => setRemoveRepoModel(false)}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  data-testid="removeMemberFromCohort"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setButtonLoading(true);
                    removeActiveRepostoOrganization();
                  }}
                  loading={buttonLoading}
                >
                  {t('Proceed')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End:: RemoveTraineeModel =============================== */}
      {/* =========================== Start:: InviteTraineeModel =============================== */}
      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 top-0 left-0 bottom-0 ${
          repoModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              Add New Repository
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3 ">
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                  Fill in the repository name
                </h3>
              </div>

              <div className="my-3 text-white input h-9 ">
                <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                  <input
                    value={repo}
                    onChange={(e) => {
                      setRepo(e.target.value);
                    }}
                    type="email"
                    name="email"
                    className="w-full px-5 py-2 font-sans text-xs text-black border rounded outline-none dark:bg-dark-tertiary border-primary"
                    placeholder="enter repository name"
                  />
                </div>
              </div>

              <div className="flex justify-between w-full">
                <Button
                  data-testid="removeInviteModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => setRepoModel(false)}
                  children={t('Cancel')}
                />

                <Button
                  variant="primary"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setButtonLoading(true);
                    addActiveRepostoOrganization();
                  }}
                  loading={buttonLoading}
                >
                  {t('Add')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End:: InviteTraineeModel =============================== */}
      {/* =========================== Start:: InviteTraineeModel =============================== */}
      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 top-0 left-0 bottom-0 ${
          orgModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              Add Edit Organisation
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3 ">
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                  Fill in the organisation name
                </h3>
              </div>

              <div className="my-3 text-white input h-9 ">
                <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                  <input
                    value={org}
                    onChange={(e) => {
                      setOrg(e.target.value);
                    }}
                    type="email"
                    name="email"
                    className="w-full px-5 py-2 font-sans text-xs text-black border rounded outline-none dark:bg-dark-tertiary border-primary"
                    placeholder="enter organisation name"
                  />
                </div>
              </div>

              <div className="flex justify-between w-full">
                <Button
                  data-testid="removeInviteModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => setOrgModel(false)}
                  children={t('Cancel')}
                />

                <Button
                  variant="primary"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setButtonLoading(true);
                    updateGithubOrganisation({
                      variables: {
                        name: orgName,
                        gitHubOrganisation: org,
                      },
                    });
                  }}
                  loading={buttonLoading}
                >
                  {t('Edit')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End:: InviteTraineeModel =============================== */}
    </div>
  );
}