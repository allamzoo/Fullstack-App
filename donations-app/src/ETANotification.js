// ETANotification.js

import React from 'react';
import './ETANotification.css';

const ETANotification = ({ eta, onClose }) => {
  return (
    <div className="eta-notification">
      <div className="eta-notification-content">
        <span className="close" onClick={onClose}>&times;</span> {/* Close button */}
        <h2>Driver ETA</h2>
        <p>ETA: 12:00 pm{eta}</p>
      </div>
    </div>
  );
};

export default ETANotification;
