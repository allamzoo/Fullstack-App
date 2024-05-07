import React, { useState } from 'react';
import logo from './logo.png';
import './ClinicLocation.css'; // Import the CSS file for styles

function ClinicLocation() {
  const [clinicData, setClinicData] = useState({
    address: '',
    area: '',
    governorate: '',
    specialty: '',
    proBonoCases: 0,
    locationUrl: '' // Add a new field for location URL
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClinicData({ ...clinicData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any required field is empty
    if (!clinicData.address || !clinicData.area || !clinicData.governorate || !clinicData.specialty || !clinicData.proBonoCases || !clinicData.locationUrl) {
      alert('Please fill out all fields.'); // Display alert if any required field is missing
      return;
    }
    // Handle form submission, e.g., sending data to backend
    console.log('Clinic data submitted:', clinicData);
    alert('Data submitted successfully!');
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
          <div className="input-container">
            <input
              type="text"
              placeholder="Location URL"
              className="input-field"
              name="locationUrl"
              value={clinicData.locationUrl}
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
