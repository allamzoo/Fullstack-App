// PickupConfirmation.js

import React from 'react';

const PickupConfirmation = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // Call onClose function passed from parent component
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Pickup Confirmed</h2>
        <p>The driver will be there shortly.</p>
        <button className="confirm-button" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default PickupConfirmation;
