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
      <div className="w-screen p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg md:w-1/2 xl:w-4/12">
        <div className="flex flex-wrap items-center justify-center w-full card-title ">
          <h3 className="w-11/12 text-sm font-bold text-center uppercase dark:text-white">
            {t('Add A Team')}
          </h3>
          <hr className="w-full my-3 border-b bg-primary" />
        </div>
        <div className="card-body">
          <form className="px-8 py-3 ">
            <div className="my-5 input h-9 ">
              <div className="flex items-center w-full h-full rounded-md grouped-input">
                <input
                  type="text"
                  className="w-full px-5 py-2 font-sans text-xs border rounded outline-none border-primary dark:bg-dark-frame-bg dark:text-white"
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

            <div className="my-5 input h-9 ">
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

            <div className="my-5 input h-9">
              <div className="flex items-center w-full h-full rounded-md grouped-input">
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

            <div className="my-5 input h-9 ">
              <div className="flex items-center w-full h-full rounded-md grouped-input">
                <input
                  type="text"
                  onFocus={(e) => (e.target.type = 'date')}
                  className="w-full px-5 py-2 font-sans text-xs border rounded outline-none border-primary dark:bg-dark-frame-bg dark:text-white"
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

            <div className="flex justify-between w-full">
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
                onClick={() => handleSubmit(addTeam)()}
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
