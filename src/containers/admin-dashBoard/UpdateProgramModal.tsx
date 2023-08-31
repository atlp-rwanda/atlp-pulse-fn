import { gql, useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';
import ControlledSelect from '../../components/ControlledSelect';
import { PartialUser } from './Cohorts';
import { Program } from './Programs';

export const UpdateProgram = gql`
  mutation UpdateProgram(
    $updateProgramId: ID!
    $orgToken: String
    $name: String
    $description: String
    $managerEmail: String!
  ) {
    updateProgram(
      id: $updateProgramId
      name: $name
      description: $description
      orgToken: $orgToken
      managerEmail: $managerEmail
    ) {
      id
    }
  }
`;
export default function UpdateProgramModal({
  data,
  updateProgramModal,
  currentProgram,
  removeModel,
  refetch,
}: {
  data?: {
    getAllPrograms: Program[];
    getAllUsers: PartialUser[];
  };
  updateProgramModal: boolean;
  currentProgram: Program | undefined;
  removeModel: Function;
  refetch: Function;
}) {
  const { t } = useTranslation();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    register,
    setValue,
  } = useForm();
  /* istanbul ignore next */
  const [updateProgramMutation, { loading }] = useMutation(UpdateProgram, {
    onError(error) {
      toast.error(error.message.toString());
    },
    onCompleted() {
      refetch();
      removeModel();
    },
  });
  const orgToken = localStorage.getItem('orgToken');
  const managers = data?.getAllUsers?.filter(
    /* istanbul ignore next */
    (user) => user.role === 'manager',
  );
  /* istanbul ignore next */
  async function updateProgram(data: any) {
    const newData = { ...data };
    /* istanbul ignore next */

    newData.managerEmail && (newData.managerEmail = newData.managerEmail.value);
    /* istanbul ignore next */

    Object.keys(newData).forEach((field) => {
      /* istanbul ignore if */
      if (!newData[field] || newData[field] === '') {
        delete newData[field];
      }
    });
    /* istanbul ignore next */

    newData.updateProgramId = currentProgram?.id;
    /* istanbul ignore next */
    orgToken && (newData.orgToken = orgToken);
    /* istanbul ignore next */

    await updateProgramMutation({ variables: newData });
  }

  useEffect(() => {
    setValue('name', currentProgram?.name);
    setValue('managerEmail', {
      value: currentProgram?.manager?.email,
      label: currentProgram?.manager?.email,
    });
    setValue('description', currentProgram?.description);
  }, [currentProgram, updateProgramModal]);
  return (
    <div
      className={`h-screen w-screen bg-black fixed top-0 left-0 z-20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center overflow-auto mt-10 p-4 ${
        updateProgramModal === true ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-indigo-100 dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-sm dark:text-white text-center w-11/12 uppercase">
            {t('Update Program')}
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
                  {...register('name')}
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
                onClick={handleSubmit(updateProgram)}
                loading={loading}
                data-testid="confirmUpdateBtn"
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
