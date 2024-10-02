import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvitationModal from '../../src/pages/invitationModalComponet';

jest.mock(
  '../../src/components/invitationModal',
  () =>
    function MockInviteForm({ onClose }: { onClose: () => void }) {
      return <div data-testid="invite-form">Mock Invite Form</div>;
    },
);

describe('InvitationModal', () => {
  it('renders nothing when isOpen is false', () => {
    render(<InvitationModal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByTestId('invite-form')).not.toBeInTheDocument();
  });

  it('renders the InviteForm when isOpen is true', () => {
    render(<InvitationModal isOpen onClose={() => {}} />);
    expect(screen.getByTestId('invite-form')).toBeInTheDocument();
  });

  it('applies the correct styles to the modal wrapper', () => {
    render(<InvitationModal isOpen onClose={() => {}} />);
    const modalWrapper = screen.getByTestId('invite-form').parentElement;
    expect(modalWrapper).toHaveClass(
      'fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50',
    );
  });
});
