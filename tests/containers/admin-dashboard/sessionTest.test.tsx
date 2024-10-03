import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import AdminSission from '../../../src/containers/admin-dashBoard/Sessions';
import {
  GET_SESSIONS,
  CREATE_SESSION,
  DELETE_SESSION,
  EDIT_SESSION,
} from '../../../src/Mutations/session';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));
jest.mock(
  '../../../src/components/DataTable',
  () =>
    function MockDataTable({ data, columns }: any) {
      return (
        <div data-testid="data-table">
          {data.map((item: any, index: number) => (
            <div key={item.id}>
              {columns.map((column: any) => (
                <span key={column.accessor}>
                  {column.Cell
                    ? column.Cell({ row: { original: item } })
                    : item[column.accessor]}
                </span>
              ))}
            </div>
          ))}
        </div>
      );
    },
);

const mocks = [
  {
    request: {
      query: GET_SESSIONS,
    },
    result: {
      data: {
        getAllSessions: [
          {
            id: '1',
            Sessionname: 'Test Session',
            description: 'Test Description',
            platform: 'Test Platform',
            duration: '1:00',
            organizer: 'Test Organizer',
          },
        ],
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
  it('displays session data in the table', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AdminSission />
      </MockedProvider>,
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
      </MockedProvider>,
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText('register +'));
    });

    expect(screen.getByText('AddSession')).toBeInTheDocument();
  });

  it('opens delete session modal when delete icon is clicked', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AdminSission />
      </MockedProvider>,
    );

    await waitFor(() => {
      const deleteIcon = screen.getByTestId('deleteIcon');
      fireEvent.click(deleteIcon);
    });

    expect(screen.getByText('DeleteSession')).toBeInTheDocument();
  });

  it('opens update session modal when update icon is clicked', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AdminSission />
      </MockedProvider>,
    );

    await waitFor(() => {
      const updateIcon = screen.getByTestId('updateIcon');
      fireEvent.click(updateIcon);
    });

    expect(screen.getByText('UpdateSession')).toBeInTheDocument();
  });
});
