import { gql, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Buttons';
import DataTable from '../../components/DataTable';
import useDocumentTitle from '../../hook/useDocumentTitle';
import { PartialUser } from './Cohorts';
import CreateProgramModal from './CreateProgramModal';
import DeleteProgramModal from './DeleteProgramModal';
import UpdateProgramModal from './UpdateProgramModal';

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
    getAllUsers {
      id
      email
      role
    }
  }
`;

function ActionButtons({
  getData,
  setCurrentProgram,
  setUpdateProgramModal,
  setDeleteProgramModal,
  ...props
}: any) {
  return (
    <div className="flex relative flex-row align-middle justify-center items-center">
      <div
        data-testid="updateIcon"
        onClick={() => {
          const program = getData?.getAllPrograms[props.row.index];
          setCurrentProgram(program);
          setUpdateProgramModal(true);
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
         /* istanbul ignore next */
        onClick={() => {
         /* istanbul ignore next */
          const program = getData?.getAllPrograms[props.row.index];
          setCurrentProgram(program);
          setDeleteProgramModal(true);
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

function AdminPrograms() {
  const { t } = useTranslation();

  const {
    data: getData,
    loading: getLoading,
    refetch: getRefetch,
  }: {
    data?: {
      getAllPrograms: Program[];
      getAllUsers: PartialUser[];
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
  const [updateProgramModal, setUpdateProgramModal] = useState(false);
  const [deleteProgramModal, setDeleteProgramModal] = useState(false);
  const [currentProgram, setCurrentProgram] = useState<Program | undefined>(
    undefined,
  );
  useDocumentTitle('Programs');

  const programListColumns = [
    { Header: t('name'), accessor: 'name' },
    { Header: t('number of cohorts'), accessor: 'numberOfCohorts' },
    { Header: t('Manager'), accessor: 'manager' },
    { Header: t('Organization'), accessor: 'organization' },
    { Header: t('Description'), accessor: 'description' },
    {
      Header: t('Actions'),
      accessor: '',
      Cell: (props: any) =>
        ActionButtons({
          getData,
          setCurrentProgram,
          setUpdateProgramModal,
          setDeleteProgramModal,
          ...props,
        }),
    },
  ];
 /* istanbul ignore next */
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
 /* istanbul ignore next */
  const removeModel = () => {
    const newState = !createProgramModel;
    setCreateProgramModel(newState);
  };

  return (
    <>
      {/* =========================== Start:: CreateProgramModel =============================== */}
      <CreateProgramModal
        data={getData}
        createProgramModel={createProgramModel}
        removeModel={removeModel}
        refetch={getRefetch}
      />
      <UpdateProgramModal
        data={getData}
        updateProgramModal={updateProgramModal}
         /* istanbul ignore next */
        currentProgram={currentProgram}
        removeModel={() => {
          setUpdateProgramModal(false);
        }}
        refetch={getRefetch}
      />
      <DeleteProgramModal
        deleteProgramModal={deleteProgramModal}
         /* istanbul ignore next */
        currentProgram={currentProgram}
        removeModel={() => {
          setDeleteProgramModal(false);
        }}
        refetch={getRefetch}
      />
      {/* =========================== End::  CreateProgramModel =============================== */}

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
              {t('Program')} {'  '}+
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
}

export default AdminPrograms;
