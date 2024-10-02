import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ProfileDropdown from '../../src/components/ProfileDropdown';

describe('<ProfileDropdown/>', () => {
  it('Renders the Dropdown', () => {
    const handleShowProfileDropdownMock = jest.fn();
    const elem = renderer
      .create(
        <MemoryRouter>
          <ProfileDropdown
            handleShowProfileDropdown={handleShowProfileDropdownMock}
          />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
