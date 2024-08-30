// src/components/InvitationModal.tsx
import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import InviteForm from '../components/invitationModal';

interface InvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function InvitationModal({ isOpen, onClose }: InvitationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <InviteForm onClose={onClose} />
    </div>
  );
}

export default InvitationModal;
