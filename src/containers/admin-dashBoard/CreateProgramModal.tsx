import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';
import ControlledSelect from '../../components/ControlledSelect';
import { PartialUser } from './Cohorts';
import { Program } from './Programs';

export const AddProgram = gql`
  mutation AddProgram(
    $name: String!
    $description: String!
    $managerEmail: String!
    $orgToken: String!
  ) {
    addProgram(
      name: $name
      description: $description
      managerEmail: $managerEmail
      orgToken: $orgToken
    ) {
      id
    }
  }
`;

export default function CreateProgramModal({
  data,
  createProgramModel,
  removeModel,
  refetch,
}: {
  data?: {
    getAllPrograms: Program[];
    getAllUsers: PartialUser[];
  };
  createProgramModel: boolean;
  removeModel: Function;
  refetch: Function;
}) {
  const { t } = useTranslation();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    register,
    control,
  } = useForm();
  const [addProgramMutation, { loading }] = useMutation(AddProgram, {
    /* istanbul ignore next */
    onError(error) {
      toast.error(error.message.toString());
    },
    /* istanbul ignore next */
    onCompleted() {
      refetch();
      removeModel();
    },
  });
  /* istanbul ignore next */
  const managers = data?.getAllUsers?.filter(
    /* istanbul ignore next */
    (user) => user.role === 'manager',
  );
  /* istanbul ignore next */
  async function addProgram(data: any) {
    /* istanbul ignore next */
    const newData = { ...data };
    /* istanbul ignore next */
    newData.managerEmail && (newData.managerEmail = newData.managerEmail.value);
    /* istanbul ignore next */
    Object.keys(newData).forEach((field) => {
      if (!newData[field] || newData[field] === '') {
        delete newData[field];
      }
    });
    /* istanbul ignore next */
    await addProgramMutation({
      variables: { orgToken: localStorage.getItem('orgToken'), ...newData },
      onCompleted() {
        reset();
        setValue('managerEmail', { value: undefined, label: undefined });
      },
    });
  }

  return (
    <div
      className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${
        createProgramModel === true ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-indigo-100 dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-sm dark:text-white text-center w-11/12 uppercase">
            {t('Add Program')}
          </h3>
          <hr className=" bg-primary border-gray-400 my-3 w-full" />
        </div>
        <div className="card-body">
          <form className=" py-3 px-8">
            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <input
                  type="text"
                  className="border border-primary rounded outline-none px-5 dark:bg-dark-bg-frame dark:text-white font-sans text-xs py-2 w-full"
                  placeholder={t('name')}
                  {...register('name', {
                    required: `${t('The Program name is required')}`,
                  })}
                />
              </div>
              {errors?.name && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.name?.message?.toString()}
                </p>
              )}
            </div>
            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <ControlledSelect
                  placeholder={t('Manager Email')}
                  register={{
                    control,
                    name: 'managerEmail',
                    rules: {
                      required: `${t('The Manager email is required')}`,
                    },
                  }}
                  options={managers?.map(
                    /* istanbul ignore next */
                    ({ email }) => ({
                      value: email,
                      label: email,
                    }),
                  )}
                />
              </div>
              {errors?.managerEmail && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.managerEmail?.message?.toString()}
                </p>
              )}
            </div>
            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <input
                  type="text"
                  className="border border-primary py-2 dark:bg-dark-bg-frame dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                  placeholder={t('Description')}
                  {...register('description', {
                    required: `${t('The Description is required')}`,
                  })}
                />
              </div>
              {errors?.description && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.description?.message?.toString()}
                </p>
              )}
            </div>

            <div className="w-full flex justify-between">
              <Button
                variant="info"
                size="sm"
                /* istanbul ignore next */
                style="w-[30%] md:w-1/4 text-sm font-sans"
                data-testid="remove"
                onClick={
                  /* istanbul ignore next */
                  () => {
                    removeModel();
                    reset();
                  }
                }
                disabled={loading}
              >
                {' '}
                {t('cancel')}
              </Button>
              <Button
                variant="primary"
                size="sm"
                style="w-[30%] md:w-1/4 text-sm font-sans p-0"
                /* istanbul ignore next */
                onClick={handleSubmit(addProgram)}
                loading={loading}
              >
                {' '}
                {t('save')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
