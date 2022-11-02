import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { fireEvent, render } from '@testing-library/react';
import OrgLogin from '../Organization/Orglogin';

const client = new ApolloClient({ cache: new InMemoryCache() });

describe('Organization Login', () => {
  it('Should render', () => {
    const elem = renderer
      .create(
        <ApolloProvider client={client}>
          <MemoryRouter>
            <OrgLogin />
          </MemoryRouter>
        </ApolloProvider>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});

it('Should submit the form', async () => {
  const { getByTestId, findByText } = render(
    <ApolloProvider client={client}>
      <MemoryRouter>
        <OrgLogin />
      </MemoryRouter>
    </ApolloProvider>,
  );

  fireEvent.input(getByTestId('orgName'), {
    target: { value: 'Andela' },
  });
  fireEvent.submit(getByTestId('loginForm'));
  expect(await findByText('Continue')).toBeInTheDocument();
});
