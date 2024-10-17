/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { toast } from 'react-toastify';
import DataTable from '../components/DataTable';
import NewTicketModal from '../components/NewTicketModal';
import ViewTicketModal from '../components/ViewTicketModal';
import EditTicketModal from '../components/EditTicketModal';
import ConfirmationModal from '../components/ConfirmationModal';
import ActionDropdownCell from '../Mutations/ActionDropdownCell';
import { UserContext } from '../hook/useAuth';

// GraphQL Queries and Mutations
const GET_TICKETS = gql`
  query GetAllTickets {
    getAllTickets {
      id
      subject
      message
      status
      createdAt
      user {
        id
        email
        role
        profile {
          name
          firstName
          lastName
        }
        team {
          id
          name
        }
        cohort {
          id
          name
        }
      }
      assignee {
        id
        email
        role
        profile {
          name
          firstName
          lastName
        }
        team {
          id
          name
        }
        cohort {
          id
          name
        }
      }
    }
  }
`;

const DELETE_TICKET = gql`
  mutation DeleteTicket($deleteTicketId: ID!) {
    deleteTicket(id: $deleteTicketId) {
      responseMsg
    }
  }
`;

const GET_TRAINEES = gql`
  query GetTrainees($orgToken: String!) {
    getTrainees(orgToken: $orgToken) {
      id
      email
      role
      team {
        id
        name
      }
      cohort {
        id
        name
      }
    }
  }
`;

const UPDATE_TICKET = gql`
  mutation UpdateTicket($updateTicketId: ID!, $input: UpdateTicketInput!) {
    updateTicket(id: $updateTicketId, input: $input) {
      responseMsg
    }
  }
`;

// Interfaces
interface Team {
  id: string;
  name: string;
}

interface Cohort {
  id: string;
  name: string;
}

interface Profile {
  name: string;
  firstName: string;
  lastName: string;
}

interface User {
  id: string;
  email: string;
  role: string;
  profile: Profile;
  team: Team;
  cohort: Cohort;
}

interface Ticket {
  id: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
  user: User;
  assignee: User;
}

interface ActionDropdownCellProps {
  row: { original: Ticket };
  onView: (ticket: Ticket) => void;
  onEdit: (ticket: Ticket) => void;
  onDelete: (id: string) => void;
  canEditDelete: boolean;
}

function ActionDropdownCellComponent({
  row,
  onView,
  onEdit,
  onDelete,
  canEditDelete,
}: ActionDropdownCellProps) {
  return (
    <ActionDropdownCell
      row={row}
      onView={() => onView(row.original)}
      onEdit={() => onEdit(row.original)}
      onDelete={() => onDelete(row.original.id)}
      canEditDelete={canEditDelete}
    />
  );
}

function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [isNewTicketModalOpen, setIsNewTicketModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [teams, setTeams] = useState<Team[]>([]); // State for teams

  const { logout } = useContext(UserContext);

  const authToken = localStorage.getItem('auth_token');
  const orgToken = localStorage.getItem('orgToken');
  const auth = localStorage.getItem('auth');
  const authObj = auth ? JSON.parse(auth) : null;
  const role = authObj?.role || 'trainee';

  const handleError = useCallback(
    (action: string) => (error: any) => {
      const errorMessage =
        error.message || `An error occurred while ${action}.`;
      toast.error(`Error ${action}: ${errorMessage}`);
      if (errorMessage.includes('no longer exist')) {
        logout();
      }
    },
    [logout],
  );

  const {
    data: ticketsData,
    loading: ticketsLoading,
    refetch,
  } = useQuery(GET_TICKETS, {
    context: { headers: { Authorization: `${authToken}` } },
    onError: handleError('fetching tickets'),
  });

  const { data: usersData } = useQuery(GET_TRAINEES, {
    context: { headers: { Authorization: authToken } },
    variables: { orgToken },
    skip: role === 'trainee',
    onError: handleError('fetching users'),
  });

  const [deleteTicket] = useMutation(DELETE_TICKET, {
    context: { headers: { Authorization: `${authToken}` } },
    onCompleted: () => {
      toast.success('Ticket deleted successfully!');
      refetch();
    },
    onError: handleError('deleting ticket'),
  });

  const [updateTicket] = useMutation(UPDATE_TICKET, {
    context: { headers: { Authorization: `${authToken}` } },
    onCompleted: () => {
      toast.success('Ticket updated successfully!');
      refetch();
    },
    onError: handleError('updating ticket'),
  });

  useEffect(() => {
    if (ticketsData) {
      setTickets(ticketsData.getAllTickets);
      setLoading(ticketsLoading);
    }
  }, [ticketsData, ticketsLoading]);

  useEffect(() => {
    if (usersData && role !== 'trainee') {
      setUsers(usersData.getTrainees);
    }
  }, [usersData, role]);

  const handleNewTicketClick = () => setIsNewTicketModalOpen(true);
  const handleCloseNewTicketModal = () => setIsNewTicketModalOpen(false);

  const handleViewTicket = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedTicket(null);
  };

  const handleEditTicket = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedTicket(null);
  };

  const handleSaveTicket = (updatedTicket: Ticket) => {
    updateTicket({
      variables: {
        updateTicketId: updatedTicket.id,
        input: {
          subject: updatedTicket.subject,
          message: updatedTicket.message,
          status: updatedTicket.status,
          assignee: updatedTicket.assignee.id,
        },
      },
    });
    setIsEditModalOpen(false);
  };

  const handleDeleteTicket = (id: string) => {
    setSelectedTicket({ id } as Ticket);
    setIsConfirmDeleteOpen(true);
  };

  const confirmDelete = () => {
    if (selectedTicket) {
      deleteTicket({ variables: { deleteTicketId: selectedTicket.id } });
      setIsConfirmDeleteOpen(false);
    }
  };

  const cancelDelete = () => setIsConfirmDeleteOpen(false);

  const columns = React.useMemo(() => {
    const baseColumns = [
      {
        Header: 'Subject',
        accessor: 'subject',
      },
      {
        Header: 'Message',
        accessor: 'message',
        Cell: ({ value }: { value: string }) => {
          const trimmedMessage =
            value.length > 100 ? `${value.substring(0, 80)}...` : value;
            
          return trimmedMessage;
        },
      },
      {
        Header: 'Created At',
        accessor: 'createdAt',
        Cell: ({ value }: { value: string }) =>
          new Date(parseInt(value, 10)).toLocaleString(),
      },
      {
        Header: 'Assigner Email',
        accessor: 'user.email',
        Cell: ({ value }: { value: string }) => value || 'N/A',
      },
      {
        Header: 'Assignee Email',
        accessor: 'assignee.email',
        Cell: ({ value }: { value: string }) => value || 'N/A',
      },
    ];

    const adminColumns = [
      {
        Header: 'Team',
        accessor: 'assignee.team.name',
        Cell: ({ value }: { value: string }) => value || 'N/A',
      },
      {
        Header: 'Cohort',
        accessor: 'assignee.cohort.name',
        Cell: ({ value }: { value: string }) => value || 'N/A',
      },
    ];

    const actionColumn = {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ row }: { row: { original: Ticket } }) => (
        <ActionDropdownCellComponent
          row={row}
          onView={handleViewTicket}
          onEdit={handleEditTicket}
          onDelete={handleDeleteTicket}
          canEditDelete={role !== 'trainee'}
        />
      ),
    };

    let columnsToUse = [...baseColumns];

    if (role === 'admin' || role === 'coordinator' || role === 'superAdmin') {
      columnsToUse = [...columnsToUse, ...adminColumns];
    }

    return [...columnsToUse, actionColumn];
  }, [role, handleViewTicket, handleEditTicket, handleDeleteTicket]);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        {role !== 'trainee' && role !== 'superAdmin' && (
          <button
            type="button"
            onClick={handleNewTicketClick}
            className="px-4 py-2 text-white rounded primary hover:bg-primary"
          >
            New Ticket
          </button>
        )}
      </div>

      <DataTable
        data={tickets}
        columns={columns}
        title="Tickets"
        loading={loading}
      />

      <NewTicketModal
        isOpen={isNewTicketModalOpen}
        onClose={handleCloseNewTicketModal}
        users={users}
        refetchTickets={refetch}
      />

      <ViewTicketModal
        isOpen={isViewModalOpen}
        onClose={handleCloseViewModal}
        ticket={selectedTicket}
      />

      <EditTicketModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        ticket={selectedTicket}
        users={users}
        refetchTickets={refetch}
      />

      <ConfirmationModal
        isOpen={isConfirmDeleteOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        message="Are you sure you want to delete this ticket?"
      />
    </div>
  );
}

export default TicketsPage;
