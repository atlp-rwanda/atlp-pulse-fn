import React from 'react';
import DataPagination from './DataPagination';

interface Invitee {
  email: string;
  role: string;
}

interface Invitation {
  invitees: Invitee[];
  status: string;
  id: string;
}

interface InvitationTableProps {
  invitations: Invitation[];
  pageIndex: number;
  pageSize: number;
  canNextPage: boolean;
  canPreviousPage: boolean;
  pageOptions: any[];
  setPageSize: (size: number) => void;
  gotoPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
}

function InvitationTable({
  invitations,
  pageIndex,
  pageSize,
  canNextPage,
  canPreviousPage,
  pageOptions,
  setPageSize,
  gotoPage,
  nextPage,
  previousPage,
}: InvitationTableProps) {
  return (
    <div className="w-full overflow-x-auto pb-4 mt-6">
      <div className="min-w-[600px] border border-gray-300 pb-2 rounded-lg bg-[#F3F0FE] dark:bg-dark-bg">
        {/* Header Row */}
        <div className="bg-[#C7B9F9] flex justify-between font-bold p-4 border-b border-gray-300 dark:text-black">
          <span className="flex-1 p-4 text-left">Email</span>
          <span className="flex-1 p-4 text-left">Role</span>
          <span className="flex-1 p-4 text-left">Status</span>
        </div>

        {/* Data Rows */}
        {invitations?.map((invitation) => (
          <div
            key={invitation.id}
            className="w-full bg-[#F3F0FE] border-b border-gray-300"
          >
            {invitation.invitees?.map((invitee, idx) => (
              <div
                key={invitation.id}
                className="flex justify-between p-4 dark:bg-dark-bg"
              >
                <span className="flex-1 p-4 text-left">{invitee.email}</span>
                <span className="flex-1 p-4 text-left">{invitee.role}</span>
                <span className="flex-1 p-4 text-left">{invitation.status}</span>
              </div>
            ))}
          </div>
        ))}
        <DataPagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          pageOptions={pageOptions}
          setPageSize={setPageSize}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          columnLength={3}
        />
      </div>
    </div>
  );
}

export default InvitationTable;
