import React, { useState, useEffect } from 'react';
import './post.css'; // Import CSS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'; // Import icons

import logo from './WhatsApp Image 2024-04-28 at 12.14.31 AM.jpeg'; // Logo path



function DonationPostt() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Theme state
  const [category, setCategory] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev); // Toggle the theme
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSuccessMessage('Donation post created successfully!');
    setCategory(''); // Reset the category
    setItemDescription(''); // Reset the item description
  };

  useEffect(() => {
    // Remove the success message after 3 seconds
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage(''); // Clear the success message
      }, 3000); // Clear after 3 seconds

      return () => clearTimeout(timeout); // Cleanup timeout if component unmounts
    }
  }, [successMessage]); // Effect depends on successMessage

  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';

  return (
    <div className={`donation-post ${themeClass}`}>
      {/* Top bar with logo and buttons */}
      <div className="top-bar">
        <img src={logo} className="logo" alt="Logo" style={{ width: '600px', height: '120px' }} /> 

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
      </div>

      {/* Form for creating a donation post */}
      <div className="form-wrapper">
        <h2>Create Donation Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="category">Select Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>Select Category</option>
              <option value="clothes">Clothes</option>
              <option value="toys">Toys</option>
              <option value="food">Food</option>
              <option value="medical_supplies">Medical Supplies</option>
              <option value="school_supplies">School Supplies</option>
              <option value="blood_donations">Blood Donations</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="itemDescription">Item Description:</label>
            <textarea
              id="itemDescription"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              required
              placeholder="Describe the donation item..."
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Create Post
          </button>
        </form>

        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default DonationPostt;
