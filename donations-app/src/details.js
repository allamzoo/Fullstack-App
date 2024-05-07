import React, { useState } from 'react';

import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'; // House icon for "Home" button

import logo from './label.jpeg';// Adjusted logo path for consistency

function DonationDetails() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Theme state
  const [category, setCategory] = useState('clothes'); // Default category
  const [details, setDetails] = useState({}); // Details state for the form

  const toggleTheme = () => setIsDarkTheme((prev) => !prev); // Toggle theme

  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // Update category based on selection
    setDetails({}); // Reset details when category changes
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Donation Details:', { category, details });
    alert('Donation details submitted!\nCategory: ${category}\nDetails: ${JSON.stringify(details)}');
  };

  const renderDetailsForm = () => {
    switch (category) {
      case 'clothes':
        return (
          <>
            <div className="input-group">
              <label htmlFor="size">Size:</label>
              <input
                type="text"
                name="size"
                value={details.size || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="condition">Condition:</label>
              <input
                type="text"
                name="condition"
                value={details.condition || ''}
                onChange={handleInputChange}
              />
            </div>
          </>
        );
      case 'food':
        return (
          <>
            <div className="input-group">
              <label htmlFor="expiration">Expiration Date:</label>
              <input
                type="date"
                name="expiration"
                value={details.expiration || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="brand">Brand:</label>
              <input
                type="text"
                name="brand"
                value={details.brand || ''}
                onChange={handleInputChange}
              />
            </div>
          </>
        );
      case 'toys':
        return (
          <>
            <div className="input-group">
              <label htmlFor="age">Recommended Age:</label>
              <input
                type="text"
                name="age"
                value={details.age || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="material">Material:</label>
              <input
                type="text"
                name="material"
                value={details.material || ''}
                onChange={handleInputChange}
              />
            </div>
          </>
        );
      case 'medical-supplies':
        return (
          <>
            <div className="input-group">
              <label htmlFor="expiration">Expiration Date:</label>
              <input
                type="date"
                name="expiration"
                value={details.expiration || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="usage">Usage:</label>
              <input
                type="text"
                name="usage"
                value={details.usage || ''}
                onChange={handleInputChange}
              />
            </div>
          </>
        );
      case 'school-supplies':
        return (
          <>
            <div className="input-group">
              <label htmlFor="type">Type:</label>
              <input
                type="text"
                name="type"
                value={details.type || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="brand">Brand:</label>
              <input
                type="text"
                name="brand"
                value={details.brand || ''}
                onChange={handleInputChange}
              />
            </div>
          </>
        );
      case 'blood-donations':
        return (
          <>
            <div className="input-group">
              <label htmlFor="blood-type">Blood Type:</label>
              <input
                type="text"
                name="blood-type"
                value={details['blood-type'] || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                name="quantity"
                value={details.quantity || ''}
                onChange={handleInputChange}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };
  const home = () => {
        
    window.location.href = '/';
};

  return (
    <div className={`full-screen ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="logo-bar">
        <img src={logo} className="logo" alt="Organization Logo" style={{ width: '600px', height: '120px' }} />

        <div className="top-bar-buttons"> {/* Flex container for buttons */}
        <button className="home-button" onClick={home}>
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
      </div>

      <div className="content-wrapper">
        <h2>Enter Donation Details</h2>

        <div className="input-group"> {/* Select category */}
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="clothes">Clothes</option>
            <option value="food">Food</option>
            <option value="toys">Toys</option>
            <option value="medical-supplies">Medical Supplies</option>
            <option value="school-supplies">School Supplies</option>
            <option value="blood-donations">Blood Donations</option>
          </select>
        </div>

        {renderDetailsForm()} {/* Render appropriate form based on category */}

        <button className="common-button" onClick={handleSubmit}>Submit Donation Details</button>
      </div>
    </div>
  );
}

export default DonationDetails;