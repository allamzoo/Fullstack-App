import React from 'react';
import './ETANotification.css';

const ETANotification = ({ eta, onClose, position, isDarkTheme }) => {
  return (
    <div className={`eta-notification ${isDarkTheme ? 'dark-theme' : ''}`} style={{ '--position': position }}>
      <div clasName="eta-notification-content">
        <span className="close" onClick={onClose}>&times;</span> {/* Close button */}
        <h2>Driver ETA</h2>
        <p>ETA:  EXAMPLE{eta}</p>
      </div>
    </div>
  );
};

export default ETANotification;
