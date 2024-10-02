import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import React from 'react';
import '../../../test/jest/__mocks__/matchMedia';

import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AdminPhases from '../../../src/containers/admin-dashBoard/Phases';

describe('Phases tests', () => {
  it('Snapshots Phases Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ApolloProvider>
            <AdminPhases />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  jest.setTimeout(5000);
  it('Renders Phases Page', async () => {
    render(
      <MemoryRouter>
        <ApolloProvider addTypename={false}>
          <AdminPhases />
        </ApolloProvider>
      </MemoryRouter>,
    );

    const updateIcon = await screen.findByTestId('updateIcon');
    const deleteIcon = await screen.findByTestId('deleteIcon');
    expect(updateIcon).toBeInTheDocument();
    expect(deleteIcon).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(updateIcon);
    });
    const confirmUpdateBtn = await screen.findByTestId('confirmUpdateBtn');
    expect(confirmUpdateBtn).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(confirmUpdateBtn);
    });

    await act(async () => {
      fireEvent.click(deleteIcon);
    });
    const confirmDeleteBtn = await screen.findByTestId('confirmDeleteBtn');
    expect(confirmDeleteBtn).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(confirmDeleteBtn);
    });
  });
});
