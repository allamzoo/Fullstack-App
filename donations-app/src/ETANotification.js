import React from 'react';
import './ETANotification.css';

const ETANotification = ({ eta, onClose, position }) => {
  return (
    <div className="eta-notification" style={{ '--position': position }}>
      <div className="eta-notification-content">
        <span className="close" onClick={onClose}>&times;</span> {/* Close button */}
        <h2>Driver ETA</h2>
        <p>ETA:  EXAMPLE{eta}</p>
      </div>
    </div>
  );
};

export default ETANotification;
