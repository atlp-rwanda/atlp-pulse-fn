import React from 'react';
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { toast } from 'react-toastify';
import InviteForm from '../components/invitationModel';
import { SEND_INVITATION } from '../Mutations/invitationMutation';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();


Object.defineProperty(global, 'localStorage', { value: localStorageMock });

const mocks = [
  {
    request: {
      query: SEND_INVITATION,
      variables: {
        invitees: [{ email: 'test@example.com', role: 'admin' }],
        orgToken: 'mockToken',
      },
    },
    result: {
      data: {
        sendInvitation: {
          success: true,
        },
      },
    },
  },
];

describe('InviteForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (localStorage.getItem as jest.Mock).mockReturnValue('mockToken');
  });

  it('renders correctly', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <InviteForm onClose={() => {}} />
      </MockedProvider>
    );

    expect(screen.getByText('Invite users')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Invite')).toBeInTheDocument();
  });

  it('validates email input', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <InviteForm onClose={() => {}} />
      </MockedProvider>
    );

    const emailInput = screen.getByPlaceholderText('Email address');
    const submitButton = screen.getByText('Invite');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
    });
  });

  it('handles role selection', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <InviteForm onClose={() => {}} />
      </MockedProvider>
    );

    const roleButton = screen.getByText('Role');
    fireEvent.click(roleButton);

    const adminOption = screen.getByText('Admin');
    fireEvent.click(adminOption);

    expect(screen.queryByText('Admin')).not.toBeInTheDocument();
    expect(roleButton).toHaveTextContent('admin');
  });

  it('submits the form successfully', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <InviteForm onClose={() => {}} />
      </MockedProvider>
    );

    const emailInput = screen.getByPlaceholderText('Email address');
    const roleButton = screen.getByText('Role');
    const submitButton = screen.getByText('Invite');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(roleButton);
    fireEvent.click(screen.getByText('Admin'));
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Invitation sent successfully!');
    });
  });

  it('handles invitation error', async () => {
    const errorMock = {
      ...mocks[0],
      error: new Error('Invitation failed'),
    };

    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <InviteForm onClose={() => {}} />
      </MockedProvider>
    );

    const emailInput = screen.getByPlaceholderText('Email address');
    const roleButton = screen.getByText('Role');
    const submitButton = screen.getByText('Invite');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(roleButton);
    fireEvent.click(screen.getByText('Admin'));
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Error sending invitation: Invitation failed');
    });
  });


  it('displays loading state when submitting', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <InviteForm onClose={() => {}} />
      </MockedProvider>
    );

    const emailInput = screen.getByPlaceholderText('Email address');
    const roleButton = screen.getByText('Role');
    const submitButton = screen.getByText('Invite');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(roleButton);
    fireEvent.click(screen.getByText('Admin'));
    fireEvent.click(submitButton);

    expect(submitButton).toBeDisabled();

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });
});
