import React from 'react';
import TeamChart from '../../src/Chart/TeamChart';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Line } from 'react-chartjs-2';

jest.mock('react-chartjs-2', () => ({
  Line: jest.fn(() => <div data-testid="mock-chart" />),
}));

describe('TeamChart Component', () => {
  const mockData: any = {
    daily: { '2024-01-01': { success: 10, failed: 2 } },
    weekly: { '2024-W01': { success: 50, failed: 5 } },
    monthly: { '2024-01': { success: 100, failed: 20 } },
  };

  const mockCurrentTeam = [{ name: 'Team A' }];

  it('renders the TeamChart component', () => {
    render(
      <TeamChart
        timeframe="daily"
        CurrentTeam={mockCurrentTeam}
        loginsbyDate={mockData}
      />,
    );
    expect(screen.getByTestId('mock-chart')).toBeInTheDocument();
  });

  it('organizes login data correctly for daily timeframe', () => {
    const { container } = render(
      <TeamChart
        timeframe="daily"
        CurrentTeam={mockCurrentTeam}
        loginsbyDate={mockData}
      />,
    );

    expect(Line).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        }),
      }),
      {},
    );
  });

  it('renders weekly chart correctly', () => {
    render(
      <TeamChart
        timeframe="weekly"
        CurrentTeam={mockCurrentTeam}
        loginsbyDate={mockData}
      />,
    );

    expect(Line).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          labels: expect.arrayContaining(['03', '06', '09']),
        }),
      }),
      {},
    );
  });

  it('organizes login data correctly for monthly timeframe', () => {
    render(
      <TeamChart
        timeframe="monthly"
        CurrentTeam={mockCurrentTeam}
        loginsbyDate={mockData}
      />,
    );

    expect(Line).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          labels: Array.from({ length: 12 }, (_, i) =>
            String(i + 1).padStart(2, '0'),
          ),
        }),
      }),
      {},
    );
  });

  it('uses the default timeframe of daily when not specified', () => {
    render(<TeamChart CurrentTeam={mockCurrentTeam} loginsbyDate={mockData} />);

    expect(Line).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        }),
      }),
      {},
    );
  });
});
