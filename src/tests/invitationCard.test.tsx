import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvitationCard from '../components/InvitationCard';
import { AiOutlineUser } from 'react-icons/ai';

describe('InvitationCard', () => {
  const mockProps = {
    icon: <AiOutlineUser />,
    status: 'Active Users',
    time: 'Last 24 hours',
    staticNumber: '45,000',
    percentage: '20%'
  };

  it('renders without crashing', () => {
    render(<InvitationCard {...mockProps} />);
  });

  it('displays the correct status', () => {
    render(<InvitationCard {...mockProps} />);
    expect(screen.getByText('Active Users')).toBeInTheDocument();
  });

  it('displays the correct time', () => {
    render(<InvitationCard {...mockProps} />);
    expect(screen.getByText('Last 24 hours')).toBeInTheDocument();
  });

  it('displays the correct static number', () => {
    render(<InvitationCard {...mockProps} />);
    expect(screen.getByText('45,000')).toBeInTheDocument();
  });

  it('displays the correct percentage', () => {
    render(<InvitationCard {...mockProps} />);
    expect(screen.getByText('20%')).toBeInTheDocument();
  });

  it('renders the icon', () => {
    render(<InvitationCard {...mockProps} />);
    expect(screen.getByTestId('ai-outline-user')).toBeInTheDocument();
  });
});