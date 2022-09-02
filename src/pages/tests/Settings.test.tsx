/* eslint-disable */
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../../test/jest/__mocks__/matchMedia';

import Settings from '../Settings';

describe('Settings page tests', () => {
  it('changes value after selecting another theme', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>,
    );
    let theme = getByTestId('themeChange');
    expect(theme).toHaveValue('dark');

    fireEvent.change(theme, { target: { value: 'dark' } });
    expect(theme).toHaveValue('dark');

    fireEvent.change(theme, { target: { value: 'light' } });
    expect(theme).toHaveValue('light');

    let push = getByTestId('pushChange');
    fireEvent.click(push);
    expect(push).toBeChecked();

    let email = getByTestId('emailChange');
    fireEvent.click(email);
    expect(email).toBeChecked();
  });
});
