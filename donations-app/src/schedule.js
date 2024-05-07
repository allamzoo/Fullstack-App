import React, { useState } from 'react';
import './schedule.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Home icon
import logo from './WhatsApp Image 2024-04-28 at 12.14.31 AM.jpeg'; // Logo image

function ScheduleDropoff() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Theme state

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev); // Toggle theme state
  };

  const handleHomeClick = () => {
    window.location.href = '/'; // Redirect to home
  };

  const handleSubmit = () => {
    alert('Schedule Submitted!'); // Alert on form submission
  };

  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme'; // Determine theme class

  return (
    <div className={`schedule-dropoff ${themeClass}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <img src={logo} className="logo" alt="Organization Logo" style={{ width: '600px', height: '120px' }} />

        {/* Button Container */}
        <div className="top-bar-buttons">
          {/* Theme Switch Button */}
          {/* Home Button */}
          <button
            className="home-button"
            onClick={handleHomeClick}
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </button>
          <label className="theme-switch" htmlFor="theme-switch">
            <input
              type="checkbox"
              id="theme-switch"
              checked={isDarkTheme}
              onChange={toggleTheme} // Toggle theme on change
            />
            <div className="slider round"></div> {/* Custom slider for theme switch */}
          </label>

          
        </div>
      </div>

      {/* Form Wrapper */}
      <div className="form-wrapper">
        <h2>Schedule Donation Drop-off</h2>

        {/* Input Group - Date */}
        <div className="input-group">
          <label htmlFor="date">Select Date:</label>
          <input type="date" id="date" />
        </div>

        {/* Input Group - Time */}
        <div className="input-group">
          <label htmlFor="time">Select Time:</label>
          <input type="time" id="time" />
        </div>

        {/* Input Group - Preferred Method */}
        <div class="input-group">
          <label htmlFor="preferredMethod">Preferred Method:</label>
          <select id="preferredMethod">
            <option value="Drop-off">Drop-off</option>
            <option value="Pick-up">Pick-up</option>
          </select>
        </div>

        {/* Additional Information */}
        <div class="input-group">
          <label htmlFor="additionalInfo">Additional Information:</label>
          <textarea
            id="additionalInfo"
            placeholder="Enter any additional information or instructions..."
          />
        </div>

        {/* Submit Button */}
        <button
          className="submit-button"
          onClick={handleSubmit}
        >
          Submit Schedule
        </button>
      </div>
    </div>
  );
}

export default ScheduleDropoff;
