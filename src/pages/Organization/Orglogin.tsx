// no-use-before-define
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import Button from '../../components/Buttons';
import useDocumentTitle from '../../hook/useDocumentTitle';
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
  // const [inputWidth, setInputWidth] = useState('133px'); // Adjust the width as needed
  const handleNameChange = async (e: { target: { value: any } }) => {
    const newName = e.target.value;
    setName(newName);
    if (newName === '') {
      isNameEmpty = true;
      setInputWidth(`130px`);
    } else {
      const newWidth = Math.max(newName.length * 11);

      // console.log(newWidth)
      setInputWidth(`${newWidth}px`);
      isNameEmpty = false;
    }
    // console.log('1', name)

    // Calculate the width based on the length of the entered text
    // const newWidth = `${Math.max(newName.length * 9)}px`; // Adjust minimum width here
    // setInputWidth(newWidth);

    // setInputWidth(`${newWidth}px`);
  };

  // console.log('2', isNameEmpty);
  // console.log('3', inputWidth)

  const formatVariable = async (e: any) => {
    const value: string = String(e.target.value);
    if (!value.includes('.devpulse.org')) {
      e.target.value = `${e.target.value}.devpulse.org`;
      setName(e.target.value);
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

        if (!value.includes('.devpulse.org')) {
          value = `${name}.devpulse.org`;
        }
        // console.log(name)
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
  // console.log(names)
  const completeOrgUrl = `${names}`;

  return (
    <div className="flex flex-col justify-center font-sans grow bg-neutral-100 dark:bg-dark-frame-bg">
      <div className="w-full max-w-lg mx-auto bg-indigo-100 my-28 dark:bg-dark-bg p-14 md:shadow-xl sm:shadow-none md:rounded-xl sm:rounded-none">
        <div className="text-2xl font-bold text-center text-black-600 dark:text-dark-text-fill ">
          {t('Sign in to your Organization')}
        </div>
        <div className="mt-2 font-semibold text-center text-md text-black-600 dark:text-dark-text-fill sm:text-xs">
          {t('Enter your organization’s Dev-Pulse URL')}
        </div>
        <form
          action="#none"
          className="mt-4 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="orgName">
            {!isNameEmpty ? (
              <input
                name="name"
                placeholder="Your-organization"
                type="text"
                value={name}
                data-testid="orgName"
                // {...register('name', {
                //   required: 'Organisation name is required',
                // })}
                onChange={handleNameChange}
                onKeyDown={handleKeyPress}
                style={{
                  // paddingLeft: '25px',
                  width: inputWidth,
                  backgroundColor: 'rgb(224 231 255 / var(--tw-bg-opacity))',
                }} // Set the width dynamically
                className="w-full mt-1 rounded inputStyle inputOne border-primary dark:bg-dark-bg"
              />
            ) : (
              <input
                name="name"
                placeholder="Your-organization"
                type="text"
                value={name}
                data-testid="orgName"
                // {...register('name', {
                //   required: 'Organisation name is required',
                // })}
                onChange={handleNameChange}
                onKeyDown={handleKeyPress}
                style={{
                  // paddingLeft: '25px',
                  width: inputWidth,
                  backgroundColor: 'rgb(224 231 255 / var(--tw-bg-opacity))',
                }} // Set the width dynamically
                className="w-full mt-1 rounded inputStyle inputOne border-primary dark:bg-dark-bg"
              />
            )}
            <input
              placeholder=".devpulse.org"
              disabled
              style={
                {
                  // width: inputWidth,
                }
              }
              className="w-full p-2 mt-1 border rounded inputStyle inputTwo border-primary dark:bg-dark-bg"
            />
          </div>

          <div className="-mt-6">
            {errors.name && (
              <small className="text-red-600">{errors.name.message}</small>
            )}
          </div>
          <div>
            {loading ? (
              <ButtonLoading style="rounded-full inline-block" />
            ) : (
              <Button
                type="submit"
                variant="primary"
                data-testid="loginForm"
                size="lg"
                style="w-full ml-0 hover:bg-violet-600 text-sm"
              >
                {' '}
                {t('Continue')}
              </Button>
            )}
          </div>
          <div className="w-full text-sm text-light-text dark:text-dark-text-fill">
            {t('Looking to register an organization instead?')}
            <Link to="/signup/org">
              <a href="#link" className="text-primary">
                {t('Register a new organization')}
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Orglogin;
