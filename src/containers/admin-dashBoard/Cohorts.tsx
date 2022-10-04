/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../../components/DataTable';
import useDocumentTitle from '../../hook/useDocumentTitle';
import CreateCohortModal from './CreateCohortModal';
import { gql, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import Button from '../../components/Buttons';

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
  }
`;

const AdminCohort = () => {
  const { t } = useTranslation();

  const {
    data: getData,
    loading: getLoading,
    error: getError,
    refetch: getRefetch,
  }: {
    data?: {
      getAllCohorts: Cohort[];
    };
    loading: boolean;
    error?: any;
    refetch: Function;
  } = useQuery(getAllCohorts, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
    },
  });

  const [createCohortModel, setCreateCohortModel] = useState(false);
  const [deleteCohortModel, setDeleteCohortModel] = useState(false);
  const [showActions, setShowActions] = useState(false);
  useDocumentTitle('Cohorts');

  const handleShowActions = () => {
    setShowActions(!showActions);
  };

  const removeDeleteModel = () => {
    let newState = !deleteCohortModel;
    setDeleteCohortModel(newState);
  };

  const cohortColumns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Phase', accessor: 'phase' },
    { Header: 'Coordinator', accessor: 'coordinator' },
    { Header: 'Program', accessor: 'program' },
    { Header: 'StartingDate', accessor: 'startDate' },
    { Header: 'ClosingDate', accessor: 'endDate' },
    {
      Header: 'Action',
      accessor: '',
      Cell: () => (
        <div className="flex relative flex-row align-middle justify-center items-center">
          <Icon
            icon="el:file-edit-alt"
            className="mr-2"
            width="25"
            height="25"
            cursor="pointer"
            color="#148fb6"
          />
          <Icon
            icon="mdi:close-circle-outline"
            width="30"
            height="30"
            cursor="pointer"
            color="#148fb6"
          />
        </div>
      ),
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
      startDate,
      endDate,
    }),
  );

  const removeModel = () => {
    const newState = !createCohortModel;
    setCreateCohortModel(newState);
  };

  return (
    <>
      {/* =========================== Start:: CreateCohortModel =============================== */}
      <CreateCohortModal
        createCohortModel={createCohortModel}
        removeModel={removeModel}
        refetch={getRefetch}
      />
      {/* =========================== End::  CreateCohortModel =============================== */}

      {/* =========================== Start::  delete Session Model =============================== */}
      <div
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          deleteCohortModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-xl dark:text-white text-center w-11/12">
              {t('DeleteCohort')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white text-center m-4">
                  {t('reallyRemoveCohort')}
                </h2>
              </div>
              <div className="w-full flex justify-between">
                <Button
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  data-testid="delete"
                  onClick={() => removeDeleteModel()}
                >
                  {' '}
                  {t('Cancel')}{' '}
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                >
                  {' '}
                  {t('Delete')}{' '}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  delete Session Model =============================== */}

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
              {t('Cohort')} +{' '}
            </Button>
          </div>
        </div>
        <div className="px-3 m d:px-8 w-screen overflow-x-auto">
          {!getLoading && (
            <DataTable
              columns={cohortColumns}
              data={cohortData as [any]}
              title="CohortList"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminCohort;
