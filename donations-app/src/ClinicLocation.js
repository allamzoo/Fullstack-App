import React, { useState } from 'react';
import logo from './logo.png';
import './ClinicLocation.css'; // Import the CSS file for styles

function ClinicLocation() {
  const [clinicData, setClinicData] = useState({
    address: '',
    area: '',
    governorate: '',
    specialty: '',
    proBonoCases: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClinicData({ ...clinicData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to backend
    console.log('Clinic data submitted:', clinicData);
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : ''}`}>
     <div className="top-bar">
        <img src={logo} alt="Logo" className="logo" />
        <label className="theme-switch" htmlFor="theme-switch">
          <input
            type="checkbox"
            id="theme-switch"
            checked={isDarkTheme}
            onChange={toggleTheme}
          />
          <div className="slider round"></div>
        </label>
      </div>
      <div className="clinic-location-container">
        <h2>Clinic Location Specification</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Address"
              className="input-field"
              name="address"
              value={clinicData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Area"
              className="input-field"
              name="area"
              value={clinicData.area}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Governorate"
              className="input-field"
              name="governorate"
              value={clinicData.governorate}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Specialty"
              className="input-field"
              name="specialty"
              value={clinicData.specialty}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <input
              type="number"
              placeholder="Pro-bono Cases"
              className="input-field"
              name="proBonoCases"
              value={clinicData.proBonoCases}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ClinicLocation;
