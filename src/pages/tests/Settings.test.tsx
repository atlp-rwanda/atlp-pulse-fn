/* eslint-disable */
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '../../../test/jest/__mocks__/matchMedia';
import Settings from '../Settings';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import ThemeProvider from '../../hook/ThemeProvider';

describe('Settings page tests', () => {
  it('changes value after selecting another theme', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ApolloProvider>
          <ThemeProvider>
            <Settings />
          </ThemeProvider>
        </ApolloProvider>
      </BrowserRouter>,
    );
    let theme = getByTestId('themeChange');
    expect(theme).toHaveValue('light');

    fireEvent.change(theme, { target: { value: 'dark' } });
    expect(theme).toHaveValue('dark');

    fireEvent.change(theme, { target: { value: 'light' } });
    expect(theme).toHaveValue('light');

    const push = getByTestId('pushChange');
    fireEvent.click(push);
    expect(push).toHaveClass(
      'ml-auto border relative inline-flex h-6 w-12 items-center rounded-full',
    );

    const email = getByTestId('emailChange');
    fireEvent.click(email);
    expect(email).toHaveClass(
      'ml-auto border relative inline-flex h-6 w-12 items-center rounded-full',
    );
  });

  it('changes value after selecting another theme', () => {
    const elem = renderer
      .create(
        <MemoryRouter initialEntries={['/dashboard/settings']}>
          <ApolloProvider>
            <Settings />
          </ApolloProvider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
