import React from 'react';
import ActionDropdown from '../components/ActionDropdown';

interface ActionDropdownCellProps {
  row: {
    original: any;
  };
  onView: (ticket: any) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  canEditDelete: boolean;
}

function ActionDropdownCell({
  row,
  onView,
  onEdit,
  onDelete,
  canEditDelete,
}: ActionDropdownCellProps) {
  return (
    <ActionDropdown
      onView={() => onView(row.original)}
      onEdit={canEditDelete ? () => onEdit?.(row.original.id) : undefined}
      onDelete={canEditDelete ? () => onDelete?.(row.original.id) : undefined}
      canEditDelete={canEditDelete}
      id={row.original.id}
    />
  );
}

export default ActionDropdownCell;
