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
            className={`h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${updateTeamModal === true ? 'block' : 'hidden'
                }`}
            data-testid="updateTeamModal"
        >
            <div className="bg-indigo-100 dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
                <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                    <h3 className="font-bold text-sm dark:text-white text-center w-11/12 uppercase">
                        {t('Update Team')}
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
