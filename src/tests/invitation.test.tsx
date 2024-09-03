import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Invitation from '../pages/invitation';

// Define the props interface for InvitationCard
interface InvitationCardProps {
  status: string;
}

// Mock the InvitationCard component
jest.mock(
  '../components/InvitationCard',
  () =>
    function MockInvitationCard({ status }: InvitationCardProps) {
      return (
        <div data-testid={`invitation-card-${status.toLowerCase()}`}>
          {status}
        </div>
      );
    },
);

describe('Invitation Component', () => {
  beforeEach(() => {
    render(<Invitation />);
  });

  test('renders the header correctly', () => {
    expect(screen.getByText('Invitation Stats')).toBeInTheDocument();
  });

  test('renders the Invite User button', () => {
    const inviteButton = screen.getByRole('button', { name: /Invite User/i });
    expect(inviteButton).toBeInTheDocument();
  });

  test('renders four InvitationCard components', () => {
    expect(screen.getByTestId('invitation-card-accepted')).toBeInTheDocument();
    expect(screen.getByTestId('invitation-card-pending')).toBeInTheDocument();
    expect(screen.getByTestId('invitation-card-denied')).toBeInTheDocument();
    expect(
      screen.getByTestId('invitation-card-invitations'),
    ).toBeInTheDocument();
  });

  test('renders the filter dropdown', () => {
    const filterDropdown = screen.getAllByRole('combobox')[0];
    expect(filterDropdown).toBeInTheDocument();
    expect(filterDropdown).toHaveDisplayValue('Select range');
  });

  test('renders the search section', () => {
    expect(
      screen.getByText('Search for Invitation Status'),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Search by email or name of the invitee'),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });
});
