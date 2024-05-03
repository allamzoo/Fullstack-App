import React, { useState } from 'react';
import logo from './logo.png';
import './login.css'; // Corrected import path

function Login() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'app dark-theme' : 'app'}>
      <div className="top-bar">
        <img src={logo} alt="Logo" className="logo" />
        <button className="theme-button" onClick={toggleTheme}>
          Toggle theme
        </button>
      </div>
      <div className="login-container">
        <div className="input-container">
          <input type="text" placeholder="Username" className="input-field" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" className="input-field" />
        </div>
        <button className="login-button">Login</button>
        <p className="registration-text">
          Don't have an account yet? Explore our registration options below:
        </p>
        <div className="register-buttons">
          <button className="register-button">Register as Donation</button>
          <button className="register-button">Register as Organization</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
