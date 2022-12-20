import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '../../test/jest/__mocks__/matchMedia';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import Notification from '../../src/components/Notification';
import UserProvider from '../hook/useAuth';

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
    const markAllReadBtn = screen.getByTestId('markAllRead');
    const keyClick = screen.getByTestId('keyClick');
    const seeAllNotification = screen.getByTestId('seeAllNotification');

    act(() => {
      fireEvent.click(markAllReadBtn);
      fireEvent.click(keyClick);
      fireEvent.keyDown(keyClick);
      fireEvent.click(seeAllNotification);
    });

    expect(container).toBeInTheDocument();
    expect(markAllReadBtn).toBeInTheDocument();
  });
});
