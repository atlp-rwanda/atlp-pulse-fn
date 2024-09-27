import React from 'react';

interface ViewTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket: any;
}

function ViewTicketModal({ isOpen, onClose, ticket }: ViewTicketModalProps) {
  if (!isOpen || !ticket) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Ticket Details
        </h2>
        <div className="space-y-6">
          {/* ID */}
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Ticket ID:
            </p>
            <p className="text-lg text-gray-900 dark:text-gray-100">
              {ticket.id}
            </p>
          </div>
          {/* Subject */}
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Subject:
            </p>
            <p className="text-lg text-gray-900 dark:text-gray-100">
              {ticket.subject}
            </p>
          </div>
          {/* Message */}
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Message:
            </p>
            <p className="text-lg text-gray-900 dark:text-gray-100">
              {ticket.message}
            </p>
          </div>
          {/* Status */}
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Status:
            </p>
            <p className="text-lg text-gray-900 dark:text-gray-100">
              {ticket.status}
            </p>
          </div>
          {/* User Assigned */}
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Assigned User:
            </p>
            <p className="text-lg text-gray-900 dark:text-gray-100">
              {ticket.user?.email || 'No user assigned'}
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewTicketModal;
