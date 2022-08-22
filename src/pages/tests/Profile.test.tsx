import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Profile from '../Profile';
import EditProfile from '../ProfileEdit';
import ProfileTabs from '../../components/ProfileTabs';

describe('Profile Page', () => {
  it('Renders the whole profile page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <Profile />
        </MemoryRouter>,
      )
      .toJSON();

    expect(elem).toMatchSnapshot();
  });
  it('Renders the profile tabs', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <ProfileTabs />
        </MemoryRouter>,
      )
      .toJSON();

    expect(elem).toMatchSnapshot();
  });

  it('Renders the edit profile page', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <EditProfile />
        </MemoryRouter>,
      )
      .toJSON();

    expect(elem).toMatchSnapshot();
  });

  it('Renders the country selector', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <EditProfile />
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
