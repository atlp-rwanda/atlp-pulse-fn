import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { UPDATE_TICKET } from '../queries/tickets.queries';

interface EditTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket: any;
  users: any[];
  refetchTickets: () => void;
}

function EditTicketModal({
  isOpen,
  onClose,
  ticket,
  users,
  refetchTickets,
}: EditTicketModalProps) {
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [hasChanges, setHasChanges] = useState(false);
  const authToken = localStorage.getItem('auth_token');

  useEffect(() => {
    setFormData({
      ...ticket,
      assignee: ticket?.assignee?.id || '',
    });
  }, [ticket]);

  useEffect(() => {
    const isSameData =
      formData.subject === ticket?.subject &&
      formData.message === ticket?.message &&
      formData.status === ticket?.status &&
      formData.assignee === (ticket?.assignee?.id || '');
    setHasChanges(!isSameData);
  }, [formData, ticket]);

  const [updateTicket] = useMutation(UPDATE_TICKET, {
    context: {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
    onCompleted: () => {
      setLoading(false);
      toast.success('Ticket updated successfully');
      refetchTickets();
      onClose();
    },
    onError: (error) => {
      setLoading(false);
      toast.error(`Error updating ticket: ${error.message}`);
    },
  });

  const validateForm = () => {
    const newErrors: { subject?: string; status?: string; assignee?: string } =
      {};
    if (!formData.subject?.trim()) newErrors.subject = 'Subject is required';
    if (!formData.status) newErrors.status = 'Status is required';
    if (!formData.assignee) newErrors.assignee = 'Assignee is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      await updateTicket({
        variables: {
          updateTicketId: formData.id,
          input: {
            subject: formData.subject,
            message: formData.message,
            status: formData.status,
            assignee: formData.assignee,
          },
        },
      });
    } catch (error: any) {
      toast.error(`Error updating ticket: ${error.message}`);
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70">
      <div className="w-1/3 max-w-3xl p-8 text-gray-900 bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Edit Ticket
        </h2>
        {loading && (
          <div className="flex items-center justify-center mb-4">
            <div className="w-6 h-6 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
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
              name="subject"
              type="text"
              value={formData.subject || ''}
              onChange={handleChange}
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
            <input
              id="message"
              name="message"
              type="text"
              value={formData.message || ''}
              onChange={handleChange}
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
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status || ''}
              onChange={handleChange}
              className={`block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border ${
                errors.status ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600`}
            >
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
            {errors.status && (
              <p className="mt-1 text-sm text-red-500">{errors.status}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="assignee"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Assignee
            </label>
            <select
              id="assignee"
              name="assignee"
              value={formData.assignee || ''}
              onChange={handleChange}
              className={`block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border ${
                errors.assignee ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600`}
            >
              <option value="">Select Assignee</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.email}
                </option>
              ))}
            </select>
            {errors.assignee && (
              <p className="mt-1 text-sm text-red-500">{errors.assignee}</p>
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              disabled={loading || !hasChanges}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTicketModal;
