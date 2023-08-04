import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import React from 'react';
import '../../../../test/jest/__mocks__/matchMedia';

import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AdminCohort from '../Cohorts';

describe('Cohorts tests', () => {
  it('Snapshots Cohorts Page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ApolloProvider>
            <AdminCohort />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  jest.setTimeout(10000);
  it('Renders Cohorts Page', async () => {
    render(
      <MemoryRouter>
        <ApolloProvider addTypename={false}>
          <AdminCohort />
        </ApolloProvider>
      </MemoryRouter>,
    );

    const updateIcon = await screen.findByTestId('updateIcon');
    const deleteIcon = await screen.findByTestId('deleteIcon');
    const viewTraineeIcon = await screen.findByTestId('traineeIcon');
    expect(updateIcon).toBeInTheDocument();
    expect(deleteIcon).toBeInTheDocument();
    expect(viewTraineeIcon).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(updateIcon);
    });
    const updateCohortModal = await screen.findByTestId('updateCohortModal');
    const confirmUpdateBtn = await screen.findByTestId('confirmUpdateBtn');
    expect(updateCohortModal).toBeVisible();
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
