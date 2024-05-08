import React, { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; 
import logo from './label.jpeg';
import ThemeContext from './ThemeContext';
import './dashboard.css'; // Import CSS for styling

function ScheduleDropoff() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Theme state

 

  const handleHomeClick = () => {
    window.location.href = '/'; // Redirect to home
  };

  const handleSubmit = () => {
    alert('Schedule Submitted!'); // Alert on form submission
  };
 

  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme'; // Determine theme class

  return (
    <div className={`donation1-post ${themeClass}`}>
      {/* Top bar with logo and buttons */}
      <div className="logo-bar" style={{ padding: '20px' }}>
        <img src={logo} className="logo" alt="Logo" style={{ width: '600px', height: '120px' }} /> 
        </div>
        <div className="top-bar-buttons">
        <button onClick={() => window.location.href = '/'} className="home-button">
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />
            Home
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

      {/* Form Wrapper */}
      <div className="form-wrapper1">
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
