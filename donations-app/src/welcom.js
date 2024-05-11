import React, { useState } from 'react';
import logo from './logo.png'; // Import your logo image
import backgroundImg from './background.jpg'; // Import your background image
import './welcome.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom';


function WelcomePage() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
<div className={isDarkTheme ? 'welcome-page dark-theme' : 'welcome-page'}>
      <div className="top-barr">
        <img src={logo} alt="Logo" className="logo" />
        <label className="theme-switch" htmlFor="theme-switch" >
          <input
            type="checkbox"
            id="theme-switch"
            checked={isDarkTheme}
            onChange={toggleTheme}
         
          />
          <div className="slider round" ></div>
        </label>
      </div>
      <div className="welcome-content" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="overlay"></div>
        <h1>Welcome to Donation, where every act of kindness matters.</h1>
        <p1>Join us in making a difference in the lives of those in need. Together, we can create positive change and spread hope to communities around the world.</p1>
        <p2>Explore our platform to discover impactful causes, share your support, and be a part of something bigger than yourself.</p2>
        <Link to="/l" style={{ textDecoration: 'none', marginRight: '10px' }}>
        <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
