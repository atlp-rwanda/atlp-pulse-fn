import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import AdminTraineeDashboard from '../AdminTraineeDashboard';

describe('AdminTraineeDashboard Tests', () => {
  it('Renders AdminTraineeDashboard', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <AdminTraineeDashboard />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should update trainee model', () => {
    const removeModelMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <AdminTraineeDashboard />
      </MemoryRouter>,
    );
    const removeModel = getByTestId('removeModel');
    fireEvent.click(removeModel);
    expect(removeModelMck).toBeCalledTimes(0);
  });

  it('should update trainee model', () => {
    const handleSortMck = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <AdminTraineeDashboard />
      </MemoryRouter>,
    );
    const handleSort = getByTestId('handleSort2');
    fireEvent.click(handleSort);
    expect(handleSortMck).toBeCalledTimes(0);
  });
});
