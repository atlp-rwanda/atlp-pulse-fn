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
      
     toast.success(t("Phase Updated successful") as TFunction);

      
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
      <div className="bg-indigo-100 dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-sm dark:text-white text-center w-11/12 uppercase">
            {t('Update Phase')}
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
