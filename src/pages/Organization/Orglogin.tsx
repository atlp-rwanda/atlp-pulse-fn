// no-use-before-define
/* istanbul ignore next */
import React, { useId, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { ThreeDots, TailSpin } from 'react-loader-spinner';
import Button from '../../components/Buttons';
import useDocumentTitle from '../../hook/useDocumentTitle';
import functionTree from '../../assets/Functionality_Tree.svg';
import pulseStars from '../../assets/Property 1=Logo_flie (1).svg';
import LOGIN_ORGANIZATION_MUTATION from './LoginOrganisationMutation';
import ButtonLoading from '../../components/ButtonLoading';
import './orgName.css';
// import { input } from '@testing-library/user-event/dist/types/event/input';

function Orglogin() {
  useDocumentTitle('Login');
  const { t } = useTranslation();
  const [name, setName] = useState('');

  let isNameEmpty = true;
  const [inputWidth, setInputWidth] = useState('130px'); // Adjust the width as needed
  const orgInputId = useId();
  // const [inputWidth, setInputWidth] = useState('133px'); // Adjust the width as needed
  const handleNameChange = async (e: { target: { value: any } }) => {
    const newName = e.target.value;
    setName(newName);
    if (newName === '') {
      isNameEmpty = true;
      setInputWidth(`130px`);
    } else {
      const newWidth = Math.max(newName.length * 11);
      setInputWidth(`${newWidth}px`);
      isNameEmpty = false;
    }
  };

  const [OrgLogin, { loading }] = useMutation(LOGIN_ORGANIZATION_MUTATION);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  }: any = useForm();
  const navigate = useNavigate();

  const onSubmit = async (event: any) => {
    /* istanbul ignore next */
    event.preventDefault();
    setError('name', {
      message: t(''),
    });
    /* istanbul ignore next */
    const orgInput = {
      name,
    };
    await OrgLogin({
      /* istanbul ignore next */
      variables: { orgInput },
      /* istanbul ignore next */
      onCompleted({ loginOrg }) {
        /* istanbul ignore next */
        localStorage.setItem('orgToken', loginOrg.token);
        let value: string = String(name);

        value = `${name}`;
        /* istanbul ignore next */
        // TODO:
        localStorage.setItem('orgName', value);
        toast.success('Welcome! Sign in to Continue');
        navigate('/users/login');
      },
      onError(error) {
        /* istanbul ignore next */
        setError('name', {
          message: t(`${error.message}`),
        });
      },
    });
  };
  const handleKeyPress = async (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      await onSubmit(event);
    }
  };
  const names = name.replace(/ /gi, '').toLowerCase();
  const completeOrgUrl = `${names}`;

  return (
    <div className="grow  dark:bg-dark-frame-bg bg-indigo-50 flex flex-row font-serif">
      <div className="hidden lg:flex w-[50%] h-full  flex-col justify-center items-center mt-10 ">
        <div className=" flex flex-col justify-center items-center ">
          <div className="relative flex flex-row justify-center">
            <img
              src={pulseStars}
              alt="pulses"
              className="absolute inset-0 w-[41rem] h-[12rem] dark:hidden"
            />
            <p className="relative w-[70%] text-gray-700 text-[1.9em] p-5 text-center italic font-bold  dark:text-dark-text-fill">
              {t('Boost your organization')}
            </p>
          </div>

          <div className="w-[30vw] h-[42vh]  flex flex-row ">
            <img
              src={functionTree}
              alt="functions"
              className="w-sm dark:brightness-150"
            />
          </div>
        </div>
      </div>

      <div className=" w-full  lg:w-[50%] lg:p-5 flex flex-row items-end p-5">
        <div className="max-w-lg w-full mx-auto my-28 bg-indigo-100 dark:bg-dark-bg  p-5 sm:p-14 md:shadow-xl sm:shadow-none md:rounded-xl sm:rounded-none">
          <div className="text-center  text-black-600 text-2xl font-bold dark:text-dark-text-fill ">
            {t('Sign in to your Organization')}
          </div>
          <div className="text-md  text-black-600 mt-2 text-center font-semibold dark:text-dark-text-fill sm:text-xs">
            {t('Enter your organization’s Dev-Pulse URL')}
          </div>
          <form action="#none" className="space-y-6 mt-4" onSubmit={onSubmit}>
            <label
              className="orgName bg-white dark:bg-neutral-600 rounded mt-1 py-1 px-2"
              htmlFor={orgInputId}
            >
              {!isNameEmpty ? (
                <input
                  id={orgInputId}
                  name="name"
                  placeholder="Your-organization"
                  type="text"
                  value={name}
                  data-testid="orgName"
                  onChange={handleNameChange}
                  onKeyDown={handleKeyPress}
                  style={{
                    width: inputWidth,
                  }} // Set the width dynamically
                  className="inputStyle inputOne w-full border-primary rounded font-serif "
                />
              ) : (
                <input
                  id={orgInputId}
                  name="name"
                  placeholder="Your-organization"
                  type="text"
                  value={name}
                  data-testid="orgName"
                  onChange={handleNameChange}
                  onKeyDown={handleKeyPress}
                  style={{
                    width: inputWidth,
                  }} // Set the width dynamically
                  className="inputStyle inputOne w-full border-primary rounded dark:bg-neutral-600"
                />
              )}
              <span className="inputStyle inputTwo w-full p-2 border border-primary rounded text-gray-400">
                .devpulse.org
              </span>
            </label>

            {errors.name && (
              <small className="text-red-600">{errors.name.message}</small>
            )}

            <div>
              <Button
                type="submit"
                variant="primary"
                data-testid="loginForm"
                size="lg"
                style="w-full ml-0 hover:bg-violet-600 text-sm"
              >
                {loading ? (
                  <div className="flex justify-center items-center ">
                    <TailSpin
                      ariaLabel="loading-indicator"
                      color="white"
                      height={20}
                      width={20}
                    />
                  </div>
                ) : (
                  t('Continue')
                )}
              </Button>
            </div>
            <div className="w-full text-sm  text-light-text dark:text-dark-text-fill">
              {t('Looking to register an organization instead?')}
              <Link to="/signup/org" className="text-primary">
                {/* <a href="#link" > */}
                {t('Register a new organization')}
                {/* </a> */}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Orglogin;
