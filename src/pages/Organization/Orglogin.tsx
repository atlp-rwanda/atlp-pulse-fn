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

  // const [inputWidth, setInputWidth] = useState('133px'); // Adjust the width as needed
  const [inputWidth, setInputWidth] = useState('150px'); // Adjust the width as needed
  const handleNameChange = async (e: { target: { value: any } }) => {
    const newName = e.target.value;
    setName(newName);
    // Calculate the width based on the length of the entered text
    const newWidth = `${Math.max(newName.length * 9)}px`; // Adjust minimum width here
    setInputWidth(newWidth);
    // const newWidth = Math.max(newName.length * 9);
    // if (newWidth > 120) setInputWidth(`${newWidth}px`);
  };

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
        // console.log(value)
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
  // console.log('Bye Brother hey', names)
  const completeOrgUrl = `${names}`;

  return (
    <div className="grow bg-neutral-100 dark:bg-dark-frame-bg flex flex-col justify-center font-sans">
      <div className="max-w-lg w-full mx-auto my-28 bg-indigo-100 dark:bg-dark-bg p-14 md:shadow-xl sm:shadow-none md:rounded-xl sm:rounded-none">
        <div className="text-center  text-black-600 text-2xl font-bold dark:text-dark-text-fill ">
          {t('Sign in to your Organization')}
        </div>
        <div className="text-md  text-black-600 mt-2 text-center font-semibold dark:text-dark-text-fill sm:text-xs">
          {t('Enter your organization’s Dev-Pulse URL')}
        </div>
        <form
          action="#none"
          className="space-y-6 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="orgName">
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
                width: inputWidth,
                backgroundColor: 'rgb(224 231 255 / var(--tw-bg-opacity))',
              }} // Set the width dynamically
              className="inputStyle inputOne w-full border-primary rounded mt-1 dark:bg-dark-bg"
            />
            <input
              placeholder=".devpulse.org"
              disabled
              className="inputStyle inputTwo w-full p-2 border border-primary rounded mt-1 dark:bg-dark-bg"
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
          <div className="w-full text-sm  text-light-text dark:text-dark-text-fill">
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
