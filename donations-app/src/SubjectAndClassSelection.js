import React, { useState } from 'react';
import logo from './logo.png';
import './HomeScreen.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
const navigate = useNavigate();

const handleHomeClick = () => {
navigate(-1); // Go back to the previous page
};

return (
<button onClick={handleHomeClick}>Home</button>
);
};
function SubjectAndClassSelection() {
  const [teachingData, setTeachingData] = useState({
    subjects: '',
    proBonoStudents: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeachingData({ ...teachingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if required fields are filled out
    if (teachingData.subjects.trim() === '' || teachingData.proBonoStudents === 0) {
      alert('Please fill out all required fields.');
    } else {
      // Handle form submission, e.g., sending data to backend
      console.log('Teaching data submitted:', teachingData);
      alert('Teaching data submitted successfully!');
    }
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'home-container dark-theme' : 'home-container'}>
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
      <div class="dropdown">
<button class="dropbtn"> &#9776;</button>
<div class="dropdown-content">
<Link to="/hs" style={{ textDecoration: 'none' }}>

<HomeButton />
</Link>

<Link to="/l" style={{ textDecoration: 'none' }}>
  <button>Sign Out</button>
  </Link>
  <button>Update/Delete Account</button>

</div>
</div>
      
    </div>
      <div className="teaching-details-container">
        <h2 className={isDarkTheme ? 'dark-mode-header' : 'light-mode-header'}>Subject and Class Selection for Teaching</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Subjects"
              className="input-field"
              name="subjects"
              value={teachingData.subjects}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <input
              type="number"
              placeholder="Pro-bono Students"
              className="input-field"
              name="proBonoStudents"
              value={teachingData.proBonoStudents}
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

export default SubjectAndClassSelection;