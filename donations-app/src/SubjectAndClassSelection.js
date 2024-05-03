import React, { useState } from 'react';
import logo from './logo.png';
import './SubjectAndClassSelection.css'; // Import the CSS file for styles

function SubjectAndClassSelection() {
  const [teachingData, setTeachingData] = useState({
    subjects: '',
    proBonoClasses: 0,
    proBonoStudents: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeachingData({ ...teachingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to backend
    console.log('Teaching data submitted:', teachingData);
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'app dark-theme' : 'app'}>
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
              placeholder="Pro-bono Classes"
              className="input-field"
              name="proBonoClasses"
              value={teachingData.proBonoClasses}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
    <input
        type="text"
        placeholder="Subjects"
        className={`input-field ${isDarkTheme ? 'dark-theme' : ''}`}
        name="subjects"
        value={teachingData.subjects}
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
