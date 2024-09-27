import React from 'react';
import TicketsActionCell from './TicketsActionCell';

interface TicketActionsCellProps {
  row: any;
  onView: (ticket: any) => void;
  onEdit: (ticket: any) => void;
  onDelete: (id: string) => void;
}

function TicketActionsCell({
  row,
  onView,
  onEdit,
  onDelete,
}: TicketActionsCellProps) {
  return (
    <TicketsActionCell
      row={row}
      onView={onView}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
}

export default TicketActionsCell;
