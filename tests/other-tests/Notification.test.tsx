import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '../../test/jest/__mocks__/matchMedia';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import Notification from '../../src/components/Notification';
import UserProvider from '../../src/hook/useAuth';

describe('notification test', () => {
  it('should render notification', () => {
    const elem = renderer
      .create(
        <ApolloProvider>
          <MemoryRouter>
            <UserProvider>
              <Notification handleShowNotification={() => {}} />
            </UserProvider>
          </MemoryRouter>
        </ApolloProvider>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  test('should read a notification', async () => {
    act(() => {
      render(
        <ApolloProvider>
          <MemoryRouter>
            <UserProvider>
              <Notification handleShowNotification={() => {}} />
            </UserProvider>
          </MemoryRouter>
        </ApolloProvider>,
      );
    });

    const container = screen.getByTestId('notificationsContainer');
    const keyClick = screen.getByTestId('keyClick');

    act(() => {
      fireEvent.click(keyClick);
      fireEvent.keyDown(keyClick);
    });

    expect(container).toBeInTheDocument();
  });
});
