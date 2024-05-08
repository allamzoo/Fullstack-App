import React, { useState, useEffect , useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './dashboard.css'; 
import ThemeContext from './ThemeContext'; // Import ThemeContext
import logo from './label.jpeg';



function DonationPostt() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Theme state
  const [category, setCategory] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  

  

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
