// /components/SessionInfoModal.js

import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const SessionInfoModal = ({ isOpen, onClose, session }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Session Information</h2>
      {session && (
        <div>
          <p>Name: {session.user.name}</p>
          <p>Email: {session.user.email}</p>
          {/* Add more session information here */}
        </div>
      )}
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default SessionInfoModal;
