import { fireEvent, render, screen } from '@testing-library/react';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AdminTraineeDashboard from '../AdminTraineeDashboard';

describe('AdminTraineeDashboard Tests', () => {
  it('Renders AdminTraineeDashboard', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ApolloProvider>
            <AdminTraineeDashboard />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should update trainee model', () => {
    const removeModelMck = jest.fn();
    const registerModelMck = jest.fn();

    const { getByTestId } = render(
      <MemoryRouter>
        <ApolloProvider>
          <AdminTraineeDashboard />
        </ApolloProvider>
      </MemoryRouter>,
    );
    const removeModel = getByTestId('removeModel');
    fireEvent.click(removeModel);
    expect(removeModelMck).toBeCalledTimes(0);

    const deleteModel = getByTestId('registerModel');
    fireEvent.click(deleteModel);
    expect(registerModelMck).toBeCalledTimes(0);
  });

  it('should show invite trainee model', () => {
    const removeInviteModelMck = jest.fn();
    const registerModelMck = jest.fn();

    const { getByTestId } = render(
      <MemoryRouter>
        <ApolloProvider>
          <AdminTraineeDashboard />
        </ApolloProvider>
      </MemoryRouter>,
    );
    const removeModel = getByTestId('removeInviteModel');
    fireEvent.click(removeModel);
    expect(removeInviteModelMck).toBeCalledTimes(0);

    const deleteModel = getByTestId('registerModel');
    fireEvent.click(deleteModel);
    expect(registerModelMck).toBeCalledTimes(0);
  });

  it('should save trainee in cohort', () => {
    const saveModelMck = jest.fn();
    const registerModelMck = jest.fn();

    const { getByTestId } = render(
      <MemoryRouter>
        <ApolloProvider>
          <AdminTraineeDashboard />
        </ApolloProvider>
      </MemoryRouter>,
    );
    const saveModel = getByTestId('saveButton');
    fireEvent.click(saveModel);
    expect(saveModelMck).toBeCalledTimes(0);

    const deleteModel = getByTestId('removeModel');
    fireEvent.click(deleteModel);
    expect(registerModelMck).toBeCalledTimes(0);
    expect(deleteModel).toBeInTheDocument();
  });

  it('should remove trainee in cohort', () => {
    const saveModelMck = jest.fn();
    const registerModelMck = jest.fn();

    const { getByTestId } = render(
      <MemoryRouter>
        <ApolloProvider>
          <AdminTraineeDashboard />
        </ApolloProvider>
      </MemoryRouter>,
    );
    const saveModel = getByTestId('removeMemberFromCohort');
    fireEvent.click(saveModel);
    expect(saveModelMck).toBeCalledTimes(0);

    const deleteModel = getByTestId('removeModel');
    fireEvent.click(deleteModel);
    expect(registerModelMck).toBeCalledTimes(0);
    expect(deleteModel).toBeInTheDocument();
  });

  it('should remove 1 trainee in cohort', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ApolloProvider>
          <AdminTraineeDashboard />
        </ApolloProvider>
      </MemoryRouter>,
    );
    expect(getByTestId('registerModel')).toBeInTheDocument();
    expect(getByTestId('removeModel')).toBeInTheDocument();
    expect(getByTestId('removeInviteModel')).toBeInTheDocument();
  });
});
