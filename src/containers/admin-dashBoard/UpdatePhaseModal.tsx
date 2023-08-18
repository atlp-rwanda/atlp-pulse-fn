import { gql, useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TFunction, useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';
import { PartialUser } from './Cohorts';
import { Phase } from './Phases';

export const UpdatePhase = gql`
  mutation UpdatePhase(
    $updatePhaseId: ID!
    $orgToken: String
    $name: String
    $description: String
  ) {
    updatePhase(
      id: $updatePhaseId
      orgToken: $orgToken
      name: $name
      description: $description
    ) {
      id
    }
  }
`;

export default function UpdatePhaseModal({
  data,
  UpdatePhaseModal,
  currentPhase,
  removeModel,
  refetch,
}: {
  data?: {
    getAllPhases: Phase[];
    getAllUsers: PartialUser[];
  };
  UpdatePhaseModal: boolean;
  currentPhase: Phase | undefined;
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

  const [updatePhaseMutation, { loading }] = useMutation(UpdatePhase, {
    onError(error) {
      toast.error(error.message.toString());
    },
    onCompleted() {
      refetch();
      removeModel();
    },
  });

  const orgToken = localStorage.getItem('orgToken');
  /* istanbul ignore next */
  const managers = data?.getAllUsers?.filter((user) => user.role === 'manager');
  /* istanbul ignore next */
  async function updatePhase(data: any) {
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
    newData.updatePhaseId = currentPhase?.id;
    /* istanbul ignore next */
    orgToken && (newData.orgToken = orgToken);
    /* istanbul ignore next */
    await updatePhaseMutation({ variables: newData });
  }

  useEffect(() => {
    setValue('name', currentPhase?.name);
    setValue('description', currentPhase?.description);
  }, [currentPhase, UpdatePhaseModal]);

  return (
    <div
      className={`h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${
        UpdatePhaseModal === true ? 'block' : 'hidden'
      }`}
    >
      <div className="w-screen p-4 pb-8 bg-indigo-100 rounded-lg dark:bg-dark-bg md:w-1/2 xl:w-4/12">
        <div className="flex flex-wrap items-center justify-center w-full card-title ">
          <h3 className="w-11/12 text-sm font-bold text-center uppercase dark:text-white">
            {t('Update Phase')}
          </h3>
          <hr className="w-full my-3 border-gray-400  bg-primary" />
        </div>
        <div className="card-body">
          <form className="px-8 py-3 ">
            <div className="my-5 input h-9 ">
              <div className="flex items-center w-full h-full rounded-md grouped-input">
                <input
                  type="text"
                  className="w-full px-5 py-2 font-sans text-xs border rounded outline-none border-primary dark:bg-dark-bg-frame dark:text-white"
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
            <div className="my-5 input h-9 ">
              <div className="flex items-center w-full h-full rounded-md grouped-input">
                <input
                  type="text"
                  className="w-full px-5 py-2 font-sans text-xs border rounded outline-none border-primary dark:bg-dark-bg-frame dark:text-white"
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
            <div className="flex justify-between w-full">
              <Button
                variant="info"
                size="sm"
                style="w-[30%] md:w-1/4 text-sm font-sans"
                data-testid="remove"
                /* istanbul ignore next */
                onClick={() => {
                  /* istanbul ignore next */
                  removeModel();
                  reset();
                }}
                disabled={loading}
              >
                {' '}
                {t('cancel')}
              </Button>
              <Button
                variant="primary"
                size="sm"
                style="w-[30%] md:w-1/4 text-sm font-sans p-0"
                onClick={handleSubmit(updatePhase)}
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
