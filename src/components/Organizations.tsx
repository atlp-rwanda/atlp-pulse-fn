/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import CreateOrganizationModal, {
  AddOrganization,
} from './CreateOrganizationModal';
import { gql, useMutation, useQuery } from '@apollo/client';
import useDocumentTitle from '../hook/useDocumentTitle';
import Button from './Buttons';
import Tooltip from '@mui/material/Tooltip';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';

import DataTable from '../components/DataTable';

export interface Admin {
  id: string;
  email: string;
}
export interface Organization {
  id: string;
  name: string;
  description: string;
  admin: Admin;
  [x: string]: any;
}

export const getOrganizations = gql`
  query GetOrganizations {
    getOrganizations {
      id
      name
      description
      admin {
        id
        email
      }
      status
    }
  }
`;

export const DeleteOrganization = gql`
  mutation DeleteOrganization($deleteOrganizationId: ID!) {
    deleteOrganization(id: $deleteOrganizationId) {
      id
      name
      description
    }
  }
`;

export const RegisterNewOrganization = gql`
  mutation RegisterNewOrganization(
    $organizationInput: OrganizationInput
    $action: String
  ) {
    RegisterNewOrganization(
      organizationInput: $organizationInput
      action: $action
    ) {
      name
      status
    }
  }
`;

function ActionButtons({
  getData,
  setData,
  removeInviteModel,
  removeDeleteModel,
  approveModel,
  rejectModel,
  ...props
}: any) {
  const checkStatus = getData?.getOrganizations[props.row.index].status;
  return (
    <div className="flex relative flex-row align-middle justify-center items-center">
      {checkStatus == 'active' ? (
        <>
          <div
            onClick={() => {
              setData(getData?.getOrganizations[props.row.index]);
              removeInviteModel();
            }}
          >
            <Tooltip title="Send Email">
              <Icon
                icon="mdi:email-fast"
                width="30"
                height="30"
                cursor="pointer"
                color="#9e85f5"
              />
            </Tooltip>
          </div>
          <div
            onClick={() => {
              setData(getData?.getOrganizations[props.row.index]);
              removeDeleteModel();
            }}
          >
            <Icon
              icon="mdi:delete"
              width="30"
              height="30"
              cursor="pointer"
              color="#9e85f5"
            />
          </div>
        </>
      ) : (
        <>
          <div
            onClick={() => {
              setData(getData?.getOrganizations[props.row.index]);
              approveModel();
            }}
          >
            <Tooltip title="Approve">
              <Icon
                icon="mdi:bank-check"
                width="30"
                height="30"
                cursor="pointer"
                color="#9e85f5"
              />
            </Tooltip>
          </div>
          <div
            onClick={() => {
              setData(getData?.getOrganizations[props.row.index]);
              rejectModel();
            }}
          >
            <Tooltip title="Reject">
              <Icon
                icon="mdi:bank-remove"
                width="30"
                height="30"
                cursor="pointer"
                color="#9e85f5"
              />
            </Tooltip>
          </div>
        </>
      )}
    </div>
  );
}

const Organizations = () => {
  useDocumentTitle('Organizations');
  const { t } = useTranslation();

  const {
    data: getData,
    loading: getLoading,
    error: getError,
    refetch: getRefetch,
  }: {
    data?: {
      getOrganizations: Organization[];
    };
    loading: boolean;
    error?: any;
    refetch: Function;
  } = useQuery(getOrganizations);

  const [createOrganizationModel, setCreateOrganizationModel] = useState(false);
  const [deleteOrganizationModel, setDeleteOrganizationModel] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [sendInviteModel, setSendInviteModel] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState({
    id: '',
    name: '',
    admin: {
      id: '',
      email: '',
    },
    description: '',
  });

  const handleShowActions = () => {
    setShowActions(!showActions);
  };
  const removeInviteModel = () => {
    let newState = !sendInviteModel;
    setSendInviteModel(newState);
  };

  const approveModel = () => {
    let newState = !approveOpen;
    setApproveOpen(newState);
  };

  const rejectModel = () => {
    let newState = !rejectOpen;
    setRejectOpen(newState);
  };

  const removeDeleteModel = () => {
    let newState = !deleteOrganizationModel;
    setDeleteOrganizationModel(newState);
  };

  const removeModel = () => {
    const newState = !createOrganizationModel;
    setCreateOrganizationModel(newState);
  };

  const [addOrganizationMutation, { loading }] = useMutation(AddOrganization, {
    onError(error) {
      toast.error(error.message.toString());
    },
    onCompleted() {
      toast.success('Email Sent Successfully');
      getRefetch();
    },
  });

  const [RegisterOrganizationMutation] = useMutation(RegisterNewOrganization, {
    onError(error) {
      setIsLoad(false);
      toast.error(error.message.toString());
    },
    onCompleted() {
      setIsLoad(false);
      toast.success('Email Sent Successfully');
      getRefetch();
    },
  });

  const [deleteOrganizationMutation] = useMutation(DeleteOrganization, {
    onError(error) {
      toast.error(error.message.toString());
    },
    onCompleted() {
      setIsLoad(false);
      toast.success('Organisation Deleted.');
      getRefetch();
    },
  });

  async function addOrganization(data: any) {
    await addOrganizationMutation({
      variables: { organizationInput: data, action: 'resend' },
    });
  }

  async function ApproveOrganization(data: any) {
    await RegisterOrganizationMutation({
      variables: { organizationInput: data, action: 'approve' },
    });
  }

  async function RejectOrganization(data: any) {
    await RegisterOrganizationMutation({
      variables: { organizationInput: data, action: 'reject' },
    });
  }

  async function deleteOrganization(data: any) {
    await deleteOrganizationMutation({
      variables: { deleteOrganizationId: data },
    });
  }

  const organizationColumns = [
    { Header: t('name'), accessor: 'name' },
    { Header: t('Admin'), accessor: 'adminEmail' },
    { Header: t('Description'), accessor: 'description' },
    { Header: t('Status'), accessor: 'status' },

    {
      Header: t('action'),
      accessor: '',
      Cell: (props: any) =>
        ActionButtons({
          getData,
          setData,
          removeInviteModel,
          removeDeleteModel,
          approveModel,
          rejectModel,
          ...props,
        }),
    },
  ];

  const organizationData = getData?.getOrganizations.map(
    ({ name, description, admin, status }) => ({
      name,
      adminEmail: admin?.email,
      description,
      status,
    }),
  );

  return (
    <>
      {/* =========================== Start:: CreateOrganizationModel =============================== */}
      <CreateOrganizationModal
        createOrganizationModel={createOrganizationModel}
        removeModel={removeModel}
        refetch={getRefetch}
      />
      {/* =========================== End::  CreateOrganizationModel =============================== */}

      {/* =========================== Start::  delete Session Model =============================== */}
      <div
        className={`h-screen w-screen bg-black fixed top-0 left-0 z-20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center overflow-auto p-4 ${
          deleteOrganizationModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-xl dark:text-white text-center w-11/12">
              {t('Delete Organization')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white text-center m-4">
                  {t(
                    'Are you sure you want to permanently delete this organization?',
                  )}
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
                  onClick={() => {
                    setIsLoad(true);
                    deleteOrganization(data.id);
                    setTimeout(() => {
                      removeDeleteModel();
                    }, 2000);
                  }}
                  loading={isLoad}
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

      {/* =========================== Start::  SendInviteModel =============================== */}

      <div
        className={`h-screen w-screen bg-black fixed top-0 left-0 z-20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center overflow-auto p-4 ${
          sendInviteModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-xl dark:text-white text-center w-11/12">
              {t('Send Invitation')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                  {t(
                    'Are you sure you want to send invitation to this organization?',
                  )}
                </h3>
              </div>

              <div className="w-full flex justify-between">
                <Button
                  data-testid="removeModel2"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => removeInviteModel()}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  data-testid="removeMemberFromCohort"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    addOrganization({
                      name: data?.name,
                      email: data.admin.email,
                      description: data.description,
                    });
                    setTimeout(() => {
                      removeInviteModel();
                    }, 2000);
                  }}
                  loading={loading}
                >
                  {t('Proceed')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  SendInviteModel =============================== */}

      {/* =========================== Start::  ApproveMode =============================== */}

      <div
        className={`h-screen w-screen bg-black fixed top-0 left-0 z-20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center overflow-auto p-4 ${
          approveOpen === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-xl dark:text-white text-center w-11/12">
              {t('Approve New Organization Request')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                  {t('Are you sure you want to approve this organization?')}
                </h3>
              </div>

              <div className="w-full flex justify-between">
                <Button
                  data-testid="removeModel2"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => approveModel()}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  data-testid="removeMemberFromCohort"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setIsLoad(true);
                    ApproveOrganization({
                      name: data?.name,
                      email: data.admin.email,
                      description: data.description,
                    });

                    setTimeout(() => {
                      approveModel();
                    }, 2000);
                  }}
                  loading={isLoad}
                >
                  {t('Proceed')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  ApproveMode =============================== */}

      {/* =========================== Start::  RejectModal =============================== */}

      <div
        className={`h-screen w-screen bg-black fixed top-0 left-0 z-20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center overflow-auto p-4 ${
          rejectOpen === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-xl dark:text-white text-center w-11/12">
              {t('Reject New Organization Request')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                  {t('Are you sure you want to reject this organization?')}
                </h3>
              </div>

              <div className="w-full flex justify-between">
                <Button
                  data-testid="removeModel2"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => rejectModel()}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  data-testid="removeMemberFromCohort"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setIsLoad(true);
                    RejectOrganization({
                      name: data?.name,
                      email: data.admin.email,
                      description: data.description,
                    });

                    setTimeout(() => {
                      rejectModel();
                    }, 2000);
                  }}
                  loading={isLoad}
                >
                  {t('Proceed')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  RejectModal =============================== */}

      <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen">
        <div className="flex items-left pb-8">
          <div className="flex gap-2">
            <Button
              variant="primary"
              size="lg"
              style="m-0"
              onClick={removeModel}
              data-testid="removeModel"
            >
              {' '}
              {t('Organization')} +{' '}
            </Button>
          </div>
        </div>
        <div className="">
          <DataTable
            columns={organizationColumns}
            data={organizationData ? (organizationData as [any]) : []}
            title={t('Organizations list')}
            loading={getLoading}
          />
        </div>
      </div>
    </>
  );
};

export default Organizations;
