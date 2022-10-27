import { gql, useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';
import { Program } from './Programs';

export const UpdateProgram = gql`
  mutation UpdateProgram(
    $updateProgramId: ID!
    $orgToken: String
    $name: String
    $description: String
  ) {
    updateProgram(
      id: $updateProgramId
      name: $name
      description: $description
      orgToken: $orgToken
    ) {
      id
    }
  }
`;

export default function UpdateProgramModal({
  updateProgramModal,
  currentProgram,
  removeModel,
  refetch,
}: {
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

  async function updateProgram(data: any) {
    const newData = { ...data };

    Object.keys(newData).forEach((field) => {
      if (!newData[field] || newData[field] === '') {
        delete newData[field];
      }
    });

    newData.updateProgramId = currentProgram?.id;
    orgToken && (newData.orgToken = orgToken);

    await updateProgramMutation({ variables: newData });
  }

  useEffect(() => {
    setValue('name', currentProgram?.name);
    setValue('description', currentProgram?.description);
  }, [currentProgram]);

  return (
    <div
      className={`h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${
        updateProgramModal === true ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-sm dark:text-white text-center w-11/12 uppercase">
            {t('Update Program')}
          </h3>
          <hr className=" bg-primary border-b my-3 w-full" />
        </div>
        <div className="card-body">
          <form className=" py-3 px-8">
            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <input
                  type="text"
                  className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full"
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
                  className="border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
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
                onClick={() => {
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
