/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  message,
}) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setLoading(true);
    try {
      onConfirm();
    } catch (error) {
      toast.error('Failed to confirm action. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:shadow-gray-700">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Confirm Action
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            type="button"
            className={`px-4 py-2 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 ${
              loading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500'
            } dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
