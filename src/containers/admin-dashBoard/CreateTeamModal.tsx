/* eslint-disable no-return-assign */

import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TFunction, useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';
import ControlledSelect from '../../components/ControlledSelect';
import { Team, Cohort } from './Teams';

export const AddTeam = gql`
  mutation Mutation(
    $name: String!
    $cohortName: String!
    $orgToken: String!
    $startingPhase: DateTime!
    $ttlEmail: String!
  ) {
    addTeam(
      name: $name
      cohortName: $cohortName
      orgToken: $orgToken
      startingPhase: $startingPhase
      ttlEmail: $ttlEmail
    ) {
      name
      cohort {
        name
      }
    }
  }
`;

export default function CreateTeamModal({
  data,
  createTeamModel,
  removeModel,
  refetch,
}: {
  data?: {
    getAllTeams: Team[];
    getAllCohorts: Cohort[];
    getAllUsers: any;
  };
  createTeamModel: boolean;
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
  const [addTeamMutation, { loading }] = useMutation(AddTeam, {
    onError(error) {
      toast.error(error.message.toString());
    },
    onCompleted() {
      toast.success('Team successfully added');
      refetch();
      removeModel();
    },
  });
  /* istanbul ignore next */

  /* istanbul ignore next */
  async function addTeam(data: any) {
    const newData = { ...data };
    newData.cohortName && (newData.cohortName = newData.cohortName.value);
    newData.managerEmail && (newData.managerEmail = newData.managerEmail.value);
    newData.ttlEmail && (newData.ttlEmail = newData.ttlEmail.value);

    Object.keys(newData).forEach((field) => {
      if (!newData[field] || newData[field] === '') {
        delete newData[field];
      }
    });

    await addTeamMutation({
      variables: { orgToken: localStorage.getItem('orgToken'), ...newData },

      onCompleted() {
      
        toast.success('Team successfully added');
        removeModel();
        refetch();
        reset();
        setValue('coordinatorEmail', { value: undefined, label: undefined });
        setValue('cohortName', { value: undefined, label: undefined });
        setValue('ttlEmail', { value: undefined, label: undefined });
      },
    });
  }
  /* istanbul ignore next */
  return (
    <div
      className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
        createTeamModel === true ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-sm dark:text-white text-center w-11/12 uppercase">
            {t('Add A Team')}
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
                  placeholder={t('Team Name')}
                  {...register('name', {
                    required: `${t('The Team name is required')}`,
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
                placeholder={t('Choose a Cohort')}
                register={{
                  control,
                  name: 'cohortName',
                  rules: { required: `${t('The Cohort Name is required')}` },
                }}
                options={data?.getAllCohorts?.map(({ name }) => ({
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

            <div className="input my-5 h-9">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <ControlledSelect
                  placeholder={t('ttlemail')}
                  register={{
                    control,
                    name: 'ttlEmail',
                    rules: {
                      required: `${t('The ttl email is required')}`,
                    },
                  }}
                  options={
                    data?.getAllUsers
                      ?.filter((user: any) => user.role === 'ttl')
                      ?.map((user: any) => ({
                        value: user.email,
                        label: user.email,
                      })) ?? []
                  }
                />
              </div>
              {errors?.ttlEmail && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.ttlEmail?.message?.toString()}
                </p>
              )}
            </div>

            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <input
                  type="text"
                  onFocus={(e) => (e.target.type = 'date')}
                  className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full"
                  placeholder={t('startDate')}
                  {...register('startingPhase', {
                    required: `${t('startDaterequikred')}`,
                  })}
                />
              </div>
              {errors?.name && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.name?.message?.toString()}
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
                onClick={()=>handleSubmit(addTeam)()}
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
