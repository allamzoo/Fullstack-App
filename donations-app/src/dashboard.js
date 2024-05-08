import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './label.jpeg';
import './dashboard.css'; // Import common theme styles
import ThemeContext from './ThemeContext'; // Import ThemeContext

function Dashboard() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Access theme context

  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  // Function to fetch notifications
  const fetchNotifications = () => {
    // Simulating fetching notifications from a server
    const mockNotifications = [
      { id: 1, message: 'Donation post 1 has been chosen by a donor.', timestamp: '10:00 AM' },
      { id: 2, message: 'Donation post 2 has been chosen by a donor.', timestamp: '2024-04-27 3:30 PM' },
      { id: 3, message: 'Donation post 3 has been chosen by a donor.', timestamp: '2024-04-26 12:45 PM' },
    ];
    setNotifications(mockNotifications);
    setShowNotifications(true);
  };

  // Function to hide notifications
  const hideNotifications = () => {
    setShowNotifications(false);
  };

  return (
    <div className={isDarkTheme ? 'full-screen dark-theme' : 'full-screen light-theme'}>
      <div className="logo-bar" style={{ padding: '20px' }}>
        <img src={logo} className="logo" alt="logo" style={{ width: '600px', height: '120px' }} />
      </div>
      <header className="App-header">
        <p style={{ fontSize: '3rem', color: '#fba2d7', textAlign: 'center' }}>
          Welcome to Dashboard!
        </p>
        <div className="button-container">
        <label className="theme-switch" htmlFor="theme-switch">
          <input
            type="checkbox"
            id="theme-switch"
            checked={isDarkTheme}
            onChange={toggleTheme}
          />
          <div className="slider"></div>
        </label>
          
          <button className="notification-button" onClick={fetchNotifications}>
            {/* Add your notification icon or shape here */}
            <span className="notification-icon">🔔</span>
            {notifications.length > 0 && <span className="notification-badge">{notifications.length}</span>}
          </button>
          
          {showNotifications && (
            <div className="popup1">
              <div className="popup1-content">
                <span className="close" onClick={hideNotifications}>&times;</span>
                <h2>Notifications</h2>
                {notifications.map(notification => (
                  <p key={notification.id}>{notification.message}</p>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Additional buttons */}
        <div className="button-pair-container">
          <Link to="/location" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <button className="common-button">Go to Location Mapping</button>
          </Link>
          <Link to="/another-location" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <button className="common-button">Upload your verification document</button>
          </Link>
          <Link to="/yet-another-location" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <button className="common-button">Update/Delete posts info</button>
          </Link>
        
          <Link to="/and-one-more-location" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <button className="common-button">Update/Delete account info</button>
          </Link>
          <Link to="/notifications" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <button className="common-button">Deleting fulfilled posts</button>
          </Link>
          <Link to="/post" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <button className="common-button">Create Donation Post</button>
          </Link>
          <Link to="/details" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <button className="common-button">Enter Donation delatils</button>
          </Link>
          <Link to="/schedule" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <button className="common-button">Schedule selection</button>
          </Link>
          <Link to="/DonationViewOptions" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <button className="common-button">Views Options</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Dashboard;
