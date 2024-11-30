import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TeamDetailsModal from '../../src/components/AdminTeamDetails';

const mockOnClose = jest.fn();

const mockTeams = [
  {
    name: 'Team A',
    avgRatings: {
      quality: '4.5',
      quantity: '3.5',
      professional_Skills: '5.0',
    },
    members: [
      { status: { status: 'active' } },
      { status: { status: 'suspended' } },
    ],
    cohort: {
      name: 'Cohort 1',
      phase: { name: 'Phase 1' },
      program: { name: 'Program A' },
    },
    ttl: { profile: { name: 'TTL Name' } },
  },
];

const mockSelectedTeam = {
  teams: 'Team A',
  organization: 'Org Name',
};

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('TeamDetailsModal', () => {
  it('handles tab switching between Overview and Logins', () => {
    render(
      <TeamDetailsModal
        isOpen={true}
        onClose={mockOnClose}
        selectedteam={mockSelectedTeam}
        Teams={mockTeams}
      />,
    );

    fireEvent.click(screen.getByText('Logins'));
    expect(screen.getByText('Logins')).toHaveClass('text-primary');
  });

  it('calls onClose when the Close button is clicked', () => {
    render(
      <TeamDetailsModal
        isOpen={true}
        onClose={mockOnClose}
        selectedteam={mockSelectedTeam}
        Teams={mockTeams}
      />,
    );

    fireEvent.click(screen.getByText('Close'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
