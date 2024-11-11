import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import DataTable from './DataTable';

interface User {
  email: string;
  role?: string;
  team?: {
    cohort?: {
      program?: {
        name: string;
      };
    };
  };
  organizations: string[];
}

interface ProgramUsersModalProps {
  programId: string;
  programName: string;
  // defaultProgram?: string;
  isOpen: boolean;
  onClose: () => void;
}

interface CellProps {
  value: string;
}

// Styled components for dark mode support
const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
}));

const StyledDialogTitle = styled(DialogTitle)({
  padding: '16px 24px',
  margin: 0,
});

const StyledDialogContent = styled(DialogContent)({
  padding: '20px 24px',
});

const GET_ALL_USERS = gql`
  query GetAllUsers($orgToken: String) {
    getAllUsers(orgToken: $orgToken) {
      email
      role
      team {
        cohort {
          program {
            name
          }
        }
      }
      organizations
    }
  }
`;

export function ProgramUsersModal({
  programId,
  isOpen,
  onClose,
  // defaultProgram = 'default',
  programName,
}: ProgramUsersModalProps) {
  const { data, loading, error } = useQuery(GET_ALL_USERS, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
    },
    skip: !isOpen,
  });

  const programUsers =
    data?.getAllUsers.filter(
      (user: User) => user.team?.cohort?.program?.name === programName,
      // || (user.team === null && programName === defaultProgram)
    ) || [];

  const columns = [
    {
      Header: 'Email',
      accessor: 'email',
      Cell: ({ value }: CellProps) => (
        <div className="flex items-center">
          <span className="hidden ml-2 md:inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
            <svg
              className="h-full w-full text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
          <span className="ml-3 dark:text-gray-200">{value}</span>
        </div>
      ),
    },
    {
      Header: 'Role',
      accessor: 'role',
      Cell: ({ value }: CellProps) => (
        <span className="capitalize dark:text-gray-200">{value || 'N/A'}</span>
      ),
    },
    {
      Header: 'Organization',
      accessor: 'organizations',
      Cell: ({ value }: { value: string[] }) => (
        <span className="dark:text-gray-200">{value.join(', ')}</span>
      ),
    },
  ];

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-red-500 text-center">
          Error loading users. Please try again.
        </div>
      );
    }

    if (programUsers.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No users found for this program
        </div>
      );
    }

    return (
      <div className="dark:bg-gray-800">
        <DataTable
          data={programUsers}
          columns={columns}
          title="Program Users"
        />
      </div>
    );
  };

  return (
    <StyledDialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <div className="bg-white dark:bg-gray-800 rounded-t-lg">
        <StyledDialogTitle className="text-gray-900 dark:text-white border-b dark:border-gray-700">
          {programName} - Users
        </StyledDialogTitle>
        <StyledDialogContent className="bg-white dark:bg-gray-800">
          {renderContent()}
        </StyledDialogContent>
      </div>
    </StyledDialog>
  );
}
