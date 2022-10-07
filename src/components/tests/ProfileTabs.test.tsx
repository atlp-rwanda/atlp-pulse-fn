import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ProfileTabs from '../ProfileTabs';

describe('<ProfileTabs/>', () => {
  it('Renders Profile Tabs', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProfileTabs data={{ name: 'Fabrice' }} />
      </MemoryRouter>,
    );

    expect(getByText('Change Password')).toBeInTheDocument();
    expect(
      screen.getAllByText('You in the organization')[0],
    ).toBeInTheDocument();
    expect(getByText('Biography')).toBeInTheDocument();
  });
});
