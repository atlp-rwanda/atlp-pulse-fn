import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RemoveTokenPage from '../../src/utils/RemoveTokenPage';

describe('<RemoveTokenPage />', () => {
  it('Renders redirect page', () => {
    const elem = renderer
      .create(
        <MemoryRouter initialEntries={['/signup/org/someToken']}>
          <RemoveTokenPage />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
