/* eslint-disable */
import { useApolloClient, useLazyQuery, useMutation } from '@apollo/client';
import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';
import { FaGoogle, FaRegEnvelope, FaRegEye } from 'react-icons/fa';
import { FiEyeOff } from 'react-icons/fi';
import { MdLockOutline } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ButtonLoading from '../../components/ButtonLoading';
import Button from '../../components/Buttons';
import { UserContext } from '../../hook/useAuth';
import useDocumentTitle from '../../hook/useDocumentTitle';
import { SIGN_UP_MUTATION, GET_SIGNUP_ORGANIZATION } from './Mutations';
import ControlledSelect from '../../components/ControlledSelect';
import jwt_decode from 'jwt-decode';

const Signup = () => {
  const token: any = window.location.href.substring(
    window.location.href.lastIndexOf('/') + 1,
  );
  const originalToken: any = token.replaceAll('*', '.');
  useDocumentTitle('Login');

  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const tooglePassword =
    /* istanbul ignore next */
    () => {
      /* istanbul ignore next */
      setPasswordShown(!passwordShown);
    };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    controller,
    setValue,
  }: any = useForm();

  const { UserSignup } = useContext(UserContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [Signup, { loading }] = useMutation(SIGN_UP_MUTATION);

  const [getOrganizationName] = useLazyQuery(GET_SIGNUP_ORGANIZATION, {
    variables: {
      orgToken: originalToken,
    },

    /* istanbul ignore next */
    onError: (err) => {
      /* istanbul ignore next */
      if (err.message === 'expired organization token') {
        toast.error('Your signup link has expired');
        navigate('/');
      } else {
        navigate('/pageNotFound');
      }
    },
  });
  const [SignupUser] = useMutation(SIGN_UP_MUTATION, {
    /* istanbul ignore next */
    /* istanbul ignore next */
    onCompleted: (data) => {
      /* istanbul ignore next */
      setTimeout(() => {
        setButtonLoading(false);
        toast.success('You have successfully created an account!');
        navigate('/register-successful');
      }, 2000);
    },
    /* istanbul ignore next */
    onError: (err) => {
      /* istanbul ignore next */
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
      }, 1000);
    },
  });

  /* istanbul ignore next */
  const isDateOfBirthValid = (dateOfBirth: string) => {
    const currentDate = new Date();
    const dob = new Date(dateOfBirth);

    // Calculate the age difference
    const ageDifference = currentDate.getTime() - dob.getTime();

    // Calculate age based on milliseconds
    const age = Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365));

    // Check if the user is at least 18 years old
    return age >= 18;
  };

  const commonPasswords = [
    123456,
    'password',
    12345678,
    'qwerty',
    123456789,
    12345,
    1234,
    111111,
    1234567,
    'dragon',
    123123,
    'baseball',
    'abc123',
    'football',
    'monkey',
    'letmein',
    696969,
    'shadow',
    'master',
    666666,
    'qwertyuiop',
    123321,
    'mustang',
    1234567890,
    'michael',
    654321,
    'pussy',
    'superman',
    '1qaz2wsx',
    7777777,
    'fuckyou',
    121212,
    '000000',
    'qazwsx',
    '123qwe',
    'killer',
    'trustno1',
    'jordan',
    'jennifer',
    'zxcvbnm',
    'asdfgh',
    'hunter',
    'buster',
    'soccer',
    'harley',
    'batman',
    'andrew',
    'tigger',
    'sunshine',
    'iloveyou',
    'fuckme',
    2000,
    'charlie',
    'robert',
    'thomas',
    'hockey',
    'ranger',
    'daniel',
    'starwars',
    'klaster',
    112233,
    'george',
    'asshole',
    'computer',
    'michelle',
    'jessica',
    'pepper',
    1111,
    'zxcvbn',
    555555,
    11111111,
    131313,
    'freedom',
    777777,
    'pass',
    'fuck',
    'maggie',
    159753,
    'aaaaaa',
    'ginger',
    'princess',
    'joshua',
    'cheese',
    'amanda',
    'summer',
    'love',
    'ashley',
    6969,
    'nicole',
    'chelsea',
    'biteme',
    'matthew',
    'access',
    'yankees',
    987654321,
    'dallas',
    'austin',
    'thunder',
    'taylor',
    'matrix',
  ];
  const isStrongPassword = (password: any) => {
    // Check if the password length is at least 8 characters
    if (password.length < 8) {
      return false;
    }
    if (commonPasswords.includes(password.toLowerCase())) {
      return false;
    }
    if (commonPasswords.includes(password.toUpperCase())) {
      return false;
    }
    if (!/\d/.test(password)) {
      return false;
    }

    // Check if the password contains at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return false;
    }
    return true;
  };
  /* istanbul ignore next */
  const onSubmit = async (userInput: any) => {
    const isAdult = isDateOfBirthValid(userInput.dateOfBirth);
    if (!isAdult) {
      toast.error('You must be at least 18 years old to sign up.');
      return;
    }
    const isPasswordStrong = isStrongPassword(userInput.password);
    if (!isPasswordStrong) {
      toast.error(
        'Password is too weak or too common. Please choose a stronger password.',
      );
      return;
    }

    setButtonLoading(true);
    setTimeout(async () => {
      try {
        await SignupUser({
          variables: {
            email: userInput.email,
            password: userInput.password,
            firstName: userInput.firstName,
            lastName: userInput.lastName,
            dateOfBirth: userInput.dateOfBirth,
            gender: userInput.gender.value,
            orgToken: originalToken,
          },
        });

        return;
      } catch (error: any) {
        toast.error(error.message);
      }
    }, 2000);
  };

  /* istanbul ignore next */
  const options: any = [
    { value: 'male', label: 'male' },
    { value: 'female', label: 'female' },
  ];

  useEffect(() => {
    interface TokenPayload {
      email: string;
    }
    // Get the email from the token and set it as the initial value for the email input field
    const getEmailFromToken = async () => {
      let decodedToken: TokenPayload = await jwt_decode(originalToken);
      const emailFromToken = decodedToken.email;

      // Set the email value in the email input field
      setValue('email', emailFromToken);
    };
    getOrganizationName();
    getEmailFromToken();
  }, [setValue]);

  // checking current logged in user
  /* istanbul ignore next */
  useEffect(() => {
    if (localStorage.getItem('auth_token')) navigate('/dashboard');
  }, []);

  return (
    <div className="md:flex md:flex-col md:items-center md:justify-center w-full grow text-center py-2 dark:bg-dark-bg bg-gray-100  sm:flex sm:flex-row sm:items-center sm:justify-center">
      <div className="w-full md:w-3/5 md:p-5 sm:w-full sm:p-2 dark:bg-dark-bg dark:rounded-none ">
        <div className="py-10 sm:py-8 w-full m-auto  md:shadow-xl rounded-xl">
          <h2 className="text-2xl font-bold text-primary dark:text-dark-text-fill ">
            {t('Sign up using')}
          </h2>
          <div className="border-2 w-10 bg-primary border-primary inline-block mb-2" />
          {/* <div className="flex justify-center my-2">
            <a
              href="#link"
              className="border-2 border-gray-200 rounded-full p-3 mx-1"
            >
              <FaGoogle className="text-sm dark:text-white" />
            </a>
          </div> */}
          <p className="text-gray-400 my-3 dark:text-dark-text-fill ">
            {t('use your email account')}
          </p>
          <div className="flex flex-col items-center">
            <form
              action="#none"
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(onSubmit)}
              data-testid="loginForm"
            >
              <div className="flex justify-between flex-col md:flex-row gap-2">
                <div className="bg-gray-100 border border-primary rounded p-2 flex justify-between  dark:bg-dark-bg w-full mr-2">
                  <input
                    data-testid="fName"
                    type="name"
                    placeholder={t('First Name')}
                    {...register('firstName', {
                      required: 'First Name is required',
                    })}
                    className="bg-gray-100 outline-none text-sm flex-1 text-gray-400 dark:border-white dark:bg-dark-bg dark:text-white "
                  />
                </div>
                <div className="bg-gray-100 border border-primary rounded p-2 flex justify-between dark:bg-dark-bg w-full">
                  <input
                    data-testid="lName"
                    type="name"
                    placeholder={t('Last Name')}
                    {...register('lastName', {
                      required: 'Last Name is required',
                    })}
                    className="bg-gray-100 outline-none text-sm flex-1 text-gray-400 dark:border-white dark:bg-dark-bg dark:text-white "
                  />
                </div>
              </div>
              <div className="flex justify-between flex-col md:flex-row gap-2">
                <div className="grouped-input flex items-center  w-full  rounded-md mr-2">
                  <input
                    type="date"
                    className="text-gray-400 border border-primary py-2 dark:bg-dark-bg rounded outline-none px-5 font-sans text-xs w-full h-[38px] "
                    id="date-placeholder"
                    max={new Date().toISOString().split('T')[0]}
                    data-placeholder="Date of birth"
                    required
                    {...register('dateOfBirth', {
                      valueAsDate: true,
                      required: `${t('The BirthDate is required')}`,
                    })}
                  />
                </div>

                <ControlledSelect
                  placeholder={t('Select gender')}
                  register={{
                    control,
                    name: 'gender',
                    rules: {
                      required: `${t('Gender is required')}`,
                    },
                  }}
                  options={options}
                />
              </div>
              <div className="bg-gray-100 w-70 p-2 flex justify-between  dark:bg-dark-bg border border-primary rounded xs:w-full gap-2">
                <FaRegEnvelope className="text-gray-400 " />
                <input
                  data-testid="email"
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  placeholder={t('Email')}
                  className="bg-gray-100 outline-none text-sm flex-1 text-gray-400 dark:border-white dark:bg-dark-bg dark:text-white  "
                  readOnly
                />
              </div>
              {errors.email && (
                <div className="text-left  pl-4">
                  <small className="text-red-600">{errors.email.message}</small>
                </div>
              )}

              <div className="bg-gray-100  p-2 flex items-center border border-primary rounded   dark:bg-dark-bg xs:w-full md:w-70 gap-2">
                <MdLockOutline className="text-gray-400 " />
                <input
                  data-testid="password"
                  type={passwordShown ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  placeholder={t('Password')}
                  className="bg-gray-100 outline-none text-sm flex-1 text-gray-400 dark:border-white dark:bg-dark-bg dark:text-white"
                />
                <div className="text-gray-400 cursor-pointer onClick= {()=> handleShowPassword}">
                  {passwordShown ? (
                    <FaRegEye onClick={tooglePassword} />
                  ) : (
                    <FiEyeOff onClick={tooglePassword} />
                  )}
                </div>
              </div>
              {errors.password && (
                <div className="text-left mb-1 pl-4">
                  <small className="text-red-600">
                    {errors.password.message}
                  </small>
                </div>
              )}
              <div className="flex w-64  rounded mb-5 mt-5 items-center ">
                <div className=" text-sm mr-1">
                  {t('Already have an account?')}
                </div>
                <Link to="/login/org" className="text-xs text-primary ">
                  {t('Log in')}
                </Link>
              </div>
              <div className="w-full justify-center">
                {loading ? (
                  <ButtonLoading style={'rounded-full inline-block'} />
                ) : (
                  <Button
                    type="submit"
                    variant="transparentbtn"
                    size="md"
                    style="border-2 hover:bg-primary inline-block rounded-full lg:px-12 lg:py-2 sm:px-4 sm:py-1 md:font-semibold sm:mt-2 sm:font-medium hover:text-white"
                    loading={buttonLoading}
                  >
                    {t('Sign Up')}
                  </Button>
                )}
              </div>
            </form>
          </div>
          <div className="md:hidden mt-2 text-xs text-center dark:text-dark-text-fill">
            {t('First time here?')}
            <Link to="/signup/org" className="mx-1 text-primary">
              {t('Register')}
            </Link>
            {t('your organization')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
