/* eslint-disable no-console */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { gql, useMutation } from '@apollo/client';
import Button from '../../components/Buttons';

export const AddCohort = gql`
  mutation AddCohort(
    $name: String!
    $phase: String!
    $coordinatorEmail: String!
    $programName: String!
    $startDate: DateTime!
    $endDate: DateTime
  ) {
    addCohort(
      name: $name
      phase: $phase
      coordinatorEmail: $coordinatorEmail
      programName: $programName
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      name
      phase
      coordinator {
        email
      }
      program {
        name
      }
      startDate
      endDate
    }
  }
`;

export default function CreateCohortModal({
  createCohortModel,
  removeModel,
  refetch,
}: {
  createCohortModel: boolean;
  removeModel: Function;
  refetch: Function;
}) {
  const { t } = useTranslation();
  const {
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    register,
  } = useForm();
  const [addCohortMutation, { loading }] = useMutation(AddCohort, {
    onError(error) {
      toast.error(error.message.toString());
    },
    onCompleted() {
      refetch();
      removeModel();
    },
  });

  async function addCohort(data: any) {
    await addCohortMutation({ variables: data });
  }

  return (
    <div
      className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
        createCohortModel === true ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-sm dark:text-white text-center w-11/12 uppercase">
            {t('AddCohort')}
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
                  {...register('name', {
                    required: `${t('The Cohort name is required')}`,
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
                <input
                  type="text"
                  className="border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                  placeholder={t('Phase')}
                  {...register('phase', {
                    required: `${t('The Phase is required')}`,
                  })}
                />
              </div>
              {errors?.phase && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.phase?.message?.toString()}
                </p>
              )}
            </div>
            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <input
                  type="text"
                  className="border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                  placeholder={t('Coordinator Email')}
                  {...register('coordinatorEmail', {
                    required: `${t('The Coordinator Email is required')}`,
                  })}
                />
              </div>
              {errors?.coordinatorEmail && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.coordinatorEmail?.message?.toString()}
                </p>
              )}
            </div>
            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <input
                  type="text"
                  className="border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                  placeholder={t('Program Name')}
                  {...register('programName', {
                    required: `${t('The Program Name is required')}`,
                  })}
                />
              </div>
              {errors?.programName && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.programName?.message?.toString()}
                </p>
              )}
            </div>

            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <input
                  type="date"
                  className="border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                  placeholder={t('StartingDate')}
                  {...register('startDate', {
                    valueAsDate: true,
                    required: `${t('The StartingDate is required')}`,
                  })}
                />
              </div>
              {errors?.startDate && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.startDate?.message?.toString()}
                </p>
              )}
            </div>
            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <input
                  min={watch().startDate}
                  type="date"
                  className=" border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                  placeholder={t('ClosingDate')}
                  {...register('endDate', { valueAsDate: true })}
                />
              </div>
              {errors?.endDate && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.endDate?.message?.toString()}
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
                {t('Cancel')}
              </Button>
              <Button
                variant="primary"
                size="sm"
                style="w-[30%] md:w-1/4 text-sm font-sans p-0"
                onClick={handleSubmit(addCohort)}
                loading={loading}
              >
                {' '}
                {t('Save')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
