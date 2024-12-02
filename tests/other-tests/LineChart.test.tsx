import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import UserGrowth from '../../src/Chart/LineChart';
import GET_ROLE_QUERY from '../../src/containers/admin-dashBoard/GetRolesQuery';
import React from 'react';

const mockData = {
  getAllUsers: [
    { createdAt: '1630454400000', updatedAt: '1630454400000' },
    { createdAt: '1633146400000', updatedAt: '1633146400000' },
  ],
};

const mocks = [
  {
    request: {
      query: GET_ROLE_QUERY,
      variables: { orgToken: 'mockToken' },
    },
    result: {
      data: mockData,
    },
  },
];

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('UserGrowth Component', () => {
  it('updates the selected year correctly on dropdown change', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserGrowth />
      </MockedProvider>,
    );

    await waitFor(() => {
      const yearSelect = screen.getByLabelText(/Year:/i);
      expect(yearSelect).toBeInTheDocument();

      fireEvent.change(yearSelect, { target: { value: '2023' } });

      expect((yearSelect as HTMLSelectElement).value).toBe('2023');
    });
  });
});
