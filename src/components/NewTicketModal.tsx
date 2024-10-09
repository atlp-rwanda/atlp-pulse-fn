import React, { useState, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import CREATE_TICKET from '../Mutations/help.mutation';

interface NewTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  users: any[];
  refetchTickets: () => void;
}

function NewTicketModal({
  isOpen,
  onClose,
  users,
  refetchTickets,
}: NewTicketModalProps) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    subject?: string;
    message?: string;
    team?: string;
    user?: string;
  }>({});

  const [createTicket] = useMutation(CREATE_TICKET, {
    onCompleted: () => {
      setLoading(false);
      toast.success('Ticket created successfully');
      refetchTickets();
      onClose();
    },
    onError: (error) => {
      setLoading(false);
      toast.error(`Error creating ticket: ${error.message}`);
    },
  });

  const teams = useMemo(() => {
    const uniqueTeams = new Set(users.map((user) => user.team.id));
    return Array.from(uniqueTeams).map((teamId) => {
      const teamUser = users.find((user) => user.team.id === teamId);
      return { id: teamId, name: teamUser.team.name };
    });
  }, [users]);

  const filteredUsers = useMemo(
    () =>
      selectedTeam ? users.filter((user) => user.team.id === selectedTeam) : [],
    [selectedTeam, users],
  );

  const validateForm = () => {
    const newErrors: {
      subject?: string;
      message?: string;
      team?: string;
      user?: string;
    } = {};
    if (!subject.trim()) newErrors.subject = 'Subject is required';
    if (subject.length > 100)
      newErrors.subject = 'Subject must be less than 100 characters';
    if (!message.trim()) newErrors.message = 'Message is required';
    if (!selectedTeam) newErrors.team = 'Team must be selected';
    if (!selectedUser) newErrors.user = 'User must be selected';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      await createTicket({
        variables: {
          subject,
          message,
          assignee: selectedUser,
        },
      });
    } catch (error: any) {
      toast.error(`Error submitting ticket: ${error.message}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70">
      <div className="w-1/3 max-w-3xl p-8 text-gray-900 bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Create New Ticket
        </h2>
        {loading && (
          <div className="flex items-center justify-center mb-4">
            <div className="w-6 h-6 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border ${
                errors.subject ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600`}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="teams"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Teams
            </label>
            <select
              id="teams"
              value={selectedTeam}
              onChange={(e) => {
                setSelectedTeam(e.target.value);
                setSelectedUser('');
              }}
              className={`block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border ${
                errors.team ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600`}
            >
              <option value="">Select Teams</option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
            {errors.team && (
              <p className="mt-1 text-sm text-red-500">{errors.team}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="user"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Assignee
            </label>
            <select
              id="user"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className={`block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border ${
                errors.user ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600`}
              disabled={!selectedTeam}
            >
              <option value="">Select assignee</option>
              {filteredUsers.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.email}
                </option>
              ))}
            </select>
            {errors.user && (
              <p className="mt-1 text-sm text-red-500">{errors.user}</p>
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              disabled={loading}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTicketModal;
