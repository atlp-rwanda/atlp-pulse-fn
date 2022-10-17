import { gql, useApolloClient, useMutation } from '@apollo/client';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import React, { useState, useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { UserContext } from '../hook/useAuth';
import CountrySelector from '../components/CountrySelector';
import Input from '../components/Input';
import ProfileCoverpage from '../components/ProfileCoverpage';
import useDocumentTitle from '../hook/useDocumentTitle';

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
  const [profileFieldState, setProfileFieldState] = useState<fields>(fieldState);

  const myRef = React.createRef<HTMLDivElement>();

  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { profile }: any = location.state;
  // eslint-disable-next-line no-underscore-dangle
  delete profile?.__typename;
  delete profile?.avatar;
  delete profile?.coverImage;
  delete profile?.name;

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
    try {
      await UpdateProfile({
        variables: { ...data },
      });
      await client.resetStore();

      toast.success('Profile has been updated');
      navigate('/dashboard/profile');
    } catch (error) {}
  };

  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg h-full overflow-y-scroll">
      <ProfileCoverpage data={profile} currentPage="editProfile" />
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
                {...register('biography')}
                placeholder="Add your biography here"
                className="rounded-md w-full border p-2 dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white"
              />
            </div>
            <button
              type="submit"
              className="group md:px-4 relative my-4 md:w-fit sm:w-full flex flex-row justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#1280a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-secondary sm:mx-0"
            >
              {loading && (
                <svg
                  aria-hidden="true"
                  className="mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-purple-700"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
              {t('Update Profile')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
