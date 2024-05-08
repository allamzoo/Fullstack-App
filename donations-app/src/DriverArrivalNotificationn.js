

import React from 'react';

const DriverArrivalNotification = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Driver Has Arrived</h2>
        <p>The driver has arrived for your donation pickup.</p>
        <button className="confirm-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DriverArrivalNotification;