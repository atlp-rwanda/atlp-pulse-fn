import { gql, useMutation, useLazyQuery, useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import ModalDataTable from '../../components/ModalDataTable';
import { GET_COHORT_TRAINEES_QUERY } from '../../Mutations/manageStudentMutations';
import ButtonLoading from '../../components/ButtonLoading';

const organizationToken = localStorage.getItem('orgToken');
export interface Cohort {
  id: string;
  name: string;
  phase: {
    name: string;
  };
  coordinator: {
    email: string;
  };
  program: {
    name: string;
  };
  startDate: string | Date;
  endDate: string | Date;
}

export interface Team {
  id: string;
  name: string;
  cohort: Cohort;
}

export const getAllTeam = gql`
  query GetAllTeamInCohort($cohort: String, $orgToken: String) {
    getAllTeamInCohort(cohort: $cohort, orgToken: $orgToken) {
      name
      id
      cohort {
        name
        phase {
          name
        }
        program {
          name
        }
        coordinator {
          email
        }
      }
    }
  }
`;

export default function CohortTeamsModel({
  cohortTeamsModel,
  currentCohort,
  removeModel,
  refetch,
}: {
  cohortTeamsModel: boolean;
  currentCohort: Cohort | undefined;
  removeModel: Function;
  refetch: Function;
}) {
  const { t } = useTranslation();

  const [traineeData, setTraineeData] = useState<any[]>([]);
  const teamColumns = [
    { Header: t('name'), accessor: 'name' },
    { Header: t('Phase'), accessor: 'phase' },
    { Header: t('Cohort'), accessor: 'cohortName' },
    { Header: t('Program'), accessor: 'programName' },
    { Header: t('Coordinator'), accessor: 'coordinator' },
  ];

  const {
    data: getData,
    loading: getLoading,
    error: getError,
    refetch: getRefetch,
  }: {
    data?: {
      getAllTeamInCohort: Team[];
      getAllCohorts: Cohort[];
    };
    loading: boolean;
    error?: any;
    refetch: Function;
  } = useQuery(getAllTeam, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
      cohort: currentCohort?.name,
    },
  });

  const teamData = getData?.getAllTeamInCohort?.map(({ name, cohort }) => ({
    name,
    cohortName: cohort?.name,
    coordinator: cohort?.coordinator?.email,
    phase: cohort?.phase.name,
    programName: cohort?.program?.name,
  }));

  return (
    <div
      className={`h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${
        cohortTeamsModel === true ? 'block' : 'hidden'
      }`}
    >
      {!getLoading ? (
        <ModalDataTable
          data={teamData ? (teamData as [any]) : [{}]}
          columns={teamColumns}
          title={t('Teams list')}
          removeModel={removeModel}
        />
      ) : (
        <ButtonLoading style="rounded-full inline-block" />
      )}
    </div>
  );
}
