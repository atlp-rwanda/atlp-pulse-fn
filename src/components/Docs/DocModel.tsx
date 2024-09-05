/* eslint-disable react/function-component-definition */
import React from 'react';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => (
  <div className="modal font-serif">
    <div className="modal-content">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      {children}
    </div>
  </div>
);

export default Modal;
