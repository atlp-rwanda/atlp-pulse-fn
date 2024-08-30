import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvitationModal from '../../pages/invitationModalComponet';

jest.mock('../../components/invitationModal', () => {
  return function MockInviteForm({ onClose }: { onClose: () => void }) {
    return <div data-testid="invite-form">Mock Invite Form</div>;
  };
});

describe('InvitationModal', () => {
  it('renders nothing when isOpen is false', () => {
    render(<InvitationModal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByTestId('invite-form')).not.toBeInTheDocument();
  });

  it('renders the InviteForm when isOpen is true', () => {
    render(<InvitationModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByTestId('invite-form')).toBeInTheDocument();
  });

  it('applies the correct styles to the modal wrapper', () => {
    render(<InvitationModal isOpen={true} onClose={() => {}} />);
    const modalWrapper = screen.getByTestId('invite-form').parentElement;
    expect(modalWrapper).toHaveClass(
      'fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50',
    );
  });
});
