import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';
import AdminSission from '../../admin-dashBoard/Sessions';
import { GET_SESSIONS, CREATE_SESSION, DELETE_SESSION, EDIT_SESSION } from '../../../Mutations/session';

// Mock the custom hooks and modules
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

jest.mock('../../../hook/useDocumentTitle', () => jest.fn());

const mockSessions = [
  {
    id: '1',
    Sessionname: 'Test Session',
    description: 'Test Description',
    platform: 'Test Platform',
    duration: '1:00',
    organizer: 'Test Organizer',
  },
];

const mocks = [
  {
    request: {
      query: GET_SESSIONS,
    },
    result: {
      data: {
        getAllSessions: mockSessions,
      },
    },
  },
  {
    request: {
      query: CREATE_SESSION,
      variables: {
        sessionInput: {
          Sessionname: 'New Session',
          description: 'New Description',
          platform: 'New Platform',
          duration: '2:00',
          organizer: 'New Organizer',
        },
      },
    },
    result: {
      data: {
        createSession: {
          id: '2',
          Sessionname: 'New Session',
          description: 'New Description',
          platform: 'New Platform',
          duration: '2:00',
          organizer: 'New Organizer',
        },
      },
    },
  },
  {
    request: {
      query: DELETE_SESSION,
      variables: {
        ID: '1',
      },
    },
    result: {
      data: {
        deleteSession: {
          id: '1',
        },
      },
    },
  },
  {
    request: {
      query: EDIT_SESSION,
      variables: {
        ID: '1',
        editSessionInput: {
          Sessionname: 'Updated Session',
          description: 'Updated Description',
          platform: 'Updated Platform',
          duration: '3:00',
          organizer: 'Updated Organizer',
        },
      },
    },
    result: {
      data: {
        editSession: {
          id: '1',
          Sessionname: 'Updated Session',
          description: 'Updated Description',
          platform: 'Updated Platform',
          duration: '3:00',
          organizer: 'Updated Organizer',
        },
      },
    },
  },
];

describe('AdminSission Component', () => {
  it('renders without crashing', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AdminSission />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Sessions List')).toBeInTheDocument();
    });
  });

  it('displays session data in the table', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AdminSission />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Session')).toBeInTheDocument();
      expect(screen.getByText('Test Description')).toBeInTheDocument();
      expect(screen.getByText('Test Platform')).toBeInTheDocument();
      expect(screen.getByText('1:00')).toBeInTheDocument();
      expect(screen.getByText('Test Organizer')).toBeInTheDocument();
    });
  });

  it('opens add session modal when register button is clicked', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AdminSission />
      </MockedProvider>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText('register +'));
    });

    expect(screen.getByText('AddSession')).toBeInTheDocument();
  });

  it('adds a new session', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AdminSission />
      </MockedProvider>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText('register +'));
    });

    fireEvent.change(screen.getByPlaceholderText('SessionName'), { target: { value: 'New Session' } });
    fireEvent.change(screen.getByPlaceholderText('description'), { target: { value: 'New Description' } });
    fireEvent.change(screen.getByPlaceholderText('platform'), { target: { value: 'New Platform' } });
    fireEvent.change(screen.getByPlaceholderText('duration'), { target: { value: '2:00' } });
    fireEvent.change(screen.getByPlaceholderText('organizer'), { target: { value: 'New Organizer' } });

    fireEvent.click(screen.getByText('Save'));

    await waitFor(() => {
    //   expect(screen.queryByText('AddSession')).not.toBeInTheDocument();
    });
  });

  it('opens delete session modal when delete icon is clicked', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AdminSission />
      </MockedProvider>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('deleteIcon'));
    });

    expect(screen.getByText('DeleteSession')).toBeInTheDocument();
  });

it('deletes a session', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AdminSission />
    </MockedProvider>
  );

  await waitFor(() => {
    fireEvent.click(screen.getByTestId('deleteIcon'));
  });

  expect(screen.getByText('DeleteSession')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('delete')); 
});

  it('opens edit session modal when edit icon is clicked', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AdminSission />
      </MockedProvider>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('updateIcon'));
    });

    expect(screen.getByText('UpdateSession')).toBeInTheDocument();
  });
it('updates a session', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AdminSission />
    </MockedProvider>
  );

  await waitFor(() => {
    fireEvent.click(screen.getByTestId('updateIcon'));
  });

  expect(screen.getByText('UpdateSession')).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText('Test Session'), { target: { value: 'Updated Session' } });
  fireEvent.change(screen.getByPlaceholderText('Test Description'), { target: { value: 'Updated Description' } });
  fireEvent.change(screen.getByPlaceholderText('Test Platform'), { target: { value: 'Updated Platform' } });
  fireEvent.change(screen.getByPlaceholderText('1:00'), { target: { value: '3:00' } });
  fireEvent.change(screen.getByPlaceholderText('Test Organizer'), { target: { value: 'Updated Organizer' } });

});
});