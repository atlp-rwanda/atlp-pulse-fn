import { useQuery } from '@apollo/client';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import DataTable from './DataTable';
import { GET_TEAMS_CARDS } from './CoordinatorCard';

function DashboardTableDesign() {
  const { t } = useTranslation();
  const {
    data: TeamsData,
    loading,
    error,
    refetch,
  } = useQuery(GET_TEAMS_CARDS, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
    },
    fetchPolicy: 'network-only',
  });
  const TableData = TeamsData?.getAllTeams.map((items: any) => ({
    teams: items.name,
    users: items.members.length,
    logins: items.members.reduce(
      (total: number, i: any) => total + i.profile.activity.length,
      0,
    ),
  }));

  const organizationColumns = [
    { Header: t('Teams'), accessor: 'teams' },
    { Header: t('Logins'), accessor: 'logins' },
    { Header: t('Users'), accessor: 'users' },
    {
      Header: t('action'),
      accessor: '',
      Cell: () => (
        <>
          <button
            type="button"
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
            aria-label="View"
          >
            <FaEye className="w-4 h-4" />
            <span>{t('View')}</span>
          </button>
        </>
      ),
    },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto px-6 space-y-4">
      <DataTable
        columns={organizationColumns}
        data={TableData ? (TableData as any[]) : []}
        title={t('Teams metrices')}
      />
    </div>
  );
}

export default DashboardTableDesign;
