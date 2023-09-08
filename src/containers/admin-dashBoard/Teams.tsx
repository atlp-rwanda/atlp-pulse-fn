/* istanbul ignore file */
import { gql, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Buttons';
import DataTable from '../../components/DataTable';
import useDocumentTitle from '../../hook/useDocumentTitle';
import DeleteTeamModal from './DeleteTeamModal';
import UpdateTeamModal from './UpdateTeamModal';
import TeamTraineeModal from './TeamTraineeModal';
import CreateTeamModal from './CreateTeamModal';

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
  ttl: any;
}

export const getAllTeam = gql`
  query GetAllTeams($orgToken: String!) {
    getAllTeams(orgToken: $orgToken) {
      id
      name
      cohort {
        coordinator {
          email
        }
        phase {
          name
        }
        program {
          name
        }
        name
      }

      ttl {
        email
        profile {
          name
          lastName
          firstName
        }
      }

      ttl {
        email
        profile {
          name
          lastName
          firstName
        }
      }
    }

    getAllCohorts(orgToken: $orgToken) {
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

    getAllUsers(orgToken: $orgToken) {
      id
      email
      role
      organizations
    }
  }
`;

function ActionButtons({
  getData,
  setCurrentTeam,
  setUpdateTeamModal,
  setDeleteTeamModal,
  setTeamTrainneModal,
  ...props
}: any) {
  return (
    <div className="flex relative flex-row align-middle justify-center items-center">
      <div
        data-testid="traineeIcon"
        onClick={() => {
          setCurrentTeam(getData?.getAllTeams[props.row.index]);
          setTeamTrainneModal(true);
        }}
      >
        <Icon
          icon="akar-icons:people-group"
          className="mr-2"
          width="25"
          height="25"
          cursor="pointer"
          color="#9e85f5"
        />
      </div>
      <div
        data-testid="updateIcon"
        onClick={() => {
          setCurrentTeam(getData?.getAllTeams[props.row.index]);
          setUpdateTeamModal(true);
        }}
      >
        <Icon
          icon="el:file-edit-alt"
          className="mr-2"
          width="25"
          height="25"
          cursor="pointer"
          color="#9e85f5"
        />
      </div>

      <div
        data-testid="deleteIcon"
        onClick={() => {
          setCurrentTeam(getData?.getAllTeams[props.row.index]);
          setDeleteTeamModal(true);
        }}
      >
        <Icon
          icon="mdi:close-circle-outline"
          width="30"
          height="30"
          cursor="pointer"
          color="#9e85f5"
        />
      </div>
    </div>
  );
}

function AdminTeams() {
  const { t } = useTranslation();

  const {
    data: getData,
    loading: getLoading,
    error: getError,
    refetch: getRefetch,
  }: {
    data?: {
      getAllTeams: Team[];
      getAllCohorts: Cohort[];
      getAllUsers: any;
    };
    loading: boolean;
    error?: any;
    refetch: Function;
  } = useQuery(getAllTeam, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
    },
  });

  const [createTeamModal, setCreateTeamModal] = useState(false);
  const [updateTeamModal, setUpdateTeamModal] = useState(false);
  const [teamTrainneModal, setTeamTrainneModal] = useState(false);
  const [currentTeam, setCurrentTeam] = useState<Team | undefined>(undefined);
  const [deleteTeamModal, setDeleteTeamModal] = useState(false);
  useDocumentTitle('Teams');

  const removeDeleteModel = () => {
    const newState = !deleteTeamModal;
    setDeleteTeamModal(newState);
  };

  const removeModel = () => {
    setCreateTeamModal(false);
  };

  const teamColumns = [
    { Header: t('name'), accessor: 'name' },
    { Header: t('Phase'), accessor: 'phase' },
    { Header: t('Cohort'), accessor: 'cohortName' },
    { Header: t('Program'), accessor: 'programName' },
    { Header: t('Coordinator'), accessor: 'coordinator' },
    { Header: t('ttl'), accessor: 'ttlEmail' },

    {
      Header: t('action'),
      accessor: '',
      Cell: (props: any) =>
        ActionButtons({
          getData,
          setCurrentTeam,
          setUpdateTeamModal,
          setDeleteTeamModal,
          setTeamTrainneModal,
          ...props,
        }),
    },
  ];

  const teamData = getData?.getAllTeams.map(({ name, cohort, ttl }) => ({
    name,
    cohortName: cohort?.name,
    coordinator: cohort?.coordinator?.email
      ? cohort?.coordinator?.email
      : 'Not Assigned',
    phase: cohort?.phase.name,
    programName: cohort?.program?.name,
    ttlEmail: ttl?.profile && ttl.profile.name ? ttl?.email : 'Not Assigned',
  }));

  return (
    <>
      {/* =========================== Start:: CreateCohortModel =============================== */}
      <CreateTeamModal
        data={getData}
        createTeamModel={createTeamModal}
        removeModel={removeModel}
        refetch={getRefetch}
      />
      <UpdateTeamModal
        data={getData}
        updateTeamModal={updateTeamModal}
        currentTeam={currentTeam}
        refetch={getRefetch}
        removeModel={() => {
          setUpdateTeamModal(false);
        }}
      />

      <TeamTraineeModal
        teamTraineeModal={teamTrainneModal}
        currentTeam={currentTeam}
        refetch={getRefetch}
        removeModel={() => {
          setTeamTrainneModal(false);
        }}
      />

      <DeleteTeamModal
        deleteTeamModal={deleteTeamModal}
        currentTeam={currentTeam}
        removeModel={removeDeleteModel}
        refetch={getRefetch}
      />

      {/* =========================== End::  CreateCohortModel =============================== */}

      <div className="bg-light-bg dark:bg-dark-frame-bg">
        <div className="flex items-left pb-8">
          <div className="flex gap-2">
            <Button
              variant="primary"
              size="lg"
              style="m-0"
              onClick={() => setCreateTeamModal(true)}
              data-testid="removeModel"
            >
              {' '}
              {t('Team')} +
            </Button>
          </div>
        </div>
        <div className="">
          <DataTable
            columns={teamColumns}
            data={teamData ? (teamData as [any]) : []}
            title={t('Teams list')}
            loading={getLoading}
          />
        </div>
      </div>
    </>
  );
}

export default AdminTeams;
