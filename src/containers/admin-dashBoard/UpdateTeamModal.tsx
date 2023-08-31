import { gql, useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TFunction, useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';
import { Team, Cohort } from './Teams';

export const UpdateTeam = gql`
  mutation UpdateTeam($updateTeamId: ID!, $name: String, $orgToken: String) {
    updateTeam(id: $updateTeamId, name: $name, orgToken: $orgToken) {
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
  };
  updateTeamModal: boolean;
  currentTeam: Team | undefined;
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

    newData.coordinatorEmail &&
      (newData.coordinatorEmail = newData.coordinatorEmail.value);
    newData.programName && (newData.programName = newData.programName.value);

    Object.keys(newData).forEach((field) => {
      if (!newData[field] || newData[field] === '') {
        delete newData[field];
      }
    });

    newData.updateTeamId = currentTeam?.id;
    orgToken && (newData.orgToken = orgToken);

    await updateTeamMutation({ variables: newData });
  }

  useEffect(() => {
    setValue('name', currentTeam?.name);
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
          <hr className="w-full my-3 border-b  bg-primary" />
        </div>
        <div className="card-body">
          <form className="px-8 py-3 ">
            <div className="my-5 input h-9 ">
              <div className="flex items-center w-full h-full rounded-md grouped-input">
                <input
                  type="text"
                  className="w-full px-5 py-2 font-sans text-xs border rounded outline-none border-primary dark:bg-dark-frame-bg dark:text-white"
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
                onClick={handleSubmit(updateTeam)}
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
