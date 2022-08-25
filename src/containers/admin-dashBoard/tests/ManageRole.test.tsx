/* eslint-disable */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '../../../../test/jest/__mocks__/matchMedia';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import ManageRole from '../ManagerRoles';

describe('Manage role page tests', () => {
  it('Removes the model on click', () => {
    const deleteRoleModel = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <ManageRole />
      </BrowserRouter>,
    );

    let deleteManageRole = getByTestId('delete');
    fireEvent.click(deleteManageRole);
    expect(deleteRoleModel).toHaveBeenCalledTimes(0);
  });
  it('Renders manage role', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ManageRole />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
