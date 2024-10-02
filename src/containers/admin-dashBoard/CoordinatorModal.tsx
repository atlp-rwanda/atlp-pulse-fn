import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import DataTable from '../../components/DataTable';
import Spinner from '../../components/Spinner';
import TtlSkeleton from '../../Skeletons/ttl.skeleton';

const GET_COORDINATORS = gql`
  query Query($orgToken: String) {
    getAllCoordinators(orgToken: $orgToken) {
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
  const orgToken = localStorage.getItem('orgToken');
  const { loading, error, data } = useQuery(GET_COORDINATORS, {
    variables: {
      orgToken,
    },
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
          <TtlSkeleton/>
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
