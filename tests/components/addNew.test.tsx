import "@testing-library/jest-dom";
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import { toast } from "react-toastify";
import AddGradingSystem from '../../src/pages/gradeSystem/addNew';
import { act } from 'react-dom/test-utils';
import React from "react";

// Mock dependencies
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

const mockCreate = jest.fn();
const mockRemoveModel = jest.fn();
const mockSetValue = jest.fn();

const defaultProps = {
  removeModel: mockRemoveModel,
  setValue: mockSetValue,
  create: mockCreate,
  loading: false,
};

describe('AddGradingSystem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const setup = (props = {}) => {
    return render(
      <MockedProvider>
        <AddGradingSystem {...defaultProps} {...props} />
      </MockedProvider>
    );
  };

  describe('Form Rendering', () => {
    it('should render the form with initial values', () => {
      setup();
      
      expect(screen.getByPlaceholderText('Label eg: Name of grading system')).toBeInTheDocument();
      expect(screen.getByLabelText('Toggle percentage requirement')).toBeChecked();
      expect(screen.getByLabelText('Toggle description requirement')).not.toBeChecked();
      expect(screen.getByText('Add Grade')).toBeInTheDocument();
      expect(screen.getByText('Save')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
  });

  describe('Form Validation', () => {
    it('should show validation error for empty name', async () => {
      setup();
      
      const saveButton = screen.getByText('Save');
      await act(async () => {
        fireEvent.click(saveButton);
      });

      expect(screen.getByText('Name cannot be empty')).toBeInTheDocument();
    });

    it('should show validation error for short name', async () => {
      setup();
      
      const nameInput = screen.getByPlaceholderText('Label eg: Name of grading system');
      await act(async () => {
        fireEvent.change(nameInput, { target: { value: 'A' } });
      });

      expect(screen.getByText('Name must be at least 2 characters')).toBeInTheDocument();
    });
  });


  describe('Form Reset', () => {
    it('should reset form when cancel button is clicked', async () => {
      setup();
      
      // Fill form data
      await act(async () => {
        fireEvent.change(screen.getByPlaceholderText('Label eg: Name of grading system'), {
          target: { value: 'Test Grading System' }
        });
      });

      // Click cancel
      await act(async () => {
        fireEvent.click(screen.getByText('Cancel'));
      });

      expect(mockRemoveModel).toHaveBeenCalled();
      expect(mockSetValue).toHaveBeenCalledWith('');
      expect(screen.getByPlaceholderText('Label eg: Name of grading system')).toHaveValue('');
    });
  });
});