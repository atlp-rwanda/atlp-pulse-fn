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
import { FaEdit, FaEraser, FaGithub, FaGithubSquare, FaPlusSquare, FaRemoveFormat } from 'react-icons/fa';
import { ADD_REPO, GET_GITHUB_STATISTICS, GET_ORGANISATION, REMOVE_REPO, UPDATE_ORGANISATION_NAME } from '../Mutations/manageStudentMutations';
import Spinner from './Spinner';
import GitHubActivityChart from './chartGitHub';

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
    <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen lg:px-8">
      <div className="border bg-indigo-100 dark:border-dark-bg  dark:bg-dark-bg dark:text-white w-[90vw] md:w-[92vw] lg:w-[75%] h-[56vh] md:h-[52vh] lg:h-[52vh] mx-0  mr-24  md:mr-0 md:mx-4  mb-6 lg:-ml-8 rounded-lg">
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

export default function ProfileTabs({ data }: any) {
  const [openTab, setOpenTab] = React.useState('About');
  const { t } = useTranslation();
  const tabs: Array<string> = ['About', 'Organizations', 'Account'];
  const { user, setName } = useContext(UserContext);
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


  /* istanbul ignore next */
  const [fetchData2] = useLazyQuery(GET_ALL_TRAINEES, {
    variables: {
      orgToken: organizationToken,
    },
  });

  const [fetchOrgData] = useLazyQuery(GET_ORGANISATION, {
    variables: {
      name: orgName,
    },
  });

  const [getGitHubStatistics]= useLazyQuery(GET_GITHUB_STATISTICS, {
    variables: {
      organisation: localStorage.getItem('orgName'),
      username: data?.githubUsername,
    }
  });




  

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
    getGitHubStatistics({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
 setIsLoaded(false)
        
        setGitHubStatistics(data.gitHubActivity);

      },
      onError:(error)=>{
        setIsLoaded(false)
      }
   });
    fetchOrgData({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setOrganisation(data.getOrganization);
      }
    });



  }, []);

  const [addActiveRepostoOrganization] = useMutation(ADD_REPO, {
    variables: {
      name: orgName,
      repoUrl: repo
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
      repoUrl: repo
    },
    /* istanbul ignore next */
    onCompleted: (data) => {
      fetchOrgData({
        fetchPolicy: 'network-only',
        onCompleted: (data) => {
          setOrganisation(data.getOrganization);
          setTimeout(() => {
            setButtonLoading(false);
            toast.success('deleted successfully');
            setRemoveRepoModel(false);
          }, 500);
        }
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
        }
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
                  <div className="p-2 flex flex-col md:col-span-2 justify-start items-start bg-indigo-100  dark:bg-dark-bg shadow ">
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
                    <div className="py-4 flex ">
                      <FaGithub className="w-6 mr-2 dark:text-dark-text-fill" />
                      {data?.githubUsername}
                 
                    </div>
                  </div>
                  <div className="p-2 md:col-span-3 bg-indigo-100  dark:bg-dark-bg shadow">
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
                        {orgName}
                      </h2>
                      <h3 className="font-bold text-dark-text-fill text-center text-sm md:text-lg ">
                        https://andela.pulse.com/
                      </h3>
                    </div>
                  </div>
                  <div className="p-2 m-2 mt-9 flex flex-col justify-start items-start  bg-indigo-100  dark:bg-dark-bg shadow ">
                    <h3 className="text-2xl font-bold m-2  mb-4">
                      {/* You in the organization */}
                      {t('You in the organization')}
                    </h3>
                    <div className="py-4 flex  justify-center">
                      <h4 className="font-bold text-base mr-4">
                        {t('Joined')}:
                      </h4>
                      {singleUser && singleUser.team
                        ? singleUser.team.cohort.startDate.split('T')[0]
                        : 'Unavailabe'}
                    </div>

                    <div className="flex">
                      <h4 className="font-bold text-base mr-4">{t('Role')}:</h4>
                      {user?.role}
                    </div>
                    <div className="py-4 flex ">
                      <h4 className="font-bold text-base mr-4">{t('Team')}:</h4>
                      {singleUser && singleUser.team
                        ? singleUser.team.name
                        : 'Unavailabe'}
                    </div>
                  </div>
                  <div className="p-2 m-2 mt-0 md:mt-9 flex flex-col justify-start items-start  bg-indigo-100  dark:bg-dark-bg shadow ">
                    <h3 className="text-2xl font-bold m-2  mb-4">
                      {t('Management')}
                    </h3>
                    <div className="py-4 flex  justify-center">
                      <h4 className="font-bold text-base mr-4">
                        {t('program')}:
                      </h4>
                      {singleUser && singleUser.team
                        ? singleUser.team.cohort.program.name
                        : 'Unavailabe'}
                    </div>
                    <div className="flex">
                      <h4 className="font-bold text-base mr-4">
                        {t('Stage(current)')}:
                        {singleUser && singleUser.team
                          ? singleUser.team.cohort.phase.name
                          : 'Unavailabe'}
                      </h4>
                    </div>
                    <div className="py-4 flex ">
                      <h4 className="font-bold text-base mr-4">
                        {t('Manager')}:
                      </h4>

                      {singleUser && singleUser.team
                        ? singleUser.team.cohort.program.manager.profile.name
                        : 'Unavailabe'}
                    </div>
                  </div>
                </div>
                <div
                  className={`text-sm font-sans ${data.role!='test'? user?.role === 'trainee'?'':'hidden':''}`}
                  style={{
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'space-between',
                    paddingBlock: '10px',
                    marginBottom: '20px',
                  
                  }}
                >

               
                {isLoaded?(
                  <p>
                
                    <div className={`flex justify-center items-center h-48 ${data.role!='test'? user?.role === 'trainee'?'':'hidden':''}`}>
                    <i>
                   Loading gitHub statistics...
                    </i>
            <Spinner />
            <div className="spinner" />
          </div>
                  </p>
                ):(
                  <div className={`w-1/2 flex justify-between  ${data.role!='test'? user?.role === 'trainee'?'':'hidden':''}`}>
                  <div className='flex flex-col'>
            
                    <i className='text-2xl '>
          
                    {gitHubStatistics?.totalCommits} total commits
                  
                    </i>
                 
    
                </div>
                <div className='flex flex-col items-center justify-center'>
                <div>
                  {gitHubStatistics?(
 <GitHubActivityChart data={gitHubStatistics} />
                  ):(
                    <>

                    </>
                  )}
               
    </div>
                </div>
                </div>
                )}  
                </div>
                <div className={`grid md:grid-cols-5 gap-4 md:gap-6  ${data.test!='test'?user?.role !== 'admin'?'hidden':'':''}`}>
                  <div className="p-2 flex flex-col md:col-span-2 justify-start items-start bg-white  dark:bg-dark-bg shadow ">
                    <h3 className="text-2xl font-bold m-2  mb-4">
                     Github Organisation
         
                    </h3>
                    <div className='flex items-center gap-10'>
                    <div className="py-4 flex  justify-center">
                      <FaGithubSquare className="w-6 mr-2 dark:text-dark-text-fill" />
                      {organisation?.gitHubOrganisation}
                    </div>

                    <FaEdit className='w-6 mr-2 dark:text-dark-text-fill' onClick={()=>{
                    setOrg(organisation?.gitHubOrganisation);
                    setOrgModel(true);
                    }} />

                    </div>
                 
               
                  </div>
                  <div className="p-2 md:col-span-3 bg-white  dark:bg-dark-bg shadow ">
                    <div className='flex justify-between'>
                    <h2 className="text-xl font-bold m-2  mb-4">
                      Repository
                    
                    </h2>
                    <Button variant="default"
              size="md"
              style="group relative md:w-1/3 sm:w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#1280a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-secondary sm:mx-0"
              /* istanbul ignore next */
              onClick={() => {
                setRepoModel(true);
              }}
              data-testid="change_password"
              children="Add New"
            />
                    {/* <button className='flex justify-center items-center '>
                        Add New </button> */}

                   
                    
                    </div>
                  <div>
                    {organisation?.activeRepos?.map((repo: any) => (
                      <div className="flex justify-start items-start gap-10 items-center ml-5">
                      <h2 className="font-bold text-dark-text-fill text-center ">
                        {repo}
                      </h2>
                      
                      <FaEraser className='w-6 mr-2 dark:text-dark-text-fill' onClick={()=>{
                        setRepo(repo)
                        setRemoveRepoModel(true)  
                      }} />
                
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
                <div className="grid m-1 p-2 -ml-2 -mr-2 relative">
                  <div className="bg-primary p-1 flex md:col-span-2 justify-start items-start shadow rounded-t-2xl">
                    <img
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full cursor-pointer mt-6 ml-8 bg-white dark:bg-dark-bg absolute border border-primary"
                      src={Logo}
                      alt="logo"
                    />
                    <div className="flex flex-col justify-start items-start ml-36">
                      <h2 className="font-bold text-dark-text-fill text-center text-lg md:text-xl">
                        {singleUser && singleUser.team
                          ? singleUser.team.cohort.program.organization.name
                          : 'Unavailabe'}
                      </h2>
                      <h3 className="font-bold text-dark-text-fill text-center text-sm md:text-lg ">
                        https://andela.pusle.com
                      </h3>
                    </div>
                  </div>
                  <div className="p-2 m-2 mt-6 flex flex-col justify-start items-start  bg-indigo-100 dark:bg-dark-bg shadow ">
                    <h3 className="text-2xl font-bold m-2  mb-4">
                      {t('You in the organization')}
                    </h3>
                    <div className="py-4 flex  justify-center">
                      <h4 className="font-bold text-base mr-4">
                        {t('Joined')}:
                      </h4>
                      {singleUser && singleUser.team
                        ? singleUser.team.cohort.startDate.split('T')[0]
                        : 'Unavailabe'}
                    </div>
                    <div className="flex">
                      <h4 className="font-bold text-base mr-4">{t('Role')}:</h4>
                      {user?.role}
                    </div>
                    <div className="py-4 flex ">
                      <h4 className="font-bold text-base mr-4">{t('Team')}:</h4>
                      {singleUser && singleUser.team
                        ? singleUser.team.name
                        : 'Unavailabe'}
                    </div>
                  </div>
                  <div className="p-2 m-2 mt-2  md:mt-6 flex flex-col justify-start items-start  bg-indigo-100  dark:bg-dark-bg shadow ">
                    <h3 className="text-2xl font-bold m-2  mb-4">
                      {t('Management')}
                    </h3>
                    <div className="py-4 flex  justify-center">
                      <h4 className="font-bold text-base mr-4">
                        {t('Program')}:
                      </h4>

                      {singleUser && singleUser.team
                        ? singleUser.team.cohort.program.name
                        : 'Unavailabe'}
                    </div>
                    <div className="flex">
                      <h4 className="font-bold text-base mr-4">
                        {t('Stage(current)')}:
                        {singleUser && singleUser.team
                          ? singleUser.team.cohort.phase.name
                          : 'Unavailabe'}
                      </h4>
                    </div>
                    <div className="py-4 flex ">
                      <h4 className="font-bold text-base mr-4">
                        {t('Manager')}:
                      </h4>
                      {singleUser && singleUser.team
                        ? singleUser.team.cohort.program.manager.profile.name
                        : 'Unavailabe'}
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

      </>      {/* =========================== Start::  RemoveTraineeModel =============================== */}

<div
  className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 top-0 left-0 bottom-0 ${
    removeRepoModel === true ? 'block' : 'hidden'
  }`}
>
  <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
    <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
      <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
        {t('Remove Repo')}
      </h3>
      <hr className=" bg-primary border-b my-3 w-full" />
    </div>
    <div className="card-body">
      <form className=" py-3 px-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
      
              Are you sure you want to delete this repository,
         
          </h3>
        </div>

        <div className="w-full flex justify-between">
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
{/* =========================== End::  RemoveTraineeModel =============================== */}




{/* =========================== Start::  InviteTraineeModel =============================== */}

<div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 top-0 left-0 bottom-0 ${
          repoModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
              Add New Repository
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                Fill in the repository name
                </h3>
              </div>

              <div className="text-white input my-3 h-9 ">
                <div className="text-white grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    value={repo}
                    onChange={(e) => {
                      setRepo(e.target.value);
                    }}
                    type="email"
                    name="email"
                    className=" dark:bg-dark-tertiary text-black border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder="enter repository name"
                  />
                </div>
              </div>

              <div className="w-full flex justify-between">
                <Button
                  data-testid="removeInviteModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={
                    () => setRepoModel(false)
                  }
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
      {/* =========================== End::  InviteTraineeModel =============================== */}



{/* =========================== Start::  InviteTraineeModel =============================== */}

<div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 top-0 left-0 bottom-0 ${
          orgModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
              Add Edit Organisation 
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                Fill in the organisation name
                </h3>
              </div>

              <div className="text-white input my-3 h-9 ">
                <div className="text-white grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    value={org}
                    onChange={(e) => {
                      setOrg(e.target.value);
                    }}
                    type="email"
                    name="email"
                    className=" dark:bg-dark-tertiary text-black border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder="enter organisation name"
                  />
                </div>
              </div>

              <div className="w-full flex justify-between">
                <Button
                  data-testid="removeInviteModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={
                    () => setOrgModel(false)
                  }
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
                        gitHubOrganisation:org
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
      {/* =========================== End::  InviteTraineeModel =============================== */}
    </div>
  );
}
