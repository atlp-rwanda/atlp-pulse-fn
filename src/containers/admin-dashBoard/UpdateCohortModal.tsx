import { gql, useMutation } from '@apollo/client';
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TFunction, useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';
import ControlledSelect from '../../components/ControlledSelect';
import { Cohort, PartialProgram, PartialUser, PartialPhase } from './Cohorts';

export const UpdateCohort = gql`
  mutation UpdateCohort(
    $updateCohortId: ID!
    $orgToken: String
    $coordinatorEmail: String!
    $programName: String!
    $name: String
    $phaseName: String
    $startDate: DateTime
    $endDate: DateTime
  ) {
    updateCohort(
      id: $updateCohortId
      orgToken: $orgToken
      name: $name
      coordinatorEmail: $coordinatorEmail
      programName: $programName
      phaseName: $phaseName
      startDate: $startDate
      endDate: $endDate
    ) {
      id
    }
  }
`;

export default function UpdateCohortModal({
  data,
  updateCohortModal,
  currentCohort,
  removeModel,
  refetch,
}: {
  data?: {
    getAllCohorts: Cohort[];
    getAllUsers: PartialUser[];
    getAllPrograms: PartialProgram[];
    getAllPhases: PartialPhase[];
  };
  updateCohortModal: boolean;
  currentCohort: Cohort | undefined;
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
    control,
    setValue,
  } = useForm();
  const [updateCohortMutation, { loading }] = useMutation(UpdateCohort, {
    onError(error) {
      toast.error(error.message.toString());
    },
    /* istanbul ignore next */
    onCompleted() {
      refetch();
      removeModel();
      toast.success(t('Cohort Updated successful') as TFunction);
    },
  });

  const coordinators = data?.getAllUsers.filter(
    (user) => user.role === 'coordinator',
  );
  const programs = data?.getAllPrograms;
  const phases = data?.getAllPhases;
  const orgToken = localStorage.getItem('orgToken');

  async function updateCohort(data: any) {
    const newData: any = { ...data };

    newData.coordinatorEmail &&
      (newData.coordinatorEmail = newData.coordinatorEmail.value);
    newData.programName && (newData.programName = newData.programName.value);
    newData.phaseName && (newData.phaseName = newData.phaseName.value);

    Object.keys(newData).forEach((field) => {
      if (!newData[field] || newData[field] === '') {
        delete newData[field];
      }
    });

    newData.updateCohortId = currentCohort?.id;
    orgToken && (newData.orgToken = orgToken);

    await updateCohortMutation({ variables: newData });
  }

  useEffect(() => {
    setValue('name', currentCohort?.name);
    setValue('phaseName', {
      value: currentCohort?.phase.name,
      label: currentCohort?.phase.name,
    });
    setValue('coordinatorEmail', {
      value: currentCohort?.coordinator?.email,
      label: currentCohort?.coordinator?.email,
    });
    setValue('programName', {
      value: currentCohort?.program.name,
      label: currentCohort?.program.name,
    });
    if (currentCohort?.startDate) {
      setValue(
        'startDate',
        format(new Date(currentCohort?.startDate as string), 'yyyy-MM-dd'),
      );
    }
    if (currentCohort?.endDate) {
      setValue(
        'endDate',
        format(new Date(currentCohort?.endDate as string), 'yyyy-MM-dd'),
      );
    }
  }, [currentCohort, updateCohortModal]);

  return (
    <div
      className={`h-screen w-screen bg-black fixed top-0 left-0 z-20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center overflow-auto p-4 ${
        updateCohortModal === true ? 'block' : 'hidden'
      }`}
      data-testid="updateCohortModal"
    >
      <div className="bg-indigo-100 dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-sm dark:text-white text-center w-11/12 uppercase">
            {t('Update Cohort')}
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
              <ControlledSelect
                placeholder={t('Phase Name')}
                register={{
                  control,
                  name: 'phaseName',
                  rules: { required: `${t('The Phase Name is required')}` },
                }}
                /* istanbul ignore next */
                options={phases?.map(({ name }) => ({
                  value: name,
                  label: name,
                }))}
              />
              {errors?.phaseName && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.phaseName?.message?.toString()}
                </p>
              )}
            </div>
            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <ControlledSelect
                  placeholder={t('Select Coordinator')}
                  register={{
                    control,
                    name: 'coordinatorEmail',
                    rules: {
                      required: `${t('The Coordinator Email is required')}`,
                    },
                  }}
                  options={coordinators?.map(({ email }) => ({
                    value: email,
                    label: email,
                  }))}
                />
              </div>
              {errors?.coordinatorEmail && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.coordinatorEmail?.message?.toString()}
                </p>
              )}
            </div>
            <div className="input my-5 h-9 ">
              <ControlledSelect
                placeholder={t('Program Name')}
                register={{
                  control,
                  name: 'programName',
                  rules: { required: `${t('The Program Name is required')}` },
                }}
                options={programs?.map(({ name }) => ({
                  value: name,
                  label: name,
                }))}
              />
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
                  className="border border-primary py-2 dark:bg-dark-bg-frame dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                  placeholder={t('StartingDate')}
                  {...register('startDate')}
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
                  className=" border border-primary py-2 dark:bg-dark-bg-frame dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                  placeholder={t('ClosingDate')}
                  {...register('endDate')}
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
                onClick={handleSubmit(updateCohort)}
                loading={loading}
                data-testid="confirmUpdateBtn"
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
