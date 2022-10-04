/* eslint-disable */
import { gql, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../../components/DataTable';
import useDocumentTitle from '../../hook/useDocumentTitle';
import Button from './../../components/Buttons';
import CreateProgramModal from './CreateProgramModal';

export interface Program {
  id: string;
  name: string;
  description: string;
  manager: {
    email: string;
  };
  organization: {
    name: string;
  };
  cohorts: [{ name: string }];
}

export const getAllPrograms = gql`
  query GetAllPrograms($orgToken: String) {
    getAllPrograms(orgToken: $orgToken) {
      id
      name
      cohorts {
        name
      }
      manager {
        email
      }
      organization {
        name
      }
      description
    }
  }
`;

const AdminPrograms = () => {
  const { t } = useTranslation();

  const {
    data: getData,
    loading: getLoading,
    error: getError,
    refetch: getRefetch,
  }: {
    data?: {
      getAllPrograms: Program[];
    };
    loading: boolean;
    error?: any;
    refetch: Function;
  } = useQuery(getAllPrograms, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
    },
  });

  const [createProgramModel, setCreateProgramModel] = useState(false);
  const [deleteProgramModel, setDeleteProgramModel] = useState(false);
  const [showActions, setShowActions] = useState(false);
  useDocumentTitle('Programs');

  const programListColumns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Number of Cohorts', accessor: 'numberOfCohorts' },
    { Header: 'Manager', accessor: 'manager' },
    { Header: 'Organization', accessor: 'organization' },
    { Header: 'Description', accessor: 'description' },
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

  const programListData = getData
    ? getData.getAllPrograms.map(
        ({
          name,
          cohorts,
          manager: { email: managerEmail },
          organization: { name: orgName },
          description,
        }) => ({
          name,
          numberOfCohorts: cohorts.length,
          manager: managerEmail,
          organization: orgName,
          description,
        }),
      )
    : [{}];

  const handleShowActions = () => {
    setShowActions(!showActions);
  };

  const removeDeleteModel = () => {
    let newState = !deleteProgramModel;
    setDeleteProgramModel(newState);
  };

  const removeModel = () => {
    const newState = !createProgramModel;
    setCreateProgramModel(newState);
  };

  return (
    <>
      {/* =========================== Start:: CreateProgramModel =============================== */}
      <CreateProgramModal
        createProgramModel={createProgramModel}
        removeModel={removeModel}
        refetch={getRefetch}
      />
      {/* =========================== End::  CreateProgramModel =============================== */}

      {/* =========================== Start::  delete Session Model =============================== */}
      <div
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          deleteProgramModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-xl dark:text-white text-center w-11/12">
              {t('DeleteProgram')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white text-center m-4">
                  {t('reallyRemoveProgram')}
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
              {t('Program')} +{' '}
            </Button>
          </div>
        </div>
        <div className="px-3 md:px-8">
          {!getLoading && (
            <DataTable
              data={programListData as [any]}
              columns={programListColumns}
              title="Program list"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPrograms;
