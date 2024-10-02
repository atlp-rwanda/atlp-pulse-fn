import { gql, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Buttons';
import DataTable from '../../components/DataTable';
import useDocumentTitle from '../../hook/useDocumentTitle';
import CreatephaseModal from './CreatePhaseModal';
import UpdatePhaseModal from './UpdatePhaseModal';
import DeletePhaseModal from './DeletePhaseModal';
import { PartialUser } from './Cohorts';
import TtlSkeleton from '../../Skeletons/ttl.skeleton';

export interface Phase {
  id: string;
  name: string;
  description: string;
}

export const getAllPhases = gql`
  query Query($orgToken: String!) {
    getAllPhases(orgToken: $orgToken) {
      description
      name
      id
    }
  }
`;

function ActionButtons({
  getData,
  setCurrentPhase,
  setUpdatePhaseModal,
  setDeletePhaseModal,
  ...props
}: any) {
  return (
    <div className="flex relative flex-row align-middle items-center">
      <div
        data-testid="updateIcon"
        onClick={() => {
          const phase = getData?.getAllPhases[props.row.index];
          setCurrentPhase(phase);
          setUpdatePhaseModal(true);
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
          const phase = getData?.getAllPhases[props.row.index];
          setCurrentPhase(phase);
          setDeletePhaseModal(true);
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

function AdminPhases() {
  const { t } = useTranslation();

  const {
    data: getData,
    loading: getLoading,
    refetch: getRefetch,
  }: {
    data?: {
      getAllPhases: Phase[];
      getAllUsers: PartialUser[];
    };
    loading: boolean;
    error?: any;
    refetch: Function;
  } = useQuery(getAllPhases, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
    },
  });

  const [createPhaseModel, setCreatePhaseModel] = useState(false);
  const [updatePhaseModal, setUpdatePhaseModal] = useState(false);
  const [deletePhaseModal, setDeletePhaseModal] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<Phase | undefined>(
    undefined,
  );
  useDocumentTitle('Phase');

  const phaseListColumns = [
    { Header: t('name'), accessor: 'name' },
    { Header: t('Description'), accessor: 'description' },
    {
      Header: t('Actions'),
      accessor: '',
      Cell: (props: any) =>
        ActionButtons({
          getData,
          setCurrentPhase,
          setUpdatePhaseModal,
          setDeletePhaseModal,
          ...props,
        }),
    },
  ];

  const phaseListData = getData
    ? getData.getAllPhases.map(({ name, description }) => ({
        name,
        description,
      }))
    : [[]];

  const removeModel = () => {
    const newState = !createPhaseModel;
    setCreatePhaseModel(newState);
  };

  return (
    <>
      {/* =========================== Start:: CreatePhaseModel =============================== */}
      <CreatephaseModal
        createPhaseModel={createPhaseModel}
        removeModel={removeModel}
        refetch={getRefetch}
      />

      <UpdatePhaseModal
        data={getData}
        UpdatePhaseModal={updatePhaseModal}
        currentPhase={currentPhase}
        removeModel={() => {
          setUpdatePhaseModal(false);
        }}
        refetch={getRefetch}
      />

      <DeletePhaseModal
        deletePhaseModal={deletePhaseModal}
        currentPhase={currentPhase}
        removeModel={() => {
          setDeletePhaseModal(false);
        }}
        refetch={getRefetch}
      />

      {/* =========================== End::  CreatePhaseModel =============================== */}

      <div className="bg-light-bg dark:bg-dark-frame-bg">
        <div className="flex items-right pb-8">
          <div className="flex gap-2">
            <Button
              variant="primary"
              size="lg"
              style="m-0"
              onClick={removeModel}
              data-testid="removeModel"
            >
              {' '}
              {t('Phase')} {'  '}+
            </Button>
          </div>
        </div>
        <div className="">
          {getLoading? (
            <TtlSkeleton/>
          ):(
            <DataTable
              data={phaseListData as any [] ?? []}
              columns={phaseListColumns}
              title="Phase list"
              loading={getLoading}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AdminPhases;
