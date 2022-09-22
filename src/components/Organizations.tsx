/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import CreateOrganizationModal from './CreateOrganizationModal';
import { gql, useQuery } from '@apollo/client';
import useDocumentTitle from '../hook/useDocumentTitle';
import Button from './Buttons';

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

  const handleShowActions = () => {
    setShowActions(!showActions);
  };

  const removeDeleteModel = () => {
    let newState = !deleteOrganizationModel;
    setDeleteOrganizationModel(newState);
  };

  const removeModel = () => {
    const newState = !createOrganizationModel;
    setCreateOrganizationModel(newState);
  };

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
              {t('Organization')} +{' '}
            </Button>
          </div>
        </div>
        <div className="px-3 md:px-8">
          <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full lg:w-[80%] lg:ml-64">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h2 className="text-gray-800 dark:text-white font-semibold">
                  {t('Organization List')}
                </h2>
              </div>
            </div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('name')}
                        </th>
                        <th className="px-5  border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Admin')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Description')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {getData?.getOrganizations?.map(
                        ({ id, name, description, admin: { email } }) => {
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
                                  {email}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                <p className="text-gray-900 dark:text-white whitespace-no-wrap break-words">
                                  {description}
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
    </>
  );
};

export default Organizations;
