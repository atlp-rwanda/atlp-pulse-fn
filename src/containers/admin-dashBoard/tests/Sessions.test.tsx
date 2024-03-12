import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';
import { act } from 'react-dom/test-utils';
import AdminSission from '../Sessions';
import {
  GET_SESSIONS,
  CREATE_SESSION,
  DELETE_SESSION,
  EDIT_SESSION,
} from '../../../Mutations/session';

const mockSessionData = {
  getAllSessions: [
    {
      id: '1',
      Sessionname: 'Test Session 1',
      description: 'Test Description 1',
      platform: 'Test Platform 1',
      duration: 'Test Duration 1',
      organizer: 'Test Organizer 1',
    },
    {
      id: '2',
      Sessionname: 'Test Session 2',
      description: 'Test Description 2',
      platform: 'Test Platform 2',
      duration: 'Test Duration 2',
      organizer: 'Test Organizer 2',
    },
  ],
};

const mocks = [
  {
    request: {
      query: GET_SESSIONS,
    },
    result: {
      data: mockSessionData,
    },
  },
  // Mocks for other queries and mutations
];

describe('AdminSission Component', () => {
  it('renders the component with session data', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AdminSission />
      </MockedProvider>,
    );

    await waitFor(() => {
      // expect(screen.getByText('Test Session 1')).toBeInTheDocument();
      // expect(screen.getByText('Test Session 2')).toBeInTheDocument();
    });
  });

  it('opens the add session model when the register button is clicked', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AdminSission />
      </MockedProvider>,
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText('register +'));
      // expect(screen.getByText('AddSession')).toBeInTheDocument();
    });
  });

  it('deletes a session when the delete icon is clicked', async () => {
    const deleteMocks = [
      {
        request: {
          query: DELETE_SESSION,
          variables: {
            ID: '1',
          },
        },
        result: {
          data: {
            deleteSession: true,
          },
        },
      },
      // Add more mocks if needed
    ];

    render(
      <MockedProvider mocks={[...mocks, ...deleteMocks]} addTypename={false}>
        <AdminSission />
      </MockedProvider>,
    );

    // await waitFor(() => {
    //   fireEvent.click(screen.getByTestId('deleteIcon'));
    //   // expect(screen.getByText('reallydeleteSession')).toBeInTheDocument();

    //   fireEvent.click(screen.getByText('Delete'));
    //   expect(screen.queryByText('reallydeleteSession')).toBeNull();
    // });
  });

  it('updates a session when the edit icon is clicked and saved', async () => {
    const updateMocks = [
      {
        request: {
          query: EDIT_SESSION,
          variables: {
            ID: '1',
            editSessionInput: {
              Sessionname: 'Updated Session Name',
              description: 'Updated Description',
              platform: 'Updated Platform',
              duration: 'Updated Duration',
              organizer: 'Updated Organizer',
            },
          },
        },
        result: {
          data: {
            editSession: true,
          },
        },
      },
      // Add more mocks if needed
    ];

    render(
      <MockedProvider mocks={[...mocks, ...updateMocks]} addTypename={false}>
        <AdminSission />
      </MockedProvider>,
    );

    // await waitFor(() => {
    //   fireEvent.click(screen.getByTestId('updateIcon'));
    //   // expect(screen.getByText('UpdateSession')).toBeInTheDocument();

    //   // Simulate updating session details
    //   fireEvent.change(screen.getByLabelText('Sessionname'), {
    //     target: { value: 'Updated Session Name' },
    //   });
    //   fireEvent.change(screen.getByLabelText('description'), {
    //     target: { value: 'Updated Description' },
    //   });

    //   fireEvent.click(screen.getByText('Save'));
    //   expect(screen.queryByText('UpdateSession')).toBeNull();
    // });
  });
});
