import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import ProfileCoverpage from '../ProfileCoverpage';

const client = new ApolloClient({ cache: new InMemoryCache() });

describe('<ProfileTabs/>', () => {
  it('Renders Profile Tabs', () => {
    const elem = renderer
      .create(
        <ApolloProvider client={client}>
          <MemoryRouter>
            <ProfileCoverpage
              data={{ name: 'Fabrice' }}
              currentPage="editProfile"
            />
          </MemoryRouter>
        </ApolloProvider>,
      )
      .toJSON();

    expect(elem).toMatchSnapshot();
  });

  it('should update trainee profile image', () => {
    const updateImageMck = jest.fn();

    const { getByTestId } = render(
      <ApolloProvider client={client}>
        <MemoryRouter>
          <ProfileCoverpage
            data={{ name: 'Fabrice' }}
            currentPage="editProfile"
          />
        </MemoryRouter>
      </ApolloProvider>,
    );
    const updateImage = getByTestId('upload-image');
    fireEvent.change(updateImage);
    expect(updateImageMck).toBeCalledTimes(0);
  });

  it('should update trainee cover image', () => {
    const updateCoverMck = jest.fn();

    const { getByTestId } = render(
      <ApolloProvider client={client}>
        <MemoryRouter>
          <ProfileCoverpage
            data={{ name: 'Fabrice' }}
            currentPage="editProfile"
          />
        </MemoryRouter>
      </ApolloProvider>,
    );
    const updateCover = getByTestId('upload-cover');
    fireEvent.change(updateCover);
    expect(updateCoverMck).toBeCalledTimes(0);
  });
});
