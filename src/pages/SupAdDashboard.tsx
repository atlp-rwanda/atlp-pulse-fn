import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { id } from 'date-fns/locale';
import Chart from '../components/Chart';
import Card from '../components/Card';
import useDocumentTitle from '../hook/useDocumentTitle';

function SupAdDashboard() {
  useDocumentTitle('Dashboard');
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);

  const organizations = [
    {
      id: '1',
      name: 'Andela',
      totalLogins: 130,
      totalUsers: 30,
      activeUsers: 20,
      inactiveUsers: 10,
      numberOfTeams: 5,
      numberOfCohorts: 5,
      numberOfPrograms: 5,
    },
    {
      id: '2',
      name: 'Acme Corp',
      totalLogins: 200,
      totalUsers: 50,
      activeUsers: 35,
      inactiveUsers: 15,
      numberOfTeams: 7,
      numberOfCohorts: 4,
      numberOfPrograms: 8,
    },
  ];

  const openModal = (org: any) => {
    setSelectedOrg(org);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrg(null);
  };

  return (
    <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg font-serif">
      <div className="flex flex-row pb-8 justify-center">
        <div className="">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <Card text={t('All Organizations')} number={organizations.length} />
            <Card text={t('Appproved Orgs')} number={2} />
            <Card text={t('Rejected Orgs')} number={0} />
            <Card text={t('Pending Orgs')} number={5} />
          </div>
          <Chart title="User Growth Over Time" />

          <div className="overflow-x-auto mt-8">
            <table className="min-w-full bg-white dark:bg-dark-bg border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-800">
                  <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">
                    Organization
                  </th>
                  <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">
                    Total Logins
                  </th>
                  <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">
                    Total Users
                  </th>
                  <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {organizations.map((org) => (
                  <tr
                    key={org.id}
                    className="border-b border-gray-300 dark:border-gray-700"
                  >
                    <td className="px-4 py-2">{org.name}</td>
                    <td className="px-4 py-2">{org.totalLogins}</td>
                    <td className="px-4 py-2">{org.totalUsers}</td>
                    <td className="px-4 py-2">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => openModal(org)}
                        type="button"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {isModalOpen && selectedOrg && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                <h2 className="text-xl font-bold mb-4">Andela</h2>
                <p className="mb-2">
                  <strong>Total Logins:</strong> {10}
                </p>
                <p className="mb-2">
                  <strong>Number of Teams:</strong> {10}
                </p>
                <p className="mb-2">
                  <strong>Number of Cohorts:</strong> {10}
                </p>
                <p className="mb-2">
                  <strong>Number of Programs:</strong> {10}
                </p>
                <p className="mb-2">
                  <strong>Users:</strong> Active Users: {10}, Inactive Users:{' '}
                  {10}
                </p>
                <button
                  className="mt-4 bg-violet-500 text-white p-2 rounded hover:bg-violet-500"
                  onClick={closeModal}
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SupAdDashboard;
