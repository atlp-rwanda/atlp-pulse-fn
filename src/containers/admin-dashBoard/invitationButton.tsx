
import React, { useState } from 'react';
import InvitationModal from '../../pages/invitationModelComponet';

function InvitationButton () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <button
      type='button'
        className="flex justify-center bg-blue-300 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleOpenModal}
      >
        Invite User
      </button>
      <InvitationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default InvitationButton;
