import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import GET_TICKETS, {
  DELETE_TICKET,
  GET_TRAINEES,
  UPDATE_TICKET,
} from '../queries/tickets.queries';
import DataTable from '../components/DataTable';
import NewTicketModal from '../components/NewTicketModal';
import ViewTicketModal from '../components/ViewTicketModal';
import EditTicketModal from '../components/EditTicketModal';
import ConfirmationModal from '../components/ConfirmationModal';
import { ticketsColumns } from '../components/tickets.columns';
import ActionDropdownCell from '../Mutations/ActionDropdownCell';
import { UserContext } from '../hook/useAuth';

interface Ticket {
  id: string;
  subject: string;
  message: string;
  status: string;
  assignee: {
    id: string;
    email: string;
  };
}

interface User {
  id: string;
  email: string;
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
    const baseColumns = [...ticketsColumns];
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
    return [...baseColumns, actionColumn];
  }, [role, handleViewTicket, handleEditTicket, handleDeleteTicket]);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        {role !== 'trainee' && role !== 'superAdmin' && (
          <button
            type="button"
            onClick={handleNewTicketClick}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
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
