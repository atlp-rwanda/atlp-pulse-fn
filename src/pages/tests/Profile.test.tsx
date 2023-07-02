import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import * as ReactRouter from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ApolloProvider } from '@apollo/client';
import ProfileTabs from '../../components/ProfileTabs';
import Profile from '../Profile';
import EditProfile from '../ProfileEdit';
/* istanbul ignore next */
import { client } from '../../index';

// eslint-disable-next-line no-import-assign
Object.defineProperty(ReactRouter, 'useLocation', {
  value: jest.fn(),
  configurable: true,
  writable: true,
});

const mockedUseLocationValue = {
  pathname: '/dashboard/profile',
  search: '',
  key: '',
  hash: '',
  state: {
    profile: {
      lastName: 'Doe',
      firstName: 'John',
      country: 'AD',
    },
  },
};

describe('Profile Page', () => {
  it('Renders the whole profile page', () => {
    jest
      .spyOn(ReactRouter, 'useLocation')
      .mockReturnValue(mockedUseLocationValue);
    const elem = render(
      <MemoryRouter>
        <MockedProvider mocks={[]}>
          <Profile />
        </MockedProvider>
      </MemoryRouter>,
    );
    expect(elem).toMatchSnapshot();
  });
  it('Renders the profile tabs', () => {
    const elem = renderer

      .create(
        <MemoryRouter>
          <MockedProvider mocks={[]}>
            <ProfileTabs data={{ name: 'Fabrice' }} />
          </MockedProvider>
        </MemoryRouter>,
      )
      .toJSON();

    expect(elem).toMatchSnapshot();
  });

  it('Renders the edit profile page', () => {
    jest
      .spyOn(ReactRouter, 'useLocation')
      .mockReturnValue(mockedUseLocationValue);
    const elem = render(
      <MemoryRouter>
        <MockedProvider>
          <EditProfile />
        </MockedProvider>
      </MemoryRouter>,
    );
    expect(elem).toMatchSnapshot();
  });

  it('Renders the country selector', () => {
    jest
      .spyOn(ReactRouter, 'useLocation')
      .mockReturnValue(mockedUseLocationValue);
    const { getByTestId } = render(
      <MemoryRouter>
        <MockedProvider>
          <EditProfile />
        </MockedProvider>
      </MemoryRouter>,
    );

    const countrySelector = getByTestId('countries');
    expect(countrySelector).toBeInTheDocument();

    const countrySelectorButton = getByTestId('country-selector-button');
    const countrySelectorFlag = getByTestId('country-selector-flag');
    const countrySelectorTitle = getByTestId('country-selector-title');

    expect(countrySelectorButton).toBeInTheDocument();
    expect(countrySelectorFlag).toBeInTheDocument();
    expect(countrySelectorTitle).toBeInTheDocument();

    fireEvent.click(countrySelectorButton);
    const searchCountry = getByTestId('countrySearch');

    expect(searchCountry).toBeInTheDocument();

    const handleChangeMck = jest.fn();

    fireEvent.change(searchCountry, { target: { value: 'Kenya' } });
    const countrySelectorOption = getByTestId('country-selector-option');
    expect(countrySelectorOption).toBeInTheDocument();
    fireEvent.click(countrySelectorOption);
    expect(handleChangeMck).toBeCalledTimes(0);
    expect(countrySelectorTitle).toHaveTextContent('Kenya');
  });
});
