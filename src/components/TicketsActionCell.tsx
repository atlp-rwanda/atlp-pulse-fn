import React from 'react';
import ActionDropdown from '../components/ActionDropdown';

interface TicketsActionCellProps {
  row: {
    original: {
      id: string;
    };
  };
  onView: (ticket: any) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

function TicketsActionCell({
  row,
  onView,
  onEdit,
  onDelete,
}: TicketsActionCellProps) {
  const { id } = row.original;

  return (
    <ActionDropdown
      onView={() => onView(row.original)}
      onEdit={() => onEdit(id)}
      onDelete={() => onDelete(id)}
      canEditDelete
    />
  );
}

export default TicketsActionCell;
