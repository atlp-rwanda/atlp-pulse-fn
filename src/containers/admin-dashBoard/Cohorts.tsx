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

export interface Cohort {
  id: string;
  name: string;
  phase: string;
  coordinator: {
    email: string;
  };
  program: {
    name: string;
  };
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

export const getAllCohorts = gql`
  query GetAllCohorts($orgToken: String) {
    getAllCohorts(orgToken: $orgToken) {
      id
      name
      phase
      coordinator {
        email
      }
      program {
        name
      }
      startDate
      endDate
    }
    getAllUsers {
      id
      email
      role
    }
    getAllPrograms(orgToken: $orgToken) {
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
        onClick={() => {
          setCurrentCohort(getData?.getAllCohorts[props.row.index]);
          setCohortTrainneModal(true);
        }}
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
        onClick={() => {
          setCurrentCohort(getData?.getAllCohorts[props.row.index]);
          setDeleteCohortModal(true);
        }}
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
  const [currentCohort, setCurrentCohort] = useState<Cohort | undefined>(
    undefined,
  );
  const [deleteCohortModal, setDeleteCohortModal] = useState(false);
  useDocumentTitle('Cohorts');

  const removeDeleteModel = () => {
    const newState = !deleteCohortModal;
    setDeleteCohortModal(newState);
  };

  const removeModel = () => {
    const newState = !createCohortModal;
    setCreateCohortModal(newState);
  };

  const cohortColumns = [
    { Header: t('name'), accessor: 'name' },
    { Header: t('phase'), accessor: 'phase' },
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
  const cohortData = getData?.getAllCohorts.map(
    ({
      name,
      phase,
      coordinator: { email: coordinatorEmail },
      program: { name: programName },
      startDate,
      endDate,
    }) => ({
      name,
      phase,
      coordinator: coordinatorEmail,
      program: programName,
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
        data={getData}
        updateCohortModal={updateCohortModal}
        currentCohort={currentCohort}
        refetch={getRefetch}
        removeModel={() => {
          setUpdateCohortModal(false);
        }}
      />

      <CohortTraineeModal
        cohortTraineeModal={cohortTrainneModal}
        currentCohort={currentCohort}
        refetch={getRefetch}
        removeModel={() => {
          setCohortTrainneModal(false);
        }}
      />

      <DeleteCohortModal
        deleteCohortModal={deleteCohortModal}
        currentCohort={currentCohort}
        removeModel={removeDeleteModel}
        refetch={getRefetch}
      />

      {/* =========================== End::  CreateCohortModel =============================== */}

      <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen">
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
