import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styles
import logo from './logo.png'; // Import the logo image

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'app dark-theme' : 'app'}>
      <img src={logo} alt="Logo" className="logo" />
      <div className="login-container">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="login-button">Login</button>
      </div>
      <button className="theme-button" onClick={toggleTheme}>
        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
}

export default App;
