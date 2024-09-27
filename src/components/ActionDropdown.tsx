import React, { useState, useEffect, useRef } from 'react';
import {
  FaEllipsisV,
  FaEye,
  FaEdit,
  FaTrashAlt,
  FaClipboard,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

interface ActionDropdownProps {
  onView: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  canEditDelete: boolean;
  id?: string;
}

function ActionDropdown({
  onView,
  onEdit,
  onDelete,
  canEditDelete,
  id,
}: ActionDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const copyToClipboard = (text: any) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('ID copied to clipboard!');
      })
      .catch((err) => {
        toast.error(`Failed to copy: ${err}`);
      });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Hide ellipsis icon if the dropdown is open */}
      {!isOpen && (
        <button
          type="button"
          aria-label="Open actions menu"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          onClick={toggleDropdown}
        >
          <FaEllipsisV className="text-lg" />
        </button>
      )}

      {isOpen && (
        <div className="absolute right-0 z-10 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          <button
            type="button"
            aria-label="View item"
            onClick={() => {
              onView();
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-700"
          >
            <FaEye className="mr-2" />
            View
          </button>
          {canEditDelete && (
            <>
              <button
                type="button"
                aria-label="Edit item"
                onClick={() => {
                  onEdit?.();
                  setIsOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-yellow-600 hover:bg-yellow-100 dark:text-yellow-400 dark:hover:bg-yellow-700"
              >
                <FaEdit className="mr-2" />
                Edit
              </button>
              <button
                type="button"
                aria-label="Delete item"
                onClick={() => {
                  onDelete?.();
                  setIsOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-700"
              >
                <FaTrashAlt className="mr-2" />
                Delete
              </button>
            </>
          )}
          <button
            type="button"
            aria-label="Copy ID"
            onClick={() => {
              copyToClipboard(id);
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <FaClipboard className="mr-2" />
            Copy ID
          </button>
        </div>
      )}
    </div>
  );
}

export default ActionDropdown;
