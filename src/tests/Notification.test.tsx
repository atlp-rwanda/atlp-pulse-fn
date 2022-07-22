import React from 'react';
import { act } from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '../../test/jest/__mocks__/matchMedia';
import Notification from '../../src/components/Notification';

describe('notification test', () => {
  // it('should render notification', () => {
  //   const handleMadeFunction = () => {};
  //   const elem = renderer
  //     .create(<Notification handleShowNotification={handleMadeFunction} />)
  //     .toJSON();
  //   expect(elem).toMatchSnapshot();
  // });
  test('should read a notification', async () => {
    act(() => {
      render(<Notification handleShowNotification={() => {}} />);
    });

    const container = screen.getByTestId('notificationsContainer');
    const markAllReadBtn = screen.getByTestId('markAllRead');
    const deleteBtn = screen.getByTestId('delete');
    const readBtn = screen.getByTestId('read');
    const keyClick = screen.getByTestId('keyClick');

    act(() => {
      fireEvent.click(markAllReadBtn);
      fireEvent.click(deleteBtn);
      fireEvent.click(readBtn);
      fireEvent.click(keyClick);
      fireEvent.keyDown(keyClick);
    });

    expect(container.children[0]).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    expect(markAllReadBtn).toBeInTheDocument();
  });
});
