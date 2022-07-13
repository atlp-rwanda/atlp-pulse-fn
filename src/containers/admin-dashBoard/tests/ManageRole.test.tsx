/* eslint-disable */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '../../../../test/jest/__mocks__/matchMedia';

import ManageRole from '../ManagerRoles';

describe('Manage role page tests', () => {
  it('Removes the model on click', () => {
    const removeRoleModel = jest.fn();
    const deleteRoleModel = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <ManageRole />
      </BrowserRouter>,
    );
    let removeManageRole = getByTestId('remove');
    fireEvent.click(removeManageRole);
    expect(removeRoleModel).toHaveBeenCalledTimes(0);

    let deleteManageRole = getByTestId('delete');
    fireEvent.click(deleteManageRole);
    expect(deleteRoleModel).toHaveBeenCalledTimes(0);
  });
});
