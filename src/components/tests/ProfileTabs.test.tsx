import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import ProfileTabs from '../ProfileTabs';

describe('<ProfileTabs/>', () => {
  it('Renders Profile Tabs', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProfileTabs />
      </MemoryRouter>,
    );

    getByText('Account');
    fireEvent.click(getByText('Account'));
    expect(getByText('Change Password')).toBeInTheDocument();
  });
});
