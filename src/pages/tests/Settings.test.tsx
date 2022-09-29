/* eslint-disable */
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '../../../test/jest/__mocks__/matchMedia';
import renderer from 'react-test-renderer';
import Settings from '../Settings';
<<<<<<< HEAD
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
=======
import { MemoryRouter } from 'react-router';
>>>>>>> 0892d7e94fc378817a4400024857ca780c02174c

describe('Settings page tests', () => {
  it('changes value after selecting another theme', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ApolloProvider>
          <Settings />
        </ApolloProvider>
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
  it('changes value after selecting another theme', () => {
    const elem = renderer
      .create(
        <MemoryRouter initialEntries={['/dashboard/settings']}>
<<<<<<< HEAD
          <ApolloProvider>
            <Settings />
          </ApolloProvider>
=======
          <Settings />
>>>>>>> 0892d7e94fc378817a4400024857ca780c02174c
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
