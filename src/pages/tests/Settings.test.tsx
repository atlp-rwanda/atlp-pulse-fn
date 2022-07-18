import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '../../../test/jest/__mocks__/matchMedia';

import Settings from '../Settings';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key }),
  initReactI18next: { type: '3rdParty', init: jest.fn() },
}));

describe('Settings page tests', () => {
  it('changes value after selecting another theme', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>
    );
    let theme = getByTestId('themeChange');
    expect(theme).toHaveValue('light');

    fireEvent.change(theme, { target: { value: 'dark' } });
    expect(theme).toHaveValue('dark');

    fireEvent.change(theme, { target: { value: 'light' } });
    expect(theme).toHaveValue('light');
  });
});
