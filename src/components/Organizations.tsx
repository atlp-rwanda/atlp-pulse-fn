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
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';

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
      getOrganizations?: Organization[];
    };
    loading: boolean;
    error?: any;
    refetch: Function;
  } = useQuery(getOrganizations);

  const [createOrganizationModel, setCreateOrganizationModel] = useState(false);
  const [deleteOrganizationModel, setDeleteOrganizationModel] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [removeTraineeModel, setRemoveTraineeModel] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState({
    id: '',
    name: '',
    email: '',
    description: '',
  });

  const handleShowActions = () => {
    setShowActions(!showActions);
  };
  const removeTraineeMod = () => {
    let newState = !removeTraineeModel;
    setRemoveTraineeModel(newState);
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
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          deleteOrganizationModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-xl dark:text-white text-center w-11/12">
              {t('DeleteOrganization')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white text-center m-4">
                  {t('reallyRemoveOrganization')}
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
                    }, 3000);
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
          <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full lg:w-[80%] lg:ml-64">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h2 className="text-gray-800 dark:text-white font-semibold">
                  {t('Organization List')}
                </h2>
              </div>
            </div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal ">
                    <thead>
                      <tr>
                        <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-neutral-600 text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('name')}
                        </th>
                        <th className="px-5  border-b-2 border-gray-200 bg-gray-100 dark:bg-neutral-600 text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Admin')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-neutral-600 text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Description')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-neutral-600 text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Status')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-neutral-600 text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Actions')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {getData?.getOrganizations?.map(
                        ({ id, name, description, admin, status }) => {
                          return (
                            <tr key={id}>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                <div className="flex items-center">
                                  <div>
                                    <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                      {name}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                  {admin.email}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                <p className="text-gray-900 dark:text-white whitespace-no-wrap break-words">
                                  {description}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                <p className="text-gray-900 dark:text-white whitespace-no-wrap break-words">
                                  {status}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                <p className="flex gap-5 text-gray-900 dark:text-white whitespace-no-wrap break-words">
                                  {status == 'active' ? (
                                    <>
                                      <Icon
                                        icon="mdi:refresh"
                                        width="30"
                                        height="30"
                                        cursor="pointer"
                                        color="#148fb6"
                                        /* istanbul ignore next */
                                        onClick={() => {
                                          setData({
                                            id: id,
                                            name: name,
                                            email: admin.email,
                                            description: description,
                                          });
                                          removeTraineeMod();
                                        }}
                                      />
                                      <Icon
                                        icon="mdi:close-circle-outline"
                                        width="30"
                                        height="30"
                                        cursor="pointer"
                                        color="#148fb6"
                                        /* istanbul ignore next */
                                        onClick={() => {
                                          setData({
                                            id: id,
                                            name: name,
                                            email: admin.email,
                                            description: description,
                                          });
                                          removeDeleteModel();
                                        }}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={() => {
                                          setData({
                                            id: id,
                                            name: name,
                                            email: admin.email,
                                            description: description,
                                          });

                                          approveModel();
                                        }}
                                      >
                                        {t('Approve')}
                                      </Button>

                                      <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={() => {
                                          setData({
                                            id: id,
                                            name: name,
                                            email: admin.email,
                                            description: description,
                                          });

                                          rejectModel();
                                        }}
                                      >
                                        {t('Reject')}
                                      </Button>
                                    </>
                                  )}
                                </p>
                              </td>
                            </tr>
                          );
                        },
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================== Start::  RemoveTraineeModel =============================== */}

      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${
          removeTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
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
                  onClick={() => removeTraineeMod()}
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
                      email: data.email,
                      description: data.description,
                    });
                    setTimeout(() => {
                      removeTraineeMod();
                    }, 5000);
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
      {/* =========================== End::  RemoveTraineeModel =============================== */}

      {/* =========================== Start::  ApproveMode =============================== */}

      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${
          approveOpen === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
              {t('Send Invitation')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                  {t('Are you sure you want to Approve this organization?')}
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
                      email: data.email,
                      description: data.description,
                    });

                    setTimeout(() => {
                      approveModel();
                    }, 5000);
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
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${
          rejectOpen === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
              {t('Send Invitation')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                  {t('Are you sure you want to Reject this organization?')}
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
                      email: data.email,
                      description: data.description,
                    });

                    setTimeout(() => {
                      rejectModel();
                    }, 5000);
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
    </>
  );
};

export default Organizations;
