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

import { GET_ALL_TRAINEES } from '../queries/ratings.queries';
import {
  FaEdit,
  FaEraser,
  FaGithub,
  FaGithubSquare,
  FaPlusSquare,
  FaRemoveFormat,
  FaUserAlt,
} from 'react-icons/fa';
import {
  ADD_REPO,
  REMOVE_REPO,
  UPDATE_ORGANISATION_NAME,
} from '../Mutations/manageStudentMutations';
import {
  GET_GITHUB_STATISTICS,
  GET_ORGANISATION,
  GET_TRAINEE_PROFILE,
} from '../queries/manageStudent.queries';
import Spinner from './Spinner';
import GitHubActivityChart from './chartGitHub';
import BookOpenIcon from '@heroicons/react/outline/BookOpenIcon';
import { FiEdit3 } from 'react-icons/fi';
import { VscOrganization } from 'react-icons/vsc';

const organizationToken = localStorage.getItem('orgToken');
const token = localStorage.getItem('orgToken');
const orgName = window.localStorage.getItem('orgName');
interface OrganisationType {
  id?: string;
  name?: string;
  description?: string;
  admin?: {
    id?: string;
    role?: string;
    email?: string;
  };
  status?: string;
  gitHubOrganisation?: string;
  activeRepos?: string[];
}

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
    <div className="font-serif bg-light-bg dark:bg-dark-frame-bg lg:px-8">
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
  const [organisation, setOrganisation] = useState<OrganisationType>({});
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
      name:
        profileData.user && profileData.user.organizations
          ? profileData.user.organizations[0]
          : '',
    },
  });

  const [getGitHubStatistics] = useLazyQuery(GET_GITHUB_STATISTICS, {
    variables: {
      organisation: localStorage.getItem('orgName')?.split('.')[0],
      username: profileData.githubUsername,
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
    fetchOrgData({
      fetchPolicy: 'no-cache',
      onCompleted: (data) => {
        setOrganisation(data.getOrganization);
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
      name: organisation.name,
      repoUrl: repo,
    },
    /* istanbul ignore next */
    onCompleted: (data) => {
      setTimeout(() => {
        setRepo('');
        setButtonLoading(false);
        toast.success(' Added successfully');
        setRepoModel(false);
        setOrganisation((prevOrgData: OrganisationType) => {
          return {
            ...prevOrgData,
            activeRepos: data.addActiveRepostoOrganization.activeRepos,
          };
        });
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
      name: organisation.name,
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
            toast.success('Deleted successfully');
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
            toast.success('Organisation name updated');
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
            className="flex pt-3 pb-4 mb-0 text-black list-none dark:text-dark-text-fill"
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
              .map((tab) => {
                if (
                  tab.toLowerCase() === 'organizations' &&
                  user &&
                  user.role.toLowerCase() === 'superadmin'
                ) {
                  return null;
                }
                return (
                  <li
                    key={tab}
                    className=" mr-2 text-center last:mr-0 mt-5 w-[50%] md:mt-0"
                  >
                    <a
                      className={`text-[.8rem] md:text-[.95rem] font-bold uppercase px-6 py-[6px] md:py-3 shadow-sm rounded block leading-normal ${
                        openTab === `${tab}`
                          ? 'bg-white dark:bg-dark-bg border-b-2 md:border-b-4 border-b-primary '
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
                );
              })}
          </ul>
          {/* Profile tabs option end */}
        </div>
        <div className="flex flex-col w-full text-light-text dark:text-dark-text-fill">
          {/* About section start */}
          <div
            /* istanbul ignore next */
            className={
              openTab === 'About' ? 'flex flex-col gap-4 md:gap-y-7' : 'hidden'
            }
            id="link1"
          >
            <div className="grid gap-4 md:grid-cols-6 md:gap-7">
              <div className="flex flex-col items-start shadow-[0px_3px_4px_rgba(0,0,0,0.4)] justify-start gap-y-3 py-6 px-7 bg-indigo-100 md:col-span-3 dark:bg-dark-bg w-100 rounded-md">
                <div>
                  <h2 className="font-semibold text-[.84rem] md:text-[.95rem] mb-3">
                    BASIC INFORMATION
                  </h2>
                  <div className="flex flex-col ml-5 gap-y-3">
                    <div className="flex items-center gap-x-2">
                      <FaUserAlt className="w-5 dark:text-dark-text-fill" />
                      <span className="text-sm">
                        {profileData?.name || 'Unavailable'}
                      </span>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <MailIcon className="w-5 dark:text-dark-text-fill" />
                      <span className="text-sm">
                        {user?.email || 'Unavailable'}
                      </span>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <PhoneIcon className="w-5 dark:text-dark-text-fill" />
                      <span className="text-sm">
                        {profileData?.phoneNumber || 'Unavailable'}
                      </span>
                    </div>
                    <div className="flex items-center gap-x-2 ">
                      <HomeIcon className="w-5 dark:text-dark-text-fill" />
                      <span className="flex text-sm">
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
                        {(!profileData?.city || !profileData?.country) &&
                          'Unavailable'}
                      </span>
                    </div>
                    <div className="flex items-center gap-x-2 ">
                      <FaGithub className="w-5 dark:text-dark-text-fill" />
                      <span className="text-sm">
                        {profileData?.githubUsername || 'Unavailable'}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold text-[.84rem] md:text-[.95rem] mt-5 mb-3">
                    RESUME
                  </h2>
                  <div className="flex items-center ml-5 gap-x-2">
                    {traineeProfile?.resume ? (
                      <>
                        <BookOpenIcon className="w-5 dark:text-dark-text-fill" />
                        <a
                          className="text-sm"
                          href={traineeProfile.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Resume
                        </a>
                      </>
                    ) : (
                      <span className="text-sm">No Resume uploaded yet</span>
                    )}
                  </div>
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
              <div className="p-6 bg-indigo-100 shadow-[0px_3px_4px_rgba(0,0,0,0.4)] md:col-span-3 dark:bg-dark-bg rounded-md">
                {/* <h2 className="my-2 text-xl font-bold">{t('Biography')}</h2> */}
                <h2 className="font-semibold text-[.84rem] md:text-[.95rem] mb-2 uppercase">
                  {t('Biography')}
                </h2>
                <div className="mx-4 text-justify">
                  <span className="text-sm ">
                    {profileData?.biography
                      ? profileData?.biography.slice(0, 400)
                      : 'No biography'}
                  </span>
                </div>
              </div>
            </div>
            {/* istanbul ignore next */}
            {role && [].includes(role as never) && (
              /* istanbul ignore next */
              <div className="relative grid p-2 m-1 -ml-2 -mr-2">
                <div className="flex items-start justify-start p-2 shadow-[0px_3px_4px_rgba(0,0,0,0.4)] bg-primary md:col-span-2 rounded-t-2xl">
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
                <div className="flex flex-col items-start justify-start p-2 m-2 bg-indigo-100 shadow-[0px_3px_4px_rgba(0,0,0,0.4)] mt-9 dark:bg-dark-bg ">
                  <h3 className="m-2 mb-4 text-2xl font-bold">
                    {/* You in the organization */}
                    {t('You in the organization')}
                  </h3>
                  <div className="flex">
                    <h4 className="mr-4 text-base font-bold">{t('Role')}:</h4>
                    {user?.role}
                  </div>
                  <div className="flex py-4 ">
                    <h4 className="mr-4 text-base font-bold">{t('Team')}:</h4>
                    {singleUser && singleUser.team
                      ? singleUser.team.name
                      : 'Unavailable'}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-2 m-2 mt-0 bg-indigo-100 shadow-[0px_3px_4px_rgba(0,0,0,0.4)] md:mt-9 dark:bg-dark-bg ">
                  <h3 className="m-2 mb-4 text-2xl font-bold">
                    {t('Management')}
                  </h3>
                  <div className="flex items-center gap-x-2">
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
            {user?.role.toLowerCase() === 'trainee' && (
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
                    {gitHubStatistics && (
                      <div className="flex flex-col">
                        <i className="text-2xl ">
                          {gitHubStatistics?.totalCommits} total commits
                        </i>
                      </div>
                    )}
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
            )}
            <div
              className={`grid md:grid-cols-5 gap-4 md:gap-7 ${
                profileData.test != 'test'
                  ? user?.role !== 'admin'
                    ? 'hidden'
                    : ''
                  : ''
              }`}
            >
              <div className="flex flex-col items-start justify-start py-5 pl-7 shadow-[0px_3px_4px_rgba(0,0,0,0.4)] bg-indigo-100 rounded-md md:col-span-2 dark:bg-dark-bg ">
                <div className="flex items-center mb-3 gap-x-2">
                  <h2 className="font-semibold text-[.84rem] md:text-[.95rem] uppercase">
                    {t('Github Organisation')}
                  </h2>
                  <FiEdit3
                    className="text-base text-black cursor-pointer md:text-lg hover:text-primary dark:text-dark-text-fill"
                    onClick={() => {
                      setOrg(organisation?.gitHubOrganisation);
                      setOrgModel(true);
                    }}
                  />
                </div>
                <div className="flex items-center gap-10">
                  {organisation?.gitHubOrganisation && (
                    <a
                      href={`https://github.com/${organisation.gitHubOrganisation}`}
                      target="_blank"
                      className="flex items-center ml-5 gap-x-2"
                    >
                      <VscOrganization className="text-lg dark:text-dark-text-fill" />
                      <span className="text-sm">
                        {organisation?.gitHubOrganisation}
                      </span>
                    </a>
                  )}
                </div>
              </div>
              <div className="py-2 pl-7 pr-1 md:px-7 bg-indigo-100 rounded-md shadow-[0px_3px_4px_rgba(0,0,0,0.4)] md:col-span-3 dark:bg-dark-bg ">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-[.84rem] md:text-[.95rem] uppercase">
                    {t('Repository')}
                  </h2>
                  <Button
                    variant="default"
                    size="md"
                    style="flex py-[4px] md:py-[5px] px-3 text-[.78rem] md:text-sm font-semibold rounded-[3px] text-white bg-primary hover:bg-[#7A5EDC] "
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
                  {organisation?.activeRepos?.map(
                    (repo: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-start gap-2 mb-1 ml-5"
                      >
                        <span className="text-sm dark:text-dark-text-fill ">
                          {repo}
                        </span>
                        <FaEraser
                          className="mr-2 text-sm cursor-pointer dark:text-dark-text-fill"
                          onClick={() => {
                            setRepo(repo);
                            setRemoveRepoModel(true);
                          }}
                        />
                      </div>
                    ),
                  )}
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
                  className="absolute w-11 h-11 mt-1 md:mt-6 ml-5 md:ml-8 md:shadow-[0px_3px_4px_rgba(0,0,0,0.4)] bg-white border rounded-full cursor-pointer md:w-[50px] md:h-[50px] border-primary"
                  src={Logo}
                  alt="logo"
                />
                <div className="flex flex-col items-start justify-start ml-20 md:ml-36">
                  <h2 className="text-lg font-bold text-center text-dark-text-fill md:text-xl">
                    {profileData?.user?.organizations[0] || 'Unavailabe'}
                  </h2>
                  <h3 className="text-sm font-medium text-center text-dark-text-fill md:text-[16px] text-red">
                    https://andela.pusle.com
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-3 my-6 md:flex-row md:m-8">
                <div className="flex flex-col items-start justify-start w-full p-4 md:mx-2 bg-indigo-100 shadow-[0px_3px_4px_rgba(0,0,0,0.4)] dark:bg-dark-bg ">
                  <h3 className="mb-3 text-[0.95rem] font-semibold">
                    {t('YOUR ORGANISATION DETAILS')}
                  </h3>
                  <div className="flex pb-2 ml-3 text-sm">
                    <h4 className="mr-4 font-medium">
                      {t('Organisation name')}:
                    </h4>
                    {organisation.name}
                  </div>
                  {user?.role != 'admin' && (
                    <div className="flex pb-2 ml-3 text-sm">
                      <h4 className="mr-4 font-medium">{t('Admin email')}:</h4>
                      {organisation?.admin?.email}
                    </div>
                  )}
                  {user?.role === 'admin' && (
                    <div className="flex pb-2 ml-3 text-sm">
                      <h4 className="mr-4 font-medium">
                        {t('Github organisation')}:
                      </h4>
                      {organisation?.gitHubOrganisation}
                    </div>
                  )}
                  <div className="flex pb-2 ml-3 text-sm">
                    <h4 className="mr-4 font-medium">{t('Role')}:</h4>
                    {user?.role}
                  </div>
                </div>
                {role &&
                  ['manager', 'coordinator', 'trainee'].includes(
                    role as never,
                  ) && (
                    <div className="flex flex-col items-start justify-start w-full p-4 md:mx-2 bg-indigo-100 shadow-[0px_3px_4px_rgba(0,0,0,0.4)] dark:bg-dark-bg ">
                      <h3 className="mb-3 text-[0.95rem] font-semibold">
                        {t('MANAGEMENT')}
                      </h3>
                      {managementData.program && (
                        <div className="flex justify-center pb-2 ml-3 text-sm font-medium">
                          <h4 className="mr-2">{t('Program')}:</h4>
                          {managementData.program}
                        </div>
                      )}
                      {managementData.cohort && (
                        <div className="flex pb-2 ml-3 text-sm font-medium">
                          <h4 className="mr-2">{t('Cohort')}:</h4>
                          {managementData.cohort}
                        </div>
                      )}
                      {managementData.team && (
                        <div className="flex pb-2 ml-3 text-sm font-medium">
                          <h4 className="mr-2">{t('Team')}:</h4>
                          {managementData.team}
                        </div>
                      )}
                      {managementData.phase && (
                        <div className="flex pb-2 ml-3 text-sm font-medium">
                          <h4 className="mr-2">{t('Phase')}:</h4>
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
      </>{' '}
      {/* =========================== Start:: EditOrganisationModal & AddNewRepositoryModel & RemoveRepositoryModel =============================== */}
      <div
        className={`fixed  h-screen w-screen z-20 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center top-0 left-0 ${
          orgModel || repoModel || removeRepoModel ? 'block' : 'hidden'
        }`}
      >
        <div className=" p-2 pb-3 md:p-4 md:pb-5 bg-white rounded-md dark:bg-dark-bg w-[90%] xmd:w-[70%] md:w-3/5 lg:w-2/5">
          <div className="flex flex-wrap items-center justify-center w-full mt-1 card-title md:mt-0">
            <h3 className="w-11/12 text-sm font-bold text-center uppercase bg- dark:text-white">
              {(orgModel && 'Add Edit Organisation') ||
                (repoModel && 'Add New Repository') ||
                (removeRepoModel && t('Remove Repository'))}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="flex flex-col px-3 py-3 gap-y-4 md:px-8 ">
              <p className="text-sm dark:text-white ">
                {(orgModel && 'Fill in the organisation name.') ||
                  (repoModel && 'Fill in the repository name.') ||
                  (removeRepoModel &&
                    'Are you sure you want to delete this repository?')}
              </p>

              {!removeRepoModel && (
                <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                  <input
                    value={orgModel ? org : repo}
                    onChange={(e) => {
                      if (orgModel) {
                        setOrg(e.target.value);
                      } else {
                        setRepo(e.target.value);
                      }
                    }}
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 text-xs text-black border outline-none dark:text-white dark:bg-dark-tertiary border-primary"
                    placeholder={
                      orgModel
                        ? 'Enter organisation name'
                        : 'Enter repository name'
                    }
                  />
                </div>
              )}

              <div className="flex w-full gap-x-1">
                <Button
                  data-testid="removeInviteModel"
                  variant="info"
                  size="sm"
                  style="px-4 m-0 py-[6px] text-sm rounded-[3px] bg-neutral-500 hover:bg-neutral-600"
                  onClick={() => {
                    setOrgModel(false);
                    setRepoModel(false);
                    setRemoveRepoModel(false);
                  }}
                  children={t('Cancel')}
                />

                <Button
                  variant="primary"
                  size="sm"
                  disabled={
                    orgModel
                      ? org === organisation.gitHubOrganisation || !org.length
                      : !repo.length
                  }
                  style={`${
                    (
                      orgModel
                        ? org === organisation.gitHubOrganisation || !org.length
                        : !repo.length
                    )
                      ? 'cursor-not-allowed text-[.8rem] md:text-[.84rem] bg-neutral-500 hover:bg-neutral-500 text-white hover:text-white'
                      : ''
                  } m-0 px-4 min-w-16 py-[6px] h-8 text-[.84rem] rounded-[3px]`}
                  onClick={() => {
                    setButtonLoading(true);
                    if (orgModel) {
                      updateGithubOrganisation({
                        variables: {
                          name: organisation.name,
                          gitHubOrganisation: org,
                        },
                      });
                    } else if (repoModel) {
                      addActiveRepostoOrganization();
                    } else {
                      removeActiveRepostoOrganization();
                    }
                  }}
                  loading={buttonLoading}
                >
                  {t(orgModel ? 'Edit' : repoModel ? 'Add' : 'Delete')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End:: EditOrganisationModal & AddNewRepositoryModel & RemoveRepositoryModel =============================== */}
    </div>
  );
}
