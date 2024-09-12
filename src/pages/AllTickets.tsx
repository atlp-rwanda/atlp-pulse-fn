/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import timePassedCalculator from '../utils/timePassedFormating';
import Button from '../components/Buttons';
import DataTable from '../components/DataTable';

interface Profile {
  firstName?: string;
  lastName?: string;
}

interface Ticket {
  id: string;
  user: {
    email: string;
    profile?: Profile[];
  };
  subject: string;
  message: string;
  createdAt: string;
  status: string;
}

const dummyProfile: Profile = {
  firstName: 'User',
  lastName: 'Unknown',
};

// Hardcoded tickets data
const hardcodedTickets: Ticket[] = [
  {
    id: '1',
    user: {
      email: 'john.doe@example.com',
      profile: [{ firstName: 'John', lastName: 'Doe' }],
    },
    subject: 'Issue with my order',
    message: 'I am facing an issue with my recent order...',
    createdAt: new Date().toString(),
    status: 'open',
  },
  {
    id: '2',
    user: {
      email: 'jane.doe@example.com',
      profile: [{ firstName: 'Jane', lastName: 'Doe' }],
    },
    subject: 'Login problem',
    message: 'I am unable to login to my account...',
    createdAt: new Date().toString(),
    status: 'closed',
  },
];

function AllTickets() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleSelectTicket(id: string) {
    navigate(`/tickets/${id}`);
  }

  function handleCreateTicket() {
    navigate('/tickets/create'); // Navigate to the create ticket page
  }

  const getUserDisplayName = (user: Ticket['user']) => {
    const profile =
      user.profile && user.profile.length > 0 ? user.profile[0] : dummyProfile;
    return profile.firstName && profile.lastName
      ? `${profile.firstName} ${profile.lastName}`
      : user.email;
  };

  const ticketColumns = [
    {
      Header: t('User'),
      accessor: 'user',
      Cell: ({ value }: { value: Ticket['user'] }) => (
        <div>
          <div className="font-bold text-blue-600">
            {getUserDisplayName(value)}
          </div>
          <div className="text-sm text-gray-500">{value.email}</div>
        </div>
      ),
    },
    { Header: t('Subject'), accessor: 'subject' },
    {
      Header: t('Message'),
      accessor: 'message',
      Cell: ({ value }: { value: string }) => `${value.slice(0, 100)}...`,
    },
    {
      Header: t('Created At'),
      accessor: 'createdAt',
      Cell: ({ value }: { value: string }) =>
        timePassedCalculator(new Date(value)),
    },
    {
      Header: t('Status'),
      accessor: 'status',
      Cell: ({ value }: { value: string }) => (
        <span
          className={`inline-flex items-center px-2 py-1 rounded-md ${
            value === 'closed'
              ? 'bg-green-700 text-white'
              : 'bg-[#E8EFE9] text-dark ring-1 ring-inset ring-blue-700/10'
          }`}
        >
          {t(value)}
        </span>
      ),
    },
    {
      Header: t('Action'),
      Cell: ({ row }: { row: { original: Ticket } }) => (
        <Button
          onClick={() => handleSelectTicket(row.original.id)}
          variant="primary"
          size="sm"
        >
          {t('Read more')}
        </Button>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center font-serif bg-white grow dark:bg-dark-frame-bg">
      <div className="w-full px-4 py-8">
        <div className="flex justify-between mb-4">
          {/* <h2 className="text-2xl font-bold dark:text-white">{t('All Tickets')}</h2> */}
          <div className="flex gap-2">
            <Button
              variant="primary"
              size="lg"
              style="m-0"
              data-testid="removeModel"
            >
              {' '}
              {t('Tickets')} {'  '}+
            </Button>
          </div>
        </div>

        {/* DataTable */}
        <DataTable
          columns={ticketColumns}
          data={hardcodedTickets}
          title={t('All Tickets')}
        />
      </div>
    </div>
  );
}

export default AllTickets;
