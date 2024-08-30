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
    <div className="w-full border border-gray-300 rounded-lg bg-[#F3F0FE] pb-4 mt-6">
      {/* Header Row */}
      <div className="bg-[#C7B9F9] keep-it-black flex justify-between rounded-lg font-bold p-10 sm:p-2 md:p-4 border-b border-gray-300">
        <span>Email</span>
        <span>Role</span>
        <span>Status</span>
      </div>

      {/* Data Rows */}
      {invitations?.map((invitation, index) => (
        <div
          key={invitation.id}
          className="w-full bg-[#F3F0FE] border-b border-gray-300"
        >
          {invitation.invitees?.map((invitee, idx) => (
            <div
              key={invitation.id}
              className="keep-it-black flex justify-between sm:p-2 md:p-4 p-10"
            >
              <span>{invitee.email}</span>
              <span>{invitee.role}</span>
              <span>{invitation.status}</span>
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
  );
}

export default InvitationTable;
