/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useMutation, useLazyQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Team } from '../containers/admin-dashBoard/Teams';
import DataTable from './DataTable';
import { GET_TEAM_TRAINEE_QUERY } from '../Mutations/manageStudentMutations';
import ButtonLoading from './ButtonLoading';

const organizationToken = localStorage.getItem('orgToken');

export default function TeamDetailsModal({
  teamDetailsModal,
  currentTeam,
  removeModel,
  refetch,
}: {
  teamDetailsModal: boolean;
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
      className={`"bg-light-bg dark:bg-dark-frame-bg  ${
        teamDetailsModal === true ? 'block' : 'hidden'
      }`}
    >
      {!loading ? (
        <>
          <div className="flex text-white bg-emerald-800 justify-between items-center w-40 h-30 pr-40  items-left lg:px-60 pb-4 mb-8">
            <div className="space-x-8 justify-between lg:ml-10 flex items-center">
              <h1 className="">{currentTeam?.name}</h1>
              <div className="border-r-2 h-6 border-white" />
              <h1 className="">{currentTeam?.cohort?.name}</h1>
            </div>
            <div>
              <h1>coordinator:{currentTeam?.cohort?.coordinator?.email}</h1>
            </div>
          </div>

          <DataTable
            data={traineeData?.length > 0 ? datum : [{}]}
            columns={columns}
            title={t('Team Members')}
          />
        </>
      ) : (
        <ButtonLoading style="rounded-full inline-block" />
      )}
    </div>
  );
}
