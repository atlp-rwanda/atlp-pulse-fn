import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
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
    const registerModelMck = jest.fn();

    const { getByTestId } = render(
      <MemoryRouter>
        <AdminTraineeDashboard />
      </MemoryRouter>,
    );
    const removeModel = getByTestId('removeModel');
    fireEvent.click(removeModel);
    expect(removeModelMck).toBeCalledTimes(0);

    const deleteModel = getByTestId('registerModel');
    fireEvent.click(deleteModel);
    expect(registerModelMck).toBeCalledTimes(0);
  });
});
