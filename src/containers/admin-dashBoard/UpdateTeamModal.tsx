import { gql, useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TFunction, useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';
import { Team, Cohort } from './Teams';
import ControlledSelect from '../../components/ControlledSelect';

export const UpdateTeam = gql`
  mutation UpdateTeam(
    $updateTeamId: ID!
    $name: String
    $cohort: String
    $TTL: String
    $orgToken: String
    $manager: String
    $phase: String
    $program: String
  ) {
    updateTeam(
      id: $updateTeamId
      orgToken: $orgToken
      name: $name
      cohort: $cohort
      TTL: $TTL
      manager: $manager
      phase: $phase
      program: $program
    ) {
      name
    }
  }
`;
export default function UpdateTeamModal({
  data,
  updateTeamModal,
  currentTeam,
  removeModel,
  refetch,
}: {
  data?: {
    getAllTeams: Team[];
    getAllCohorts: Cohort[];
    getAllPrograms?: any[];
    getAllPhases?: any[];
    getAllUsers: any;
  };
  updateTeamModal: boolean;
  currentTeam: Team | undefined;
  removeModel: Function;
  refetch: Function;
}) {
  const { t } = useTranslation();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
    control,
    setValue,
  } = useForm();
  const [updateTeamMutation, { loading }] = useMutation(UpdateTeam, {
    onError(error) {
      toast.error(error.message.toString());
    },
    onCompleted() {
      toast.success(t('Team updated successfully') as TFunction);
      refetch();
      removeModel();
    },
  });
  const orgToken = localStorage.getItem('orgToken');
  async function updateTeam(data: any) {
    const newData: any = { ...data };
    // Process the select fields
    newData.manager && (newData.manager = newData.manager.value);
    newData.program && (newData.program = newData.program.value);
    newData.phase && (newData.phase = newData.phase.value);
    newData.coordinatorEmail &&
      (newData.coordinatorEmail = newData.coordinatorEmail.value);
    newData.programName && (newData.programName = newData.programName.value);
    // Clean up empty fields
    Object.keys(newData).forEach((field) => {
      if (!newData[field] || newData[field] === '') {
        delete newData[field];
      }
    });
    newData.cohort && (newData.cohort = newData.cohort.value);
    newData.TTL && (newData.TTL = newData.TTL.value);
    newData.updateTeamId = currentTeam?.id;
    orgToken && (newData.orgToken = orgToken);
    await updateTeamMutation({ variables: newData });
  }
  useEffect(() => {
    // Set form values when the modal opens
    setValue('name', currentTeam?.name);
    setValue('TTL', {
      value: currentTeam?.ttl?.email,
      label: currentTeam?.ttl?.email || 'no ttl assigned',
    });
    setValue('cohort', {
      value: currentTeam?.cohort?.name,
      label: currentTeam?.cohort?.name || 'no cohort assigned',
    });
    setValue('manager', {
      value: currentTeam?.manager?.email,
      label:
        currentTeam?.manager?.email || currentTeam?.cohort?.coordinator?.email,
    });
    setValue('phase', {
      value: currentTeam?.phase?.name
        ? currentTeam?.phase?.name
        : currentTeam?.cohort?.phase?.name,
      label: currentTeam?.phase?.name
        ? currentTeam?.phase?.name
        : currentTeam?.cohort?.phase?.name || 'no phase assigned',
    });
    // setValue('phase', currentTeam?.phase);
    setValue('program', {
      value: currentTeam?.program?.name
        ? currentTeam?.program?.name
        : currentTeam?.cohort?.program?.name,
      label: currentTeam?.program?.name
        ? currentTeam?.program?.name
        : currentTeam?.cohort?.program?.name || 'no program assigned',
    });
  }, [currentTeam, updateTeamModal]);
  return (
    <div
      className={`h-screen w-screen bg-black fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-20 overflow-auto p-4 ${
        updateTeamModal === true ? 'block' : 'hidden'
      }`}
      data-testid="updateTeamModal"
    >
      <div className="w-screen p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg md:w-1/2 xl:w-4/12">
        <div className="flex flex-wrap items-center justify-center w-full card-title ">
          <h3 className="w-11/12 text-sm font-bold text-center uppercase dark:text-white">
            {t('Update Team')}
          </h3>
          <hr className="w-full my-3 border-b bg-primary" />
        </div>
        <div className="card-body">
          <form className="px-8 py-3 ">
            {/* Team Name */}
            <div className="my-5 input h-9">
              <input
                type="text"
                className="w-full px-5 py-2 font-sans text-xs border rounded outline-none border-primary dark:bg-dark-frame-bg dark:text-white"
                placeholder={t('name')}
                {...register('name')}
              />
              {errors?.name && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.name?.message?.toString()}
                </p>
              )}
            </div>
            {/* TTL Email */}
            <div className="my-5 input h-9">
              <ControlledSelect
                placeholder={t('email')}
                register={{
                  control,
                  name: 'TTL',
                  rules: { required: `${t('The ttl email is required')}` },
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
              {errors?.TTL && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.TTL?.message?.toString()}
                </p>
              )}
            </div>
            {/* Cohort */}
            <div className="my-5 input h-9">
              <ControlledSelect
                placeholder={t('Choose a Cohort')}
                register={{
                  control,
                  name: 'cohort',
                  rules: { required: `${t('The Cohort Name is required')}` },
                }}
                options={data?.getAllCohorts?.map(({ name }) => ({
                  value: name,
                  label: name,
                }))}
              />
              {errors?.cohort && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.cohort?.message?.toString()}
                </p>
              )}
            </div>
            {/* Manager */}
            <div className="my-5 input h-9">
              <ControlledSelect
                placeholder={t('Manager')}
                register={{
                  control,
                  name: 'manager',
                  rules: { required: `${t('Manager is required')}` },
                }}
                options={
                  data?.getAllUsers
                    ?.filter((user: any) => user.role === 'coordinator')
                    ?.map((user: any) => ({
                      value: user.email,
                      label: user.email,
                    })) ?? []
                }
              />
              {errors?.manager && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.manager?.message?.toString()}
                </p>
              )}
            </div>
            {/* Phase */}

            <div className="my-5 input h-9">
              <ControlledSelect
                placeholder={t('Phases')}
                register={{
                  control,
                  name: 'phase', // Ensure this matches your backend mutation variable
                  rules: { required: `${t('Phase is required')}` },
                }}
                options={data?.getAllPhases?.map(({ id, name }) => ({
                  value: id,
                  label: name,
                }))}
              />
            </div>
            {/* Program */}
            <div className="my-5 input h-9">
              <ControlledSelect
                placeholder={t('Program')}
                register={{
                  control,
                  name: 'program',
                  rules: { required: `${t('Program is required')}` },
                }}
                options={data?.getAllPrograms?.map(({ name }) => ({
                  value: name,
                  label: name,
                }))}
              />
              {errors?.program && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.program?.message?.toString()}
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
                {t('Cancel')}
              </Button>
              <Button
                variant="primary"
                size="sm"
                style="w-[30%] md:w-1/4 text-sm font-sans"
                data-testid="updateTeam"
                onClick={handleSubmit(updateTeam)}
                loading={loading}
                disabled={loading}
              >
                {t('Save')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
