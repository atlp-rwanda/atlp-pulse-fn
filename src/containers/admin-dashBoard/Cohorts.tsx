import { gql, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Buttons';
import DataTable from '../../components/DataTable';
import useDocumentTitle from '../../hook/useDocumentTitle';
import formatDate from '../../utils/formatDate';
import CreateCohortModal from './CreateCohortModal';
import DeleteCohortModal from './DeleteCohortModal';
import UpdateCohortModal from './UpdateCohortModal';
import CohortTraineeModal from './CohortTraineeModal';
import CohortTeamsModel from './CohortTeamsModal';

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
  teams: string;
  startDate: string | Date;
  endDate: string | Date;
}
export interface PartialUser {
  id: string;
  email: string;
  role: string;
}
export interface PartialProgram {
  id: string;
  name: string;
}
export interface PartialPhase {
  id: string;
  name: string;
}

export const getAllCohorts = gql`
  query GetAllCohorts($orgToken: String!) {
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
      teams
      startDate
      endDate
    }
    getAllUsers(orgToken: $orgToken) {
      id
      email
      role
    }
    getAllPrograms(orgToken: $orgToken) {
      id
      name
    }
    getAllPhases(orgToken: $orgToken) {
      id
      name
    }
  }
`;

function ActionButtons({
  getData,
  setCurrentCohort,
  setUpdateCohortModal,
  setDeleteCohortModal,
  setCohortTrainneModal,
  ...props
}: any) {
  return (
    <div className="flex relative flex-row align-middle justify-center items-center">
      <div
        data-testid="traineeIcon"
        onClick={
          /* istanbul ignore next */
          () => {
            /* istanbul ignore next */
            setCurrentCohort(getData?.getAllCohorts[props.row.index]);
            /* istanbul ignore next */
            setCohortTrainneModal(true);
          }
        }
      >
        <Icon
          icon="akar-icons:people-group"
          className="mr-2"
          width="25"
          height="25"
          cursor="pointer"
          color="#148fb6"
        />
      </div>
      <div
        data-testid="updateIcon"
        onClick={() => {
          setCurrentCohort(getData?.getAllCohorts[props.row.index]);
          setUpdateCohortModal(true);
        }}
      >
        <Icon
          icon="el:file-edit-alt"
          className="mr-2"
          width="25"
          height="25"
          cursor="pointer"
          color="#148fb6"
        />
      </div>

      <div
        data-testid="deleteIcon"
        onClick={
          /* istanbul ignore next */
          () => {
            /* istanbul ignore next */
            setCurrentCohort(getData?.getAllCohorts[props.row.index]);
            /* istanbul ignore next */
            setDeleteCohortModal(true);
          }
        }
      >
        <Icon
          icon="mdi:close-circle-outline"
          width="30"
          height="30"
          cursor="pointer"
          color="#148fb6"
        />
      </div>
    </div>
  );
}
function TeamsButtons({
  getData,
  setCurrentCohort,
  setCohortTeamsModel,
  ...props
}: any) {
  return (
    <div className="flex relative flex-row align-middle justify-center items-center">
      <div
        className="cursor-pointer"
        onClick={
          /* istanbul ignore next */
          () => {
            /* istanbul ignore next */
            setCurrentCohort(getData?.getAllCohorts[props.row.index]);
            /* istanbul ignore next */
            setCohortTeamsModel(true);
          }
        }
      >
        {getData?.getAllCohorts[props.row.index].teams}
      </div>
    </div>
  );
}

function AdminCohort() {
  const { t } = useTranslation();

  const {
    data: getData,
    loading: getLoading,
    error: getError,
    refetch: getRefetch,
  }: {
    data?: {
      getAllCohorts: Cohort[];
      getAllPhases: PartialPhase[];
      getAllUsers: PartialUser[];
      getAllPrograms: PartialProgram[];
    };
    loading: boolean;
    error?: any;
    refetch: Function;
  } = useQuery(getAllCohorts, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
    },
  });

  const [createCohortModal, setCreateCohortModal] = useState(false);
  const [updateCohortModal, setUpdateCohortModal] = useState(false);
  const [cohortTrainneModal, setCohortTrainneModal] = useState(false);
  const [cohortTeamsModel, setCohortTeamsModel] = useState(false);
  const [currentCohort, setCurrentCohort] = useState<Cohort | undefined>(
    undefined,
  );
  const [deleteCohortModal, setDeleteCohortModal] = useState(false);
  useDocumentTitle('Cohorts');
  /* istanbul ignore next */
  const removeDeleteModel =
    /* istanbul ignore next */
    () => {
      const newState = !deleteCohortModal;
      setDeleteCohortModal(newState);
    };

  const removeModel = () => {
    const newState =
      /* istanbul ignore next */
      !createCohortModal;
    setCreateCohortModal(newState);
  };

  const cohortColumns = [
    { Header: t('name'), accessor: 'name' },
    { Header: t('phase'), accessor: 'phase' },
    {
      Header: t('Teams'),
      accessor: '',
      Cell: (props: any) =>
        TeamsButtons({
          getData,
          setCurrentCohort,
          setCohortTeamsModel,
          ...props,
        }),
    },
    { Header: t('Coordinator'), accessor: 'coordinator' },
    { Header: t('program'), accessor: 'program' },
    { Header: t('starting date'), accessor: 'startDate' },
    { Header: t('closing date'), accessor: 'endDate' },
    {
      Header: t('action'),
      accessor: '',
      Cell: (props: any) =>
        ActionButtons({
          getData,
          setCurrentCohort,
          setUpdateCohortModal,
          setDeleteCohortModal,
          setCohortTrainneModal,
          ...props,
        }),
    },
  ];
  /* istanbul ignore next */
  const cohortData = getData?.getAllCohorts.map(
    /* istanbul ignore next */
    ({
      name,
      phase: { name: phaseName },
      coordinator,
      program: { name: programName },
      teams,
      startDate,
      endDate,
    }) =>
      /* istanbul ignore next */
      ({
        name,
        phase: phaseName,
        coordinator: coordinator ? coordinator.email : 'Not Assigned',
        program: programName,
        teams,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
      }),
  );

  return (
    <>
      {/* =========================== Start:: CreateCohortModel =============================== */}

      <CreateCohortModal
        data={getData}
        createCohortModel={createCohortModal}
        removeModel={removeModel}
        refetch={getRefetch}
      />
      <UpdateCohortModal
        /* istanbul ignore next */
        data={getData}
        updateCohortModal={updateCohortModal}
        currentCohort={currentCohort}
        refetch={getRefetch}
        removeModel={
          /* istanbul ignore next */
          () => /* istanbul ignore next */ {
            setUpdateCohortModal(false);
          }
        }
      />

      <CohortTraineeModal
        /* istanbul ignore next */
        cohortTraineeModal={cohortTrainneModal}
        currentCohort={currentCohort}
        refetch={getRefetch}
        removeModel={
          /* istanbul ignore next */
          () => /* istanbul ignore next */ {
            setCohortTrainneModal(false);
          }
        }
      />

      <DeleteCohortModal
        /* istanbul ignore next */
        deleteCohortModal={deleteCohortModal}
        currentCohort={currentCohort}
        removeModel={removeDeleteModel}
        refetch={getRefetch}
      />

      <CohortTeamsModel
        /* istanbul ignore next */
        cohortTeamsModel={cohortTeamsModel}
        currentCohort={currentCohort}
        removeModel={
          /* istanbul ignore next */
          () => /* istanbul ignore next */ {
            setCohortTeamsModel(false);
          }
        }
        refetch={getRefetch}
      />

      {/* =========================== End::  CreateCohortModel =============================== */}

      <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden">
        <div className="flex items-left px-7 lg:px-60 pt-24 pb-8">
          <div className="space-x-8 lg:ml-10">
            <Button
              variant="primary"
              size="lg"
              onClick={removeModel}
              data-testid="removeModel"
            >
              {' '}
              {t('Cohort')} +
            </Button>
          </div>
        </div>
        <div className="px-3 m d:px-8 w-screen overflow-x-auto">
          {!getLoading && (
            <DataTable
              columns={cohortColumns}
              data={cohortData ? (cohortData as [any]) : [{}]}
              title={t('Cohorts List')}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AdminCohort;
