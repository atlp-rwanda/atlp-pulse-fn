import { gql, useMutation, useLazyQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Team } from './Teams';
import ModalDataTable from '../../components/ModalDataTable';
import { GET_TEAM_TRAINEE_QUERY } from '../../Mutations/manageStudentMutations';
import ButtonLoading from '../../components/ButtonLoading';

const organizationToken = localStorage.getItem('orgToken');

export default function TeamTraineeModal({
  teamTraineeModal,
  currentTeam,
  removeModel,
  refetch,
}: {
  teamTraineeModal: boolean;
  currentTeam: Team | undefined;
  removeModel: Function;
  refetch: Function;
}) {
  const { t } = useTranslation();

  const [traineeData, setTraineeData] = useState<any[]>([]);
  const columns = [
    { Header: t('name'), accessor: 'name' },
    { Header: t('email'), accessor: 'email' },
    { Header: t('rating'), accessor: 'rating' },
    { Header: t('cohort'), accessor: 'cohort' },
    { Header: t('program'), accessor: 'program' },
  ];
  const datum: any = [];

  const [getTeamTraineesQuery, { loading }] = useLazyQuery(
    GET_TEAM_TRAINEE_QUERY,
    {
      variables: {
        orgToken: organizationToken,
        team: currentTeam ? currentTeam.name : '',
      },
    },
  );

  if (traineeData && traineeData.length > 0) {
    traineeData?.map((data: any, index: number): any => {
      datum[index] = {};
      datum[index].name = data.profile.name;
      datum[index].email = data.email;
      datum[index].rating = '2';
      datum[index].cohort = data.team?.cohort.name;
      datum[index].program = data.team?.cohort.program.name;
      return datum;
    });
  }

  useEffect(() => {
    getTeamTraineesQuery({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setTraineeData(data.getTeamTrainees);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  }, [currentTeam]);

  return (
    <div
      className={`h-screen w-screen bg-black fixed top-0 left-0 z-20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center overflow-auto p-4 ${
        teamTraineeModal === true ? 'block' : 'hidden'
      }`}
    >
      {!loading ? (
        <ModalDataTable
          data={traineeData?.length > 0 ? datum : [{}]}
          columns={columns}
          title={t('Trainees list')}
          removeModel={removeModel}
        />
      ) : (
        <ButtonLoading style="rounded-full inline-block" />
      )}
    </div>
  );
}
