/* eslint-disable */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
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
    expect(theme).toHaveValue('light');

    fireEvent.change(theme, { target: { value: 'dark' } });
    expect(theme).toHaveValue('dark');

    fireEvent.change(theme, { target: { value: 'light' } });
    expect(theme).toHaveValue('light');
  });
  it('changes value after selecting another theme', () => {
    const elem = renderer
      .create(
        <MemoryRouter initialEntries={['/dashboard/settings']}>
          <Settings />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
