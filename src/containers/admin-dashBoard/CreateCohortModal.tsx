import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation, TFunction } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';
import ControlledSelect from '../../components/ControlledSelect';
import { Cohort, PartialProgram, PartialUser, PartialPhase } from './Cohorts';

export const AddCohort = gql`
  mutation AddCohort(
    $name: String!
    $phaseName: String!
    $coordinatorEmail: String!
    $programName: String!
    $startDate: DateTime!
    $endDate: DateTime
    $orgToken: String!
  ) {
    addCohort(
      name: $name
      phaseName: $phaseName
      coordinatorEmail: $coordinatorEmail
      programName: $programName
      startDate: $startDate
      endDate: $endDate
      orgToken: $orgToken
    ) {
      id
      name
      phase {
        name
      }
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
  data,
  createCohortModel,
  removeModel,
  refetch,
}: {
  data?: {
    getAllCohorts: Cohort[];
    getAllUsers: PartialUser[];
    getAllPrograms: PartialProgram[];
    getAllPhases: PartialPhase[];
  };
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
    setValue,
    register,
    control,
  } = useForm();
  /* istanbul ignore next */
  const [addCohortMutation, { loading }] = useMutation(AddCohort, {
    onError(error) {
      toast.error(error.message.toString());
    },
    onCompleted() {
      refetch();
      removeModel();
    },
  });
  /* istanbul ignore next */
  const coordinators = data?.getAllUsers.filter(
    (user) => user.role === 'coordinator',
  );
  const programs = data?.getAllPrograms;
  const phases = data?.getAllPhases;
  /* istanbul ignore next */
  async function addCohort(data: any) {
    const newData = { ...data };

    newData.coordinatorEmail &&
      (newData.coordinatorEmail = newData.coordinatorEmail.value);
    newData.programName && (newData.programName = newData.programName.value);
    newData.phaseName && (newData.phaseName = newData.phaseName.value);

    Object.keys(newData).forEach((field) => {
      if (!newData[field] || newData[field] === '') {
        delete newData[field];
      }
    });

    await addCohortMutation({
      variables: { orgToken: localStorage.getItem('orgToken'), ...newData },
      onCompleted() {
        reset();
        setValue('coordinatorEmail', { value: undefined, label: undefined });
        setValue('programName', { value: undefined, label: undefined });
        setValue('phaseName', { value: undefined, label: undefined });

        toast.success(t('Cohort Created successful') as TFunction);
      },
    });
  }
  /* istanbul ignore next */
  return (
    <div
      className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${
        createCohortModel === true ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-indigo-100 dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-sm dark:text-white text-center w-11/12 uppercase">
            {t('Add Cohort')}
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
              <ControlledSelect
                placeholder={t('Select Phase Name')}
                register={{
                  control,
                  name: 'phaseName',
                  rules: { required: `${t('The Phase Name is required')}` },
                }}
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
                placeholder={t('Select Program Name')}
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
                  {...register('startDate', {
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
