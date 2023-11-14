import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import DataTable from '../../components/DataTable';
import Spinner from '../../components/Spinner';

const GET_COORDINATORS = gql`
  query Query {
    getAllCoordinators {
      email
      profile {
        name
      }
      organizations
      role
    }
  }
`;

interface Coordinator {
  email: string;
  profile: {
    name: string | null;
  };
  organizations: string[];
  role: string;
}

export default function CoordinatorsPage() {
  const { t } = useTranslation();

  const { loading, error, data } = useQuery(GET_COORDINATORS, {
    pollInterval: 3000, // Refresh every 3 seconds
  });
  const [coordinators, setCoordinators] = useState<Coordinator[]>([]);

  useEffect(() => {
    if (data) {
      const extractedCoordinators = data.getAllCoordinators.map(
        (coordinator: any) => ({
          email: coordinator.email,
          profile: coordinator.profile || { name: null },
          organizations: coordinator.organizations || [],
          role: coordinator.role,
        }),
      );
      // .filter((coordinator: Coordinator) => {
      //   const orgName = localStorage.getItem('orgName') as string;
      //   return coordinator.organizations.includes(orgName);
      // });
      setCoordinators(extractedCoordinators);
    }
  }, [data]);

  const columns = [
    {
      Header: t('Name'),
      accessor: 'profile.name',
      Cell: ({ value }: any) => value || '-',
    },
    { Header: t('Email'), accessor: 'email' },
    { Header: t('Organizations'), accessor: 'organizations' },
    { Header: t('Role'), accessor: 'role' },
  ];

  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg overflow-y-auto overflow-x-hidden">
      <div className="flex items-left pb-8">
        <div className="flex gap-2" />
      </div>
      <div className=" overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <Spinner />
            <div className="spinner" />
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={coordinators}
            title={t('Coordinators List')}
          />
        )}
        {coordinators.length === 0 && !loading && (
          <div className="flex justify-center items-center h-48">
            {t('No coordinators found.')}
          </div>
        )}
      </div>
    </div>
  );
}
