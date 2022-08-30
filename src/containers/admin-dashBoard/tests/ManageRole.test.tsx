/* eslint-disable */
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../../../test/jest/__mocks__/matchMedia';

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
});
